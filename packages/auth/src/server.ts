import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@workspace/db"
import * as schema from "@workspace/schemas"
import { emailSender } from "@workspace/email"
import { createLogger } from "@workspace/logger"

const logger = createLogger("auth")

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      verification: schema.verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }: { user: { id: string; email: string }; url: string }) => {
      logger.info({ userId: user.id }, "Sending verification email")
      await emailSender.sendVerificationEmail({ email: user.email, url })
    },
  },
  resetPassword: {
    sendResetPasswordEmail: async ({ user, url }: { user: { id: string; email: string }; url: string }) => {
      logger.info({ userId: user.id }, "Sending reset password email")
      await emailSender.sendResetPasswordEmail({ email: user.email, url })
    },
  },
})
