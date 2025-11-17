# 🚀 Billtracky - Deployment a Easypanel con PostgreSQL

**Fecha:** 2024-11-17
**Stack:** Next.js 14 + PostgreSQL + Prisma (igual que importacioneschina)
**Objetivo:** Deploy profesional en tu dominio con Easypanel

---

## 📋 TABLA DE CONTENIDOS

1. [Pre-requisitos](#pre-requisitos)
2. [Configuración de PostgreSQL en Easypanel](#configuración-de-postgresql)
3. [Migración de Firebase a PostgreSQL](#migración-firebase-postgresql)
4. [Setup del Proyecto](#setup-del-proyecto)
5. [Deploy en Easypanel](#deploy-en-easypanel)
6. [Configuración de Dominio](#configuración-dominio)
7. [Librerías Recomendadas](#librerías-recomendadas)

---

## 🎯 PRE-REQUISITOS

### Tu Setup
- ✅ Easypanel instalado y funcionando
- ✅ Dominio configurado (ej: billtracky.tudominio.com)
- ✅ Acceso SSH a tu servidor
- ✅ Repositorio GitHub: curetcore/Billtracky

### Software Necesario
```bash
# Verificar instalaciones locales
node --version  # v18 o superior
npm --version   # v9 o superior
git --version
```

---

## 🗄️ CONFIGURACIÓN DE POSTGRESQL EN EASYPANEL

### Paso 1: Crear Base de Datos en Easypanel

1. **Acceder a Easypanel:**
   ```
   https://tu-servidor.com:3000
   ```

2. **Crear Servicio PostgreSQL:**
   - Click en "Create Service"
   - Seleccionar "PostgreSQL"
   - Configuración:
     ```yaml
     Name: billtracky-db
     Version: 16 (latest)
     Database Name: billtracky
     Username: billtracky_user
     Password: [GENERAR PASSWORD FUERTE]
     Port: 5432 (default)
     Volume: /data (persistente)
     ```

3. **Obtener String de Conexión:**
   ```
   postgresql://billtracky_user:PASSWORD@billtracky-db:5432/billtracky
   ```

### Paso 2: Verificar Conexión

```bash
# Desde tu máquina local (si tienes túnel SSH)
psql "postgresql://billtracky_user:PASSWORD@tu-servidor:5432/billtracky"

# O desde Easypanel terminal
docker exec -it billtracky-db psql -U billtracky_user -d billtracky
```

---

## 🔄 MIGRACIÓN DE FIREBASE A POSTGRESQL

### Cambios en el Stack

```diff
- Firebase Firestore (NoSQL)
+ PostgreSQL 16 (SQL)

- Firebase Auth
+ NextAuth.js (ya compatible con Prisma)

- Firebase Storage
+ MinIO / S3 / Cloudinary / Local storage

- Firebase Functions
+ Next.js API Routes (ya tienes)
```

### Modelo de Datos con Prisma

Copiaremos el schema exitoso de importacioneschina y lo adaptaremos:

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// USUARIOS
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime? @map("email_verified")
  image         String?
  password      String?   // Para NextAuth credentials
  role          UserRole  @default(EMPLOYEE)
  
  accounts      Account[]
  sessions      Session[]
  
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")
  
  @@map("users")
}

enum UserRole {
  ADMIN
  MANAGER
  EMPLOYEE
  VIEWER
}

// NEXTAUTH TABLES
model Account {
  id                String  @id @default(cuid())
  userId            String  @map("user_id")
  type              String
  provider          String
  providerAccountId String  @map("provider_account_id")
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique @map("session_token")
  userId       String   @map("user_id")
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
  @@map("verification_tokens")
}

// ÓRDENES
model Order {
  id              String      @id @default(cuid())
  orderNumber     String      @unique @map("order_number")
  customerId      String?     @map("customer_id")
  customerName    String      @map("customer_name")
  orderDate       DateTime    @map("order_date")
  status          OrderStatus @default(PENDING)
  
  // Financiero
  totalFOB        Decimal     @db.Decimal(12, 2) @map("total_fob")
  totalFinal      Decimal?    @db.Decimal(12, 2) @map("total_final")
  
  // Adjuntos JSON
  attachments     Json?
  notes           String?     @db.Text
  
  // Relaciones
  items           OrderItem[]
  payments        Payment[]
  transactions    Transaction[]
  
  // Timestamps
  createdAt       DateTime    @default(now()) @map("created_at")
  updatedAt       DateTime    @updatedAt @map("updated_at")
  deletedAt       DateTime?   @map("deleted_at")
  
  @@index([orderNumber])
  @@index([customerName])
  @@index([orderDate])
  @@index([status])
  @@index([deletedAt])
  @@map("orders")
}

enum OrderStatus {
  PENDING
  PROCESSING
  COMPLETED
  CANCELLED
}

model OrderItem {
  id              String   @id @default(cuid())
  orderId         String   @map("order_id")
  
  sku             String
  name            String
  quantity        Int
  unitPrice       Decimal  @db.Decimal(10, 2) @map("unit_price")
  subtotal        Decimal  @db.Decimal(12, 2)
  
  // Para distribución de costos
  weight          Decimal? @db.Decimal(10, 4)
  volume          Decimal? @db.Decimal(10, 6)
  
  order           Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  
  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")
  
  @@index([orderId])
  @@index([sku])
  @@map("order_items")
}

// PAGOS
model Payment {
  id              String        @id @default(cuid())
  paymentId       String        @unique @map("payment_id")
  orderId         String?       @map("order_id")
  
  paymentDate     DateTime      @map("payment_date")
  paymentType     PaymentType   @map("payment_type")
  paymentMethod   PaymentMethod @map("payment_method")
  currency        Currency
  amount          Decimal       @db.Decimal(12, 2)
  exchangeRate    Decimal       @default(1) @db.Decimal(8, 4) @map("exchange_rate")
  
  attachments     Json?
  notes           String?       @db.Text
  
  order           Order?        @relation(fields: [orderId], references: [id])
  
  createdAt       DateTime      @default(now()) @map("created_at")
  updatedAt       DateTime      @updatedAt @map("updated_at")
  deletedAt       DateTime?     @map("deleted_at")
  
  @@index([orderId])
  @@index([paymentDate])
  @@index([paymentType])
  @@index([deletedAt])
  @@map("payments")
}

enum PaymentType {
  ADVANCE
  BALANCE
  FULL
  PARTIAL
}

enum PaymentMethod {
  BANK_TRANSFER
  CREDIT_CARD
  CASH
  CHECK
  PAYPAL
  OTHER
}

enum Currency {
  USD
  RD
  EUR
}

// EMPLEADOS
model Employee {
  id              String       @id @default(cuid())
  employeeId      String       @unique @map("employee_id")
  
  name            String
  email           String       @unique
  phone           String?
  role            EmployeeRole
  
  hireDate        DateTime     @map("hire_date")
  salary          Decimal?     @db.Decimal(10, 2)
  
  active          Boolean      @default(true)
  notes           String?      @db.Text
  
  createdAt       DateTime     @default(now()) @map("created_at")
  updatedAt       DateTime     @updatedAt @map("updated_at")
  deletedAt       DateTime?    @map("deleted_at")
  
  @@index([name])
  @@index([email])
  @@index([active])
  @@index([deletedAt])
  @@map("employees")
}

enum EmployeeRole {
  ADMIN
  MANAGER
  EMPLOYEE
  VIEWER
}

// TRANSACCIONES
model Transaction {
  id              String            @id @default(cuid())
  transactionId   String            @unique @map("transaction_id")
  orderId         String?           @map("order_id")
  
  type            TransactionType
  category        String
  amount          Decimal           @db.Decimal(12, 2)
  description     String            @db.Text
  transactionDate DateTime          @map("transaction_date")
  
  attachments     Json?
  
  order           Order?            @relation(fields: [orderId], references: [id])
  
  createdAt       DateTime          @default(now()) @map("created_at")
  updatedAt       DateTime          @updatedAt @map("updated_at")
  deletedAt       DateTime?         @map("deleted_at")
  
  @@index([orderId])
  @@index([type])
  @@index([category])
  @@index([transactionDate])
  @@index([deletedAt])
  @@map("transactions")
}

enum TransactionType {
  INCOME
  EXPENSE
}

// CAMPAÑAS DE MARKETING
model Campaign {
  id              String         @id @default(cuid())
  campaignId      String         @unique @map("campaign_id")
  
  name            String
  budget          Decimal        @db.Decimal(12, 2)
  spent           Decimal        @default(0) @db.Decimal(12, 2)
  
  startDate       DateTime       @map("start_date")
  endDate         DateTime       @map("end_date")
  status          CampaignStatus @default(DRAFT)
  
  // Métricas JSON
  metrics         Json?
  
  notes           String?        @db.Text
  
  createdAt       DateTime       @default(now()) @map("created_at")
  updatedAt       DateTime       @updatedAt @map("updated_at")
  deletedAt       DateTime?      @map("deleted_at")
  
  @@index([status])
  @@index([startDate])
  @@index([deletedAt])
  @@map("campaigns")
}

enum CampaignStatus {
  DRAFT
  ACTIVE
  PAUSED
  COMPLETED
}

// AUDIT LOG (CRÍTICO)
model AuditLog {
  id                String   @id @default(cuid())
  
  entity            String
  entityId          String   @map("entity_id")
  action            String
  
  userId            String?  @map("user_id")
  userEmail         String?  @map("user_email")
  ipAddress         String?  @map("ip_address")
  userAgent         String?  @map("user_agent")
  
  changesBefore     Json?    @map("changes_before")
  changesAfter      Json?    @map("changes_after")
  fieldsModified    String[] @map("fields_modified")
  
  description       String?  @db.Text
  
  createdAt         DateTime @default(now()) @map("created_at")
  
  @@index([entity])
  @@index([entityId])
  @@index([action])
  @@index([userId])
  @@index([createdAt])
  @@index([entity, entityId])
  @@map("audit_logs")
}

// CONFIGURACIÓN
model Configuration {
  id              String   @id @default(cuid())
  
  category        String
  key             String
  value           String   @db.Text
  description     String?  @db.Text
  order           Int      @default(0)
  active          Boolean  @default(true)
  
  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")
  
  @@unique([category, key])
  @@index([category])
  @@index([active])
  @@map("configuration")
}
```

---

## 🛠️ SETUP DEL PROYECTO

### Paso 1: Actualizar package.json

```bash
cd ~/Desktop/"Billtracky (1).com"
```

```json
{
  "name": "billtracky",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:deploy": "prisma migrate deploy",
    "prisma:studio": "prisma studio",
    "prisma:seed": "tsx prisma/seed.ts",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    // Core Next.js
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    
    // Database
    "@prisma/client": "^6.19.0",
    
    // Auth
    "next-auth": "^4.24.13",
    "bcryptjs": "^3.0.3",
    
    // Forms & Validation
    "react-hook-form": "^7.53.0",
    "@hookform/resolvers": "^4.1.3",
    "zod": "^3.24.2",
    
    // Data Management
    "@tanstack/react-query": "^5.90.10",
    "@tanstack/react-query-devtools": "^5.90.2",
    
    // Tables
    "@tanstack/react-table": "^8.21.3",
    
    // UI Components
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-dropdown-menu": "^2.1.0",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-select": "^2.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.0",
    
    // Utilities
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.0",
    "class-variance-authority": "^0.7.0",
    
    // Icons
    "lucide-react": "^0.441.0",
    
    // Toast Notifications
    "sonner": "^2.0.7",
    
    // Date Handling
    "date-fns": "^3.6.0",
    
    // Currency
    "currency.js": "^2.0.4",
    
    // File Upload
    "react-dropzone": "^14.3.8",
    
    // Charts
    "recharts": "^2.12.0",
    
    // Export
    "xlsx": "^0.18.5",
    "jspdf": "^3.0.3",
    "jspdf-autotable": "^5.0.2",
    
    // Logging
    "winston": "^3.18.3",
    "winston-daily-rotate-file": "^5.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@types/bcryptjs": "^2.4.6",
    "typescript": "^5.5.0",
    
    "prisma": "^6.19.0",
    "tsx": "^4.20.6",
    
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "prettier": "^3.6.2",
    
    "jest": "^30.2.0",
    "@testing-library/react": "^16.3.0",
    "@testing-library/jest-dom": "^6.9.1",
    "jest-environment-jsdom": "^30.2.0"
  }
}
```

### Paso 2: Crear Estructura de Carpetas

```bash
# Eliminar código Firebase viejo
rm -rf src/

# Crear estructura nueva (igual a importacioneschina)
mkdir -p app/{api,\(auth\),\(pages\)/{dashboard,orders,employees,history,assistant,marketing,services,settings}}
mkdir -p components/{forms,layout,ui,audit}
mkdir -p lib/{hooks,validations,__tests__}
mkdir -p prisma
mkdir -p public/uploads
```

### Paso 3: Variables de Entorno

```bash
# .env.local
DATABASE_URL="postgresql://billtracky_user:PASSWORD@billtracky-db:5432/billtracky"

NEXTAUTH_URL="https://billtracky.tudominio.com"
NEXTAUTH_SECRET="[GENERAR CON: openssl rand -base64 32]"

# Para uploads (opcional)
STORAGE_TYPE="local" # o "s3", "cloudinary"
UPLOAD_DIR="./public/uploads"

# Para emails (opcional)
EMAIL_FROM="noreply@tudominio.com"
SMTP_HOST="smtp.tudominio.com"
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASSWORD=""
```

### Paso 4: Instalar Dependencias

```bash
npm install
npx prisma generate
```

---

## 🚀 DEPLOY EN EASYPANEL

### Opción 1: Deploy con Docker (Recomendado)

1. **Crear Dockerfile:**

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

2. **Crear en Easypanel:**
   - Service Type: "Docker"
   - Repository: `curetcore/Billtracky`
   - Branch: `main`
   - Build Command: (automático con Dockerfile)
   - Port: 3000
   - Environment Variables: (agregar todas del .env)

### Opción 2: Deploy con GitHub Integration

1. **Conectar GitHub:**
   - En Easypanel: "Create Service" → "GitHub"
   - Autorizar acceso a `curetcore/Billtracky`
   - Branch: `main`

2. **Configurar Build:**
   ```yaml
   Build Command: npm run build
   Start Command: npm start
   Port: 3000
   ```

3. **Environment Variables en Easypanel:**
   ```
   DATABASE_URL=postgresql://billtracky_user:PASSWORD@billtracky-db:5432/billtracky
   NEXTAUTH_URL=https://billtracky.tudominio.com
   NEXTAUTH_SECRET=[tu-secret]
   NODE_ENV=production
   ```

### Paso 5: Ejecutar Migraciones

```bash
# Desde Easypanel terminal o SSH
docker exec -it billtracky-app npx prisma migrate deploy
docker exec -it billtracky-app npx prisma db seed
```

---

## 🌐 CONFIGURACIÓN DE DOMINIO

### En Easypanel:

1. **Agregar Dominio:**
   - Settings → Domains
   - Add Domain: `billtracky.tudominio.com`
   - Enable SSL (Let's Encrypt)

2. **DNS (en tu proveedor de dominio):**
   ```
   Type: A
   Name: billtracky
   Value: [IP de tu servidor Easypanel]
   TTL: 300
   ```

3. **Verificar:**
   ```bash
   curl https://billtracky.tudominio.com
   ```

---

## 📦 LIBRERÍAS RECOMENDADAS

### Ya Incluidas (de importacioneschina):

1. **@tanstack/react-query** - Data fetching con cache
2. **@tanstack/react-table** - Tablas profesionales
3. **react-hook-form + zod** - Formularios validados
4. **@radix-ui/*** - Componentes UI accesibles
5. **sonner** - Toast notifications
6. **currency.js** - Matemáticas financieras precisas
7. **date-fns** - Manejo de fechas
8. **lucide-react** - Iconos modernos
9. **winston** - Logging estructurado
10. **jest + RTL** - Testing

### Adicionales Opcionales:

```bash
# File uploads mejorado
npm install uploadthing

# AI (ya tienes Genkit)
# Ya configurado en tu proyecto

# Analytics
npm install @vercel/analytics

# Monitoring
npm install @sentry/nextjs
```

---

## ✅ CHECKLIST DE DEPLOY

### Pre-Deploy
- [ ] PostgreSQL creado en Easypanel
- [ ] Schema Prisma configurado
- [ ] Variables de entorno configuradas
- [ ] Dockerfile creado
- [ ] Build local exitoso (`npm run build`)

### Deploy
- [ ] Servicio creado en Easypanel
- [ ] Conexión a GitHub configurada
- [ ] Environment variables agregadas
- [ ] Build exitoso en Easypanel
- [ ] Migraciones ejecutadas
- [ ] Seed data cargado

### Post-Deploy
- [ ] Dominio configurado y SSL activo
- [ ] Login funcionando
- [ ] Dashboard cargando
- [ ] CRUD funcionando
- [ ] Uploads funcionando
- [ ] Monitoring activo

---

## 🎯 PRÓXIMOS PASOS

1. **Copiar código de importacioneschina:**
   ```bash
   # Estos archivos son directamente reutilizables:
   - app/providers.tsx
   - lib/utils.ts
   - lib/validations.ts
   - lib/toast.ts
   - lib/api-error-handler.ts
   - lib/audit-logger.ts
   - lib/rate-limit.ts
   - components/ui/*
   ```

2. **Adaptar rutas:**
   ```
   Firebase → PostgreSQL
   - Cambiar queries Firestore por Prisma
   - Mantener lógica de negocio igual
   ```

3. **Testing:**
   ```bash
   npm run test
   npm run test:coverage
   ```

4. **Deploy:**
   ```bash
   git push origin main
   # Easypanel auto-deploy
   ```

---

**Documentación creada:** 2024-11-17
**Próxima actualización:** Después del primer deploy
**Status:** Listo para implementar

