import app from "./app"
import { validateEnv } from "./env"

const env = validateEnv()

console.log(`API server running on http://localhost:${env.PORT}`)

export default {
  port: env.PORT,
  fetch: app.fetch,
}
