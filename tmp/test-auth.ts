const url = "http://localhost:3001/api/auth/request-password-reset"
const body = JSON.stringify({ email: "test@example.com" })
const r = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body,
})
console.log("Status:", r.status)
console.log("Body:", await r.text())
