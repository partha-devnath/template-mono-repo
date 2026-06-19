type SendEmailParams = {
  email: string
  url: string
}

export type EmailSender = {
  sendVerificationEmail: (params: SendEmailParams) => Promise<void>
  sendResetPasswordEmail: (params: SendEmailParams) => Promise<void>
}

const consoleSender: EmailSender = {
  sendVerificationEmail: async ({ email, url }) => {
    console.log(`[EMAIL] Verification to ${email}: ${url}`)
  },
  sendResetPasswordEmail: async ({ email, url }) => {
    console.log(`[EMAIL] Reset password to ${email}: ${url}`)
  },
}

function createResendSender(): EmailSender {
  return {
    sendVerificationEmail: async ({ email, url }) => {
      console.log(`[RESEND] Verification to ${email}: ${url}`)
    },
    sendResetPasswordEmail: async ({ email, url }) => {
      console.log(`[RESEND] Reset password to ${email}: ${url}`)
    },
  }
}

const provider = process.env.EMAIL_PROVIDER

export const emailSender: EmailSender =
  provider === "resend" ? createResendSender() : consoleSender
