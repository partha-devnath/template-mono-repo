import { createFactory } from "hono/factory"
import { cors } from "hono/cors"
import { getConnInfo } from "hono/bun"
import { auth } from "@workspace/auth"
import { createLogger } from "@workspace/logger"

type Env = {
  Variables: {
    requestId: string
  }
}

const factory = createFactory<Env>()
const logger = createLogger("api")

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

export default app
