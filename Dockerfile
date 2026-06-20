FROM node:22-slim
WORKDIR /app
RUN apt-get update && apt-get install -y \
  python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PNPM_ALLOW_ALL_BUILDS=1
ENV NODE_OPTIONS="--max-old-space-size=6144"
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]