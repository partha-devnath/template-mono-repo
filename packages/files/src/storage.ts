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

export function createS3Storage(opts: S3Options): StorageProvider {
  const {
    bucket,
    endpoint,
    region = "us-east-1",
    accessKeyId,
    secretAccessKey,
    baseUrl,
  } = opts

  const clientInit: {
    region: string
    endpoint?: string
    credentials?: { accessKeyId: string; secretAccessKey: string }
    forcePathStyle?: boolean
  } = {
    region,
    forcePathStyle: true,
  }

  if (endpoint) {
    clientInit.endpoint = endpoint
  }

  if (accessKeyId && secretAccessKey) {
    clientInit.credentials = { accessKeyId, secretAccessKey }
  }

  return {
    async save(file, storedName) {
      const { PutObjectCommand, S3Client } = await import("@aws-sdk/client-s3")
      const s3 = new S3Client(clientInit)
      const body = file instanceof Blob ? new Uint8Array(await file.arrayBuffer()) : file
      const mimeType = file.type || "application/octet-stream"

      await s3.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: storedName,
          Body: body,
          ContentType: mimeType,
        }),
      )

      const url = baseUrl
        ? `${baseUrl.replace(/\/$/, "")}/${storedName}`
        : `${endpoint ?? ""}/${bucket}/${storedName}`

      return { id: storedName, storedName, path: storedName, url }
    },

    async delete(storedName) {
      const { DeleteObjectCommand, S3Client } = await import("@aws-sdk/client-s3")
      const s3 = new S3Client(clientInit)
      await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: storedName }))
    },

    url(storedName) {
      if (baseUrl) {
        return `${baseUrl.replace(/\/$/, "")}/${storedName}`
      }
      return `${endpoint ?? ""}/${bucket}/${storedName}`
    },
  }
}
