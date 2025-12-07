# Builder image
FROM node:18-alpine AS builder

WORKDIR /app

# First install dependencies so we can cache them
RUN apk update && apk upgrade
RUN apk add curl

COPY package.json package-lock.json ./
RUN npm install

# Now copy the rest of the app and build it
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner

WORKDIR /app

# Create a non-root user
RUN addgroup -S nonroot && adduser -S nonroot -G nonroot
USER nonroot

# Copy the standalone output from the builder image
COPY --from=builder --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /app/public ./public
COPY --from=builder --chown=nonroot:nonroot /app/.next/static ./.next/static

# Prepare the app for production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

# Expõe a porta 80 ao invés da 3000, direcionando as requisições externas para 3000 na aplicação.
EXPOSE 80

# Inicializa a aplicação Next.js na porta 3000, mas o container recebe requests pela porta 80.
CMD ["sh", "-c", "node server.js"]

# Nota:
# Para redirecionar as requisições da porta 80 para a 3000 (porta da sua aplicação),
# execute o container com:  docker run -p 80:3000 <image-name>
# Ou especifique na configuração de orquestração (Kubernetes, Docker Compose, Kamal, etc.) o mapeamento da porta 80 do host para a 3000 do container.
