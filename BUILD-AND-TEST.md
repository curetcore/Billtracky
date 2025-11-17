# 🏗️ Build y Test Local - Billtracky

## 🚀 Inicio Rápido

### Paso 1: Instalar Dependencias
```bash
npm install
```

### Paso 2: Configurar Variables de Entorno
```bash
# Copiar y editar .env.local
cp .env.example .env.local

# Editar con tus credenciales
nano .env.local
```

### Paso 3: Generar Prisma Client
```bash
npx prisma generate
```

### Paso 4: Test Build Local
```bash
npm run build
```

### Paso 5: Correr en Desarrollo
```bash
npm run dev
```

## 🐳 Test con Docker Local

### Build Docker Image
```bash
docker build -t billtracky:local .
```

### Run con Docker Compose
```bash
docker-compose up
```

### Verificar
```bash
curl http://localhost:3000
```

## ✅ Checklist Pre-Deploy

- [ ] `npm install` exitoso
- [ ] `npx prisma generate` exitoso
- [ ] `npm run build` exitoso sin errores
- [ ] `npm run dev` carga correctamente
- [ ] Docker build exitoso
- [ ] Variables de entorno configuradas

## 🎯 Próximo Paso

Si todo funciona localmente, estás listo para deploy en Easypanel!

Ver: `INICIO-RAPIDO-EASYPANEL.md`
