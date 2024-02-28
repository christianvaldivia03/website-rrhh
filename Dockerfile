# Etapa de instalación de dependencias
FROM node:20-alpine3.18 AS deps
# Instalar dependencias de sistema necesarias
RUN apk add --no-cache libc6-compat
# Establecer el directorio de trabajo
WORKDIR /app
# Copiar archivos de dependencias
COPY package.json yarn.lock ./
# Instalar dependencias con Yarn
RUN yarn install --frozen-lockfile

# Etapa de construcción de la aplicación
FROM node:20-alpine3.18 AS builder
# Establecer el directorio de trabajo
WORKDIR /app
# Copiar archivos de la etapa anterior de dependencias
COPY --from=deps /app/node_modules ./node_modules
# Copiar el resto de la aplicación
COPY . .
# Construir la aplicación
RUN yarn build

# Etapa final de ejecución de la aplicación
FROM node:20-alpine3.18 AS runner
# Establecer el directorio de trabajo
WORKDIR /app
# Copiar archivos de la etapa de construcción
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
# Instalar dependencias de producción
RUN yarn install --production --frozen-lockfile
# Exponer el puerto 3000
EXPOSE 3000
# Comando de inicio de la aplicación
CMD ["yarn", "start"]
