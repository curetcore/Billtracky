# 🚀 Billtracky - Pasos para Deploy en Easypanel

## ✅ PRE-REQUISITOS COMPLETADOS

- [x] Dockerfile configurado
- [x] next.config.ts con standalone output
- [x] package.json actualizado con todas las dependencias
- [x] .dockerignore optimizado
- [x] docker-compose.yml para testing local
- [x] Prisma schema completo

## 🎯 PASO 1: PUSH A GITHUB

```bash
cd ~/Desktop/"Billtracky (1).com"

# Verificar estado
git status

# Agregar cambios
git add .

# Commit
git commit -m "feat: Configure for Easypanel deployment with PostgreSQL + Prisma"

# Push
git push origin main
```

## 🗄️ PASO 2: CREAR POSTGRESQL EN EASYPANEL

1. **Login a Easypanel:** `https://tu-servidor:3000`

2. **Create Service → PostgreSQL 16:**
   ```
   Name: billtracky-db
   Database: billtracky
   Username: billtracky_user
   Password: [GENERAR PASSWORD SEGURO]
   Port: 5432
   Volume: /data (persistent)
   ```

3. **Copiar connection string:**
   ```
   postgresql://billtracky_user:PASSWORD@billtracky-db:5432/billtracky
   ```

## 🐳 PASO 3: CREAR APP EN EASYPANEL

### Opción A: Con Docker (Recomendado)

1. **Create Service → Docker**
2. **Settings:**
   ```yaml
   Name: billtracky-app
   Repository: https://github.com/curetcore/Billtracky
   Branch: main
   Dockerfile Path: ./Dockerfile
   Port: 3000
   ```

3. **Environment Variables:**
   ```env
   DATABASE_URL=postgresql://billtracky_user:PASSWORD@billtracky-db:5432/billtracky
   NEXTAUTH_URL=https://billtracky.tudominio.com
   NEXTAUTH_SECRET=[GENERA CON: openssl rand -base64 32]
   NODE_ENV=production
   GOOGLE_API_KEY=tu-google-api-key
   ```

4. **Deploy:** Click "Deploy" → Esperar build (5-10 min)

### Opción B: Con GitHub Direct

1. **Create Service → GitHub**
2. **Connect Repository:** `curetcore/Billtracky`
3. **Build Settings:**
   ```yaml
   Build Command: npm run build
   Start Command: npm start
   Port: 3000
   ```
4. **Environment Variables:** (igual que arriba)
5. **Deploy**

## 🗄️ PASO 4: EJECUTAR MIGRACIONES

Desde Easypanel Terminal o SSH:

```bash
# Entrar al container
docker exec -it billtracky-app sh

# Ejecutar migraciones
npx prisma migrate deploy

# Verificar tablas
npx prisma studio

# Salir
exit
```

## 🌐 PASO 5: CONFIGURAR DOMINIO

### En Easypanel:
1. **Settings → Domains**
2. **Add Domain:** `billtracky.tudominio.com`
3. **Enable SSL:** ✅ Let's Encrypt

### En tu DNS Provider:
```
Type: A
Name: billtracky
Value: [IP de tu servidor]
TTL: 300
```

### Verificar:
```bash
# Esperar 2-5 min para DNS
curl https://billtracky.tudominio.com
```

## ✅ PASO 6: VERIFICACIÓN

### 1. App Health Check
```bash
curl https://billtracky.tudominio.com/api/health
# Expected: {"status":"ok"}
```

### 2. Web Access
- Abrir: https://billtracky.tudominio.com
- Debe cargar sin errores
- SSL debe estar activo

### 3. Database Check
```bash
# Verificar conexión
docker exec -it billtracky-db psql -U billtracky_user -d billtracky -c "\dt"
```

### 4. Logs Check
```bash
# Ver logs de la app
docker logs billtracky-app --tail 50
```

## 🎉 ¡ÉXITO!

Tu app está en producción cuando:
- ✅ App accesible en tu dominio
- ✅ SSL activo (candado verde)
- ✅ Sin errores en logs
- ✅ Base de datos conectada
- ✅ Login funcionando

## 📚 SIGUIENTES PASOS

1. **Crear usuario admin inicial**
2. **Configurar Google AI para el asistente**
3. **Personalizar configuración**
4. **Agregar datos de prueba**

## 🐛 TROUBLESHOOTING

### Build Falla
```bash
# Ver logs completos
docker logs billtracky-app
```

### No Conecta a DB
```bash
# Verificar que PostgreSQL esté corriendo
docker ps | grep billtracky-db

# Test conexión
docker exec -it billtracky-db psql -U billtracky_user -d billtracky
```

### SSL No Funciona
- Esperar 5-10 minutos
- Verificar DNS: `nslookup billtracky.tudominio.com`
- Regenerar certificado en Easypanel

---

**Última actualización:** 2024-11-17
**Status:** Listo para deployment

