import app from "./app"
import { validateEnv } from "./env"
import { closeDb } from "@workspace/db"
import { createLogger } from "@workspace/logger"

const env = validateEnv()
const logger = createLogger("api")

const server = Bun.serve({
  port: env.PORT,
  fetch: app.fetch,
})

logger.info(`API server running on http://localhost:${env.PORT}`)

const shutdown = async (signal: string) => {
  logger.info(`Received ${signal}, shutting down...`)
  server.stop()
  try {
    await closeDb()
    logger.info("Database connection closed")
  } catch (error) {
    logger.error(error, "Error closing database connection")
  }
  process.exit(0)
}

process.on("SIGTERM", () => shutdown("SIGTERM"))
process.on("SIGINT", () => shutdown("SIGINT"))
