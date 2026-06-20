import type { Logger } from "./types"

export function createLogger(name: string): Logger {
  const prefix = `[${name}]`

  function format(objOrMsg: unknown, msg?: string): unknown[] {
    if (typeof objOrMsg === "string") {
      return msg !== undefined ? [prefix, objOrMsg, msg] : [prefix, objOrMsg]
    }
    if (objOrMsg instanceof Error) {
      return [prefix, msg ?? objOrMsg.message, objOrMsg]
    }
    if (objOrMsg && typeof objOrMsg === "object") {
      return [prefix, msg ?? "", objOrMsg]
    }
    return [prefix, String(objOrMsg)]
  }

  return {
    info(objOrMsg, msg) {
      console.info(...format(objOrMsg, msg))
    },
    warn(objOrMsg, msg) {
      console.warn(...format(objOrMsg, msg))
    },
    error(objOrMsg, msg) {
      console.error(...format(objOrMsg, msg))
    },
    debug(objOrMsg, msg) {
      console.debug(...format(objOrMsg, msg))
    },
  }
}
