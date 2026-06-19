import type { StorageProvider } from "./storage"

export function serveFile(storage: StorageProvider, storedName: string) {
  const url = storage.url(storedName)
  return fetch(url)
}
