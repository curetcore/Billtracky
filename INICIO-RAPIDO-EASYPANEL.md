# ⚡ Billtracky - Inicio Rápido Easypanel

**Última actualización:** 2024-11-17
**Tiempo estimado:** 30-45 minutos
**Stack:** Next.js 14 + PostgreSQL + Prisma

---

## 🎯 RESUMEN EJECUTIVO

Vas a desplegar Billtracky usando el **MISMO stack exitoso que importacioneschina**:
- ✅ PostgreSQL en lugar de Firebase
- ✅ Prisma ORM (mismas librerías probadas)
- ✅ Easypanel para hosting
- ✅ Tu dominio personalizado

**Diferencia:** Solo cambias Firebase → PostgreSQL. **TODO lo demás es igual.**

---

## 📋 CHECKLIST PRE-DEPLOY

Antes de empezar, asegúrate de tener:

- [ ] Easypanel instalado y accesible
- [ ] Dominio configurado (ej: billtracky.tudominio.com)
- [ ] Acceso al repositorio GitHub: `curetcore/Billtracky`
- [ ] Node.js 18+ instalado localmente
- [ ] 30-45 minutos disponibles

---

## 🚀 PASO 1: CREAR BASE DE DATOS (5 min)

### En Easypanel:

1. **Login:** `https://tu-servidor.com:3000`

2. **Crear PostgreSQL:**
   - Click "Create Service"
   - Seleccionar "PostgreSQL 16"
   - Configuración:
     ```
     Name: billtracky-db
     Database: billtracky
     Username: billtracky_user
     Password: [GENERAR FUERTE]
     ```

3. **Guardar credenciales:**
   ```
   DATABASE_URL=postgresql://billtracky_user:PASSWORD@billtracky-db:5432/billtracky
   ```

---

## 💻 PASO 2: PREPARAR CÓDIGO LOCAL (10 min)

```bash
# 1. Navegar al proyecto
cd ~/Desktop/"Billtracky (1).com"

# 2. Instalar dependencias
npm install

# 3. Crear .env.local
cat > .env.local << 'EOF'
DATABASE_URL="postgresql://billtracky_user:PASSWORD@localhost:5432/billtracky"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="[GENERAR CON: openssl rand -base64 32]"
NODE_ENV="development"
EOF

# 4. Generar Prisma Client
npx prisma generate

# 5. Test build local
npm run build
```

---

## 🐳 PASO 3: DEPLOY EN EASYPANEL (15 min)

### Opción A: Con Docker (Recomendado)

En Easypanel:

1. **Create Service:**
   - Type: "Docker"
   - Repository: `https://github.com/curetcore/Billtracky`
   - Branch: `main`

2. **Build Settings:**
   ```yaml
   Dockerfile: ./Dockerfile
   Port: 3000
   ```

3. **Environment Variables:**
   ```
   DATABASE_URL=postgresql://billtracky_user:PASSWORD@billtracky-db:5432/billtracky
   NEXTAUTH_URL=https://billtracky.tudominio.com
   NEXTAUTH_SECRET=[TU_SECRET_GENERADO]
   NODE_ENV=production
   ```

4. **Deploy:**
   - Click "Deploy"
   - Esperar build (5-10 min primera vez)

### Opción B: Con GitHub Direct

1. **Create Service:**
   - Type: "GitHub App"
   - Repository: `curetcore/Billtracky`
   - Branch: `main`

2. **Build Settings:**
   ```yaml
   Build Command: npm run build
   Start Command: npm start
   Port: 3000
   ```

3. **Environment Variables:** (igual que arriba)

4. **Deploy**

---

## 🗄️ PASO 4: EJECUTAR MIGRACIONES (5 min)

```bash
# Desde terminal de Easypanel o SSH

# Entrar al container
docker exec -it billtracky-app sh

# Ejecutar migraciones
npx prisma migrate deploy

# Cargar datos iniciales (opcional)
npx prisma db seed

# Salir
exit
```

---

## 🌐 PASO 5: CONFIGURAR DOMINIO (5 min)

### En Easypanel:

1. **Settings → Domains:**
   - Add Domain: `billtracky.tudominio.com`
   - Enable SSL (Let's Encrypt) ✅

### En tu proveedor DNS:

```
Type: A
Name: billtracky
Value: [IP de tu servidor Easypanel]
TTL: 300
```

### Verificar:

```bash
# Esperar 2-5 minutos para propagación DNS
curl https://billtracky.tudominio.com
```

---

## ✅ VERIFICACIÓN (5 min)

### 1. Health Check

```bash
curl https://billtracky.tudominio.com/api/health
# Debería responder: {"status":"ok"}
```

### 2. Acceder a la App

1. Abrir: `https://billtracky.tudominio.com`
2. Debería ver landing page o login
3. Crear usuario admin inicial

### 3. Verificar Base de Datos

```bash
# Desde Easypanel terminal
docker exec -it billtracky-db psql -U billtracky_user -d billtracky

# Ver tablas
\dt

# Salir
\q
```

---

## 🎨 PRÓXIMOS PASOS DESARROLLO

Ahora que tienes el deploy, puedes empezar a copiar código de importacioneschina:

### 1. Copiar Archivos Core (30 min)

```bash
# Desde repositorio importacioneschina, copiar:

# Providers (React Query setup)
app/providers.tsx

# Utilidades
lib/utils.ts
lib/validations.ts
lib/toast.ts
lib/api-error-handler.ts
lib/audit-logger.ts
lib/rate-limit.ts

# Componentes UI base
components/ui/button.tsx
components/ui/input.tsx
components/ui/card.tsx
components/ui/label.tsx
components/ui/dialog.tsx
components/ui/dropdown-menu.tsx
components/ui/data-table.tsx
```

### 2. Copiar Layout (15 min)

```bash
components/layout/Sidebar.tsx
components/layout/Navbar.tsx
components/layout/MainLayout.tsx
```

### 3. Copiar Página Dashboard (20 min)

```bash
app/(pages)/dashboard/page.tsx
```

### 4. Adaptar API Routes (variable)

```bash
# Para cada endpoint, el patrón es:
# Firestore query → Prisma query

# Ejemplo:
# Firebase:
const orders = await getDocs(collection(db, 'orders'))

# Prisma:
const orders = await prisma.order.findMany()
```

---

## 📦 LIBRERÍAS YA INCLUIDAS

Todas estas librerías están en tu `package.json` y son **directamente compatibles** con importacioneschina:

✅ **Data Management:**
- @tanstack/react-query
- @tanstack/react-query-devtools
- @tanstack/react-table

✅ **Forms:**
- react-hook-form
- @hookform/resolvers
- zod

✅ **UI:**
- @radix-ui/react-*
- tailwindcss
- lucide-react
- sonner

✅ **Utilities:**
- currency.js
- date-fns
- react-dropzone

✅ **Export:**
- xlsx
- jspdf
- jspdf-autotable

✅ **AI:**
- @genkit-ai/*

✅ **Database:**
- @prisma/client
- prisma

✅ **Auth:**
- next-auth
- bcryptjs

✅ **Testing:**
- jest
- @testing-library/react

**No necesitas instalar nada más! Todo está listo.**

---

## 🐛 TROUBLESHOOTING

### Build Falla

```bash
# Limpiar y reinstalar
npm run clean
npm install
npm run build
```

### No Conecta a PostgreSQL

```bash
# Verificar conexión desde container
docker exec -it billtracky-app sh
npx prisma db push
```

### Error en Migraciones

```bash
# Reset database (CUIDADO: borra datos)
docker exec -it billtracky-app npx prisma migrate reset
```

### SSL no funciona

- Esperar 5-10 minutos después de configurar dominio
- Verificar DNS con: `nslookup billtracky.tudominio.com`
- En Easypanel, regenerar certificado SSL

---

## 📚 DOCUMENTACIÓN COMPLETA

Para más detalles, ver:

1. **DEPLOY-EASYPANEL-POSTGRESQL.md** - Guía técnica completa
2. **GUIA-MAESTRA-IMPORTACIONESCHINA.md** - Referencia de código
3. **RESUMEN-ANALISIS-COMPLETO.md** - Análisis del proyecto exitoso

---

## 🎯 SIGUIENTES 3 ACCIONES

1. **Ahora mismo:** Crear PostgreSQL en Easypanel
2. **Después:** Deploy inicial del proyecto
3. **Luego:** Copiar código de importacioneschina

**Tiempo total estimado:** 30-45 minutos para deploy funcional

---

## 💡 TIPS

1. **Usa Docker** - Es más confiable que build directo
2. **Copia archivo por archivo** - No copies todo de una vez
3. **Test local primero** - Siempre `npm run build` antes de deploy
4. **Git commits frecuentes** - Commit cada feature que funcione
5. **Prisma Studio** - Usa `npx prisma studio` para ver datos

---

## ✅ ÉXITO

Sabrás que está funcionando cuando:

- ✅ App accesible en tu dominio con SSL
- ✅ Puedes hacer login
- ✅ Dashboard carga
- ✅ Prisma Studio muestra tablas
- ✅ No hay errores en logs

**¡Listo para empezar a desarrollar! 🚀**

---

**Creado:** 2024-11-17
**Autor:** Claude Code
**Status:** Listo para usar

