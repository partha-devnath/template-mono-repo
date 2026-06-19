const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001"

type RequestOptions = {
  method?: string
  body?: unknown
  headers?: Record<string, string>
}

export async function apiClient<T = unknown>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", body, headers = {} } = options

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.error ?? `Request failed with status ${response.status}`
    )
  }

  return data
}
