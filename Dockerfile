# Install dependencies only when needed
FROM node:20-alpine3.18 AS deps
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y el archivo package-lock.json (o yarn.lock si estás usando Yarn)
COPY package.json yarn.lock /app/

# Instala las dependencias
RUN yarn install

# Copia el resto de los archivos de la aplicación
COPY . /app/

# Construye la aplicación
RUN yarn build

# Exponer el puerto en el que se ejecutará la aplicación Next.js
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]