FROM oven/bun:1 AS base
WORKDIR /app

COPY . .
RUN bun install --frozen-lockfile

EXPOSE 3001
CMD ["bun", "apps/api/src/index.ts"]
