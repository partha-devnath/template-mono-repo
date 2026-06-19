import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"

export async function runMigrations() {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    console.error("DATABASE_URL environment variable is required")
    process.exit(1)
  }

  const migrateClient = postgres(connectionString, { max: 1 })
  const migrationDb = drizzle(migrateClient)

  try {
    await migrate(migrationDb, { migrationsFolder: "./migrations" })
    console.log("Migrations completed successfully")
  } catch (error) {
    console.error("Migration failed:", error)
    process.exit(1)
  } finally {
    await migrateClient.end()
  }
}

await runMigrations()
