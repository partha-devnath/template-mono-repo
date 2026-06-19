import { createFactory } from "hono/factory"
import { cors } from "hono/cors"
import { eq } from "drizzle-orm"
import { getConnInfo } from "hono/bun"
import { auth } from "@workspace/auth"
import { createLogger } from "@workspace/logger"
import { db } from "@workspace/db"
import { file as fileSchema } from "@workspace/schemas"
import { createLocalStorage, uploadFile } from "@workspace/files"

type Env = {
  Variables: {
    requestId: string
  }
}

const factory = createFactory<Env>()
const logger = createLogger("api")

const storage = createLocalStorage({
  baseDir: "./uploads",
  baseUrl: "/api/files/raw",
})

const app = factory.createApp()

app.use("*", cors({ origin: process.env.CLIENT_URL ?? "http://localhost:5173", credentials: true }))

app.use("*", factory.createMiddleware(async (c, next) => {
  const info = getConnInfo(c)
  c.set("requestId", crypto.randomUUID())
  logger.info({ remote: info.remote, requestId: c.var.requestId }, `${c.req.method} ${c.req.path}`)
  await next()
}))

app.use("*", factory.createMiddleware(async (c, next) => {
  try {
    await next()
  } catch (error) {
    logger.error(error, "Unhandled error")
    const status = error instanceof Error && "status" in error ? (error as any).status : 500
    const message = error instanceof Error ? error.message : "Internal Server Error"
    return c.json(
      { success: false, error: status === 500 ? "Internal Server Error" : message },
      status as 400 | 401 | 403 | 404 | 500,
    )
  }
}))

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw))

app.get("/api/health", (c) => c.json({ success: true, data: { status: "ok", requestId: c.var.requestId } }))

app.get("/api/protected", async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })
  if (!session) {
    return c.json({ success: false, error: "Unauthorized" }, 401)
  }
  return c.json({ success: true, data: { user: session.user } })
})

app.post("/api/files/upload", async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })
  if (!session) {
    return c.json({ success: false, error: "Unauthorized" }, 401)
  }

  const formdata = await c.req.formData()
  const file = formdata.get("file")

  if (!file || !(file instanceof File)) {
    return c.json({ success: false, error: "No file provided" }, 400)
  }

  try {
    const result = await uploadFile({
      storage,
      userId: session.user.id,
      file,
      maxSize: 10 * 1024 * 1024,
    })
    return c.json({ success: true, data: result }, 201)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed"
    return c.json({ success: false, error: message }, 400)
  }
})

app.get("/api/files/:id", async (c) => {
  const id = c.req.param("id")
  const [record] = await db.select().from(fileSchema).where(eq(fileSchema.id, id)).limit(1)
  if (!record) {
    return c.json({ success: false, error: "File not found" }, 404)
  }
  return c.json({ success: true, data: record })
})

export default app
