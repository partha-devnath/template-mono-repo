import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import * as schema from "@workspace/schemas"

const connectionString = process.env.DATABASE_URL!

const client = postgres(connectionString, {
  prepare: false,
  max: 10,
})

export const db = drizzle(client, { schema })
