FROM node:22-slim
WORKDIR /app
RUN apt-get update && apt-get install -y \
  python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PNPM_ALLOW_ALL_BUILDS=1
ENV NODE_OPTIONS="--max-old-space-size=6144"
ENV CI=true
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
RUN pnpm config set ignore-scripts false
RUN pnpm install
RUN pnpm rebuild better-sqlite3 sharp esbuild @parcel/watcher vue-demi
COPY . .
RUN DEBUG=vite:*,nuxt:* pnpm build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]