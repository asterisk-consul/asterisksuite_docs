# syntax=docker/dockerfile:1
FROM node:22-slim AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN --mount=type=cache,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

FROM deps AS build
ENV NODE_OPTIONS="--max-old-space-size=4096"
COPY . .
RUN --mount=type=cache,target=/app/.nuxt pnpm build

FROM node:22-slim AS runtime
RUN apt-get update && apt-get install -y dos2unix && rm -rf /var/lib/apt/lists/*
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
COPY --from=build /app/.output/server ./server
COPY --from=deps /app/node_modules ./node_modules
RUN find server -type f \( -name "*.js" -o -name "*.mjs" -o -name "*.cjs" \) -exec dos2unix {} \; 2>/dev/null || true
EXPOSE 3000
CMD ["node", "server/index.mjs"]
