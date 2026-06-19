export type StoredFile = {
  id: string
  storedName: string
  path: string
  url: string
}

export interface StorageProvider {
  save(file: File, storedName: string): Promise<StoredFile>
  delete(storedName: string): Promise<void>
  url(storedName: string): string
}

type LocalOptions = {
  baseDir: string
  baseUrl: string
}

export function createLocalStorage(opts: LocalOptions): StorageProvider {
  const { baseDir, baseUrl } = opts

  return {
    async save(file, storedName) {
      const path = `${baseDir}/${storedName}`
      await Bun.write(path, file)
      return { id: storedName, storedName, path, url: `${baseUrl}/${storedName}` }
    },

    async delete(storedName) {
      await Bun.file(`${baseDir}/${storedName}`).delete()
    },

    url(storedName) {
      return `${baseUrl}/${storedName}`
    },
  }
}

type S3Options = {
  bucket: string
  endpoint?: string
  region?: string
  accessKeyId?: string
  secretAccessKey?: string
  baseUrl?: string
}

export function createS3Storage(_opts: S3Options): StorageProvider {
  throw new Error("S3 storage not implemented. Install @aws-sdk/client-s3 and implement save/delete/url.")
}
