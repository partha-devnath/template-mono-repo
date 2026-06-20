import pino from "pino"
import type { Logger } from "./types"

export function createLogger(name: string): Logger {
  const logger = pino({
    name,
    level: process.env.LOG_LEVEL ?? "info",
  })

  return {
    info(objOrMsg, msg) {
      if (typeof objOrMsg === "string") logger.info(objOrMsg)
      else logger.info(objOrMsg, msg)
    },
    warn(objOrMsg, msg) {
      if (typeof objOrMsg === "string") logger.warn(objOrMsg)
      else logger.warn(objOrMsg, msg)
    },
    error(objOrMsg, msg) {
      if (objOrMsg instanceof Error) {
        logger.error(
          { err: objOrMsg, stack: objOrMsg.stack },
          msg ?? objOrMsg.message
        )
      } else if (typeof objOrMsg === "string") {
        logger.error(objOrMsg)
      } else if (objOrMsg && typeof objOrMsg === "object") {
        logger.error(objOrMsg as Record<string, unknown>, msg)
      } else {
        logger.error(String(objOrMsg))
      }
    },
    debug(objOrMsg, msg) {
      if (typeof objOrMsg === "string") logger.debug(objOrMsg)
      else logger.debug(objOrMsg, msg)
    },
  }
}
