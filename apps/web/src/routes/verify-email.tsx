import { useEffect, useState } from "react"
import { useSearchParams, Link, useNavigate } from "react-router"
import { Button } from "@workspace/ui/components/button"
import { verifyEmail } from "@/lib/auth-client"

export function VerifyEmailPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get("token")
  const [status, setStatus] = useState<"idle" | "verifying" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!token) {
      setStatus("idle")
      return
    }

    setStatus("verifying")
    verifyEmail({ query: { token } })
      .then((result) => {
        if (result.error) {
          setError(result.error.message ?? "Verification failed")
          setStatus("error")
          return
        }
        setStatus("success")
        setTimeout(() => navigate("/login"), 2000)
      })
      .catch(() => {
        setError("An unexpected error occurred")
        setStatus("error")
      })
  }, [token, navigate])

  if (status === "verifying") {
    return (
      <div className="flex min-h-svh items-center justify-center p-6">
        <p className="text-muted-foreground">Verifying your email...</p>
      </div>
    )
  }

  if (status === "success") {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6">
        <h1 className="text-2xl font-semibold">Email verified!</h1>
        <p className="text-muted-foreground text-sm">Redirecting to login...</p>
        <Button onClick={() => navigate("/login")}>Go to login</Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold">Verify your email</h1>

      {token && error ? (
        <div className="space-y-4 text-center">
          <p className="text-destructive text-sm">{error}</p>
          <Button onClick={() => navigate("/login")}>Back to login</Button>
        </div>
      ) : (
        <p className="text-muted-foreground max-w-md text-center text-sm">
          We sent you a verification link. Check your email and click the link to activate your account.
        </p>
      )}

      {!token && (
        <Link
          to="/login"
          className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
        >
          Back to login
        </Link>
      )}
    </div>
  )
}
