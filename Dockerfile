

# Install dependencies only when needed
FROM node:20-alpine3.18 AS builder

WORKDIR /my-space

COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:20-alpine3.18 as runner
WORKDIR /my-space
COPY --from=builder /my-space/package.json .
COPY --from=builder /my-space/yarn.lock .
COPY --from=builder /my-space/next.config.mjs ./
COPY --from=builder /my-space/public ./public
COPY --from=builder /my-space/.next/standalone ./
COPY --from=builder /my-space/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]