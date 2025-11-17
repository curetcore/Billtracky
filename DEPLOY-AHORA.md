# 🚀 DEPLOY AHORA - Billtracky en Easypanel

**Status:** ✅ Código pushed a GitHub rama `main`
**Commit:** a12c2d7
**Repo:** https://github.com/curetcore/Billtracky

---

## ✅ PASO 1: POSTGRESQL EN EASYPANEL (5 min)

### Accede a Easypanel
```
https://tu-servidor:3000
```

### Crear PostgreSQL Database
1. **Click:** "Create Service"
2. **Seleccionar:** "PostgreSQL"
3. **Configuración:**
   ```
   Name: billtracky-db
   Version: 16 (latest)
   Database Name: billtracky
   Username: billtracky_user
   Password: [GENERA UNO FUERTE]
   Port: 5432
   Volume: /data
   ```
4. **Click:** "Create"

### Copiar Connection String
```
postgresql://billtracky_user:TU_PASSWORD@billtracky-db:5432/billtracky
```
**⚠️ GUARDA ESTE STRING - Lo necesitarás en el siguiente paso**

---

## 🐳 PASO 2: CREAR APP EN EASYPANEL (10 min)

### Opción A: Con Docker (RECOMENDADO)

1. **Click:** "Create Service" → "Docker"

2. **General Settings:**
   ```
   Name: billtracky-app
   ```

3. **Source:**
   ```
   Repository: https://github.com/curetcore/Billtracky
   Branch: main
   ```

4. **Build:**
   ```
   Dockerfile Path: ./Dockerfile
   ```

5. **Deploy:**
   ```
   Port: 3000
   ```

6. **Environment Variables** (IMPORTANTE):
   ```env
   DATABASE_URL=postgresql://billtracky_user:TU_PASSWORD@billtracky-db:5432/billtracky
   NEXTAUTH_URL=https://billtracky.tudominio.com
   NEXTAUTH_SECRET=[GENERA CON: openssl rand -base64 32]
   NODE_ENV=production
   ```

   **Para generar NEXTAUTH_SECRET:**
   ```bash
   openssl rand -base64 32
   ```

7. **Click:** "Deploy"

**⏱️ Esperar 5-10 minutos para el primer build**

---

### Opción B: Con GitHub Direct (Alternativa)

1. **Click:** "Create Service" → "GitHub"
2. **Connect:** Autorizar acceso a `curetcore/Billtracky`
3. **Branch:** `main`
4. **Build Settings:**
   ```
   Build Command: npm run build
   Start Command: npm start
   Port: 3000
   ```
5. **Environment Variables:** (igual que Opción A)
6. **Deploy**

---

## 🗄️ PASO 3: EJECUTAR MIGRACIONES (5 min)

Cuando el build termine exitosamente:

### Opción 1: Desde Easypanel Terminal
1. Click en tu app → Terminal
2. Ejecutar:
   ```bash
   npx prisma migrate deploy
   ```

### Opción 2: Desde SSH
```bash
# Conectar al container
docker exec -it billtracky-app sh

# Ejecutar migraciones
npx prisma migrate deploy

# Verificar tablas creadas
npx prisma studio

# Salir
exit
```

---

## 🌐 PASO 4: CONFIGURAR DOMINIO (5 min)

### En Easypanel:
1. **App Settings → Domains**
2. **Add Domain:** `billtracky.tudominio.com`
3. **Enable SSL:** ✅ Let's Encrypt (automático)

### En tu Proveedor DNS:
Agregar registro A:
```
Type: A
Name: billtracky
Value: [IP de tu servidor Easypanel]
TTL: 300
```

**⏱️ Esperar 2-5 minutos para propagación DNS**

---

## ✅ PASO 5: VERIFICAR (5 min)

### 1. Check Build Logs
En Easypanel → Logs, buscar:
```
✓ Built successfully
✓ Server listening on port 3000
```

### 2. Test Health Check
```bash
curl https://billtracky.tudominio.com/api/health
```
**Esperado:** `{"status":"ok"}`

### 3. Abrir en Navegador
```
https://billtracky.tudominio.com
```
**Verificar:**
- ✅ Página carga sin errores
- ✅ SSL activo (candado verde 🔒)
- ✅ Sin errores en consola del navegador

### 4. Check Database Connection
```bash
docker exec -it billtracky-db psql -U billtracky_user -d billtracky -c "\dt"
```
**Esperado:** Lista de tablas creadas

---

## 🎉 ¡ÉXITO!

Tu app está live cuando ves:
- ✅ App accesible en tu dominio
- ✅ SSL activo (https con candado verde)
- ✅ Sin errores en logs
- ✅ Base de datos conectada con tablas creadas
- ✅ Health check responde correctamente

---

## 🐛 TROUBLESHOOTING

### Build Falla
```bash
# Ver logs completos en Easypanel
# Buscar línea de error
# Común: falta alguna env variable
```

### No Conecta a Database
```bash
# Verificar que PostgreSQL esté corriendo
docker ps | grep billtracky-db

# Verificar connection string en env vars
# Formato: postgresql://USER:PASS@HOST:5432/DB
```

### SSL No Funciona
1. Esperar 5-10 minutos más
2. Verificar DNS: `nslookup billtracky.tudominio.com`
3. En Easypanel: Regenerar certificado SSL

### App No Carga
```bash
# Ver logs de la app
docker logs billtracky-app --tail 100

# Verificar puerto
docker ps | grep billtracky-app
```

---

## 📊 VARIABLES DE ENTORNO REQUERIDAS

```env
# OBLIGATORIAS
DATABASE_URL=postgresql://billtracky_user:PASSWORD@billtracky-db:5432/billtracky
NEXTAUTH_URL=https://billtracky.tudominio.com
NEXTAUTH_SECRET=[GENERA_UNO]
NODE_ENV=production

# OPCIONALES (agregar después)
GOOGLE_API_KEY=tu-google-api-key
UPLOAD_DIR=./public/uploads
MAX_FILE_SIZE=5242880
```

---

## 📞 AYUDA RÁPIDA

**Si algo falla:**
1. Ver logs en Easypanel
2. Verificar env variables están correctas
3. Check que PostgreSQL esté running
4. Verificar DNS con `nslookup`
5. Consultar: `EASYPANEL-DEPLOY-STEPS.md` para más detalles

---

## 🚀 PRÓXIMOS PASOS DESPUÉS DEL DEPLOY

1. **Crear usuario admin:**
   - Ir a /register o /setup
   - Crear primer usuario con rol ADMIN

2. **Configurar Google AI (opcional):**
   - Agregar `GOOGLE_API_KEY` en env vars
   - Restart app

3. **Personalizar:**
   - Logo en `/public`
   - Colores en `tailwind.config.ts`
   - Texto en archivos de página

4. **Agregar datos de prueba:**
   - Usar Prisma Studio
   - O crear desde la UI

---

**Creado:** 2024-11-17  
**Commit:** a12c2d7  
**Status:** ✅ Listo para deploy  
**Tiempo estimado:** 30 minutos

**SIGUIENTE ACCIÓN:** Crear PostgreSQL en Easypanel (Paso 1)

