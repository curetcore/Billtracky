# 📊 PASO 1: Crear PostgreSQL en Easypanel

**Objetivo:** Crear la base de datos PostgreSQL para Billtracky
**Tiempo:** 5 minutos
**Siguiente paso:** Configurar app con credenciales

---

## 🎯 ACCEDER A EASYPANEL

1. **Abrir Easypanel en tu navegador:**
   ```
   https://tu-servidor:3000
   o
   https://panel.tudominio.com
   ```

2. **Login** con tus credenciales de Easypanel

3. **Seleccionar tu proyecto** (o crear uno nuevo si no tienes)

---

## 🗄️ CREAR SERVICIO POSTGRESQL

### Paso 1: Crear Servicio

Click en el botón **"Create Service"** o **"Add Service"**

### Paso 2: Seleccionar PostgreSQL

En la lista de servicios, buscar y seleccionar:
```
PostgreSQL
```

### Paso 3: Configuración Básica

Llenar el formulario con estos valores:

```yaml
Service Name: billtracky-db
```
*Nombre del servicio en Easypanel - úsalo exactamente así*

```yaml
PostgreSQL Version: 16
```
*Seleccionar la versión más reciente (16.x)*

---

## 🔧 CONFIGURACIÓN DE LA BASE DE DATOS

### Database Settings

```yaml
Database Name: billtracky
```
*Nombre de la base de datos - úsalo exactamente así*

```yaml
Username: billtracky_user
```
*Usuario de PostgreSQL - úsalo exactamente así*

```yaml
Password: [GENERA UNO FUERTE]
```
*Usa un generador de passwords o genera uno así:*

**Opciones para generar password seguro:**

**Opción 1: Desde tu terminal local**
```bash
openssl rand -base64 32
```

**Opción 2: Desde Easypanel**
- Usar el botón "Generate" si está disponible

**Opción 3: Online**
- Usar: https://passwordsgenerator.net/
- Configurar: 32 caracteres, incluir todo

**⚠️ IMPORTANTE:**
- Copiar y guardar el password en un lugar seguro
- Lo necesitarás para el siguiente paso
- NO lo pierdas

---

## 💾 CONFIGURACIÓN DE ALMACENAMIENTO

```yaml
Port: 5432
```
*Puerto por defecto de PostgreSQL - dejarlo así*

```yaml
Volume/Storage: /var/lib/postgresql/data
o
Volume: /data
```
*Asegura persistencia de datos - dejarlo por defecto*

```yaml
Memory Limit: 512MB - 1GB
```
*Suficiente para empezar, puedes aumentar después*

---

## ✅ CREAR Y VERIFICAR

### Paso 4: Crear el Servicio

1. **Revisar** que todos los campos estén correctos
2. **Click** en el botón **"Create"** o **"Deploy"**
3. **Esperar** 30-60 segundos mientras se crea

### Paso 5: Verificar Estado

El servicio debe mostrar:
- ✅ Status: **Running** (verde)
- ✅ Health: **Healthy**
- ✅ Port: 5432

---

## 📋 COPIAR INFORMACIÓN IMPORTANTE

Una vez creado, necesitas copiar estos datos:

### 1. Connection String (Formato Completo)

Easypanel debería mostrar algo como:
```
postgresql://billtracky_user:TU_PASSWORD@billtracky-db:5432/billtracky
```

**Si no lo muestra, armarlo manualmente:**
```
postgresql://[USERNAME]:[PASSWORD]@[SERVICE_NAME]:5432/[DATABASE_NAME]
```

**Con tus valores:**
```
postgresql://billtracky_user:TU_PASSWORD@billtracky-db:5432/billtracky
```

### 2. Guardar en un Archivo Temporal

**Copiar estos datos a un archivo temporal:**

```
═══════════════════════════════════════════════════
BILLTRACKY - CREDENCIALES POSTGRESQL
═══════════════════════════════════════════════════

Database Host: billtracky-db
Database Port: 5432
Database Name: billtracky
Username: billtracky_user
Password: [TU_PASSWORD_GENERADO]

CONNECTION STRING (para Easypanel):
postgresql://billtracky_user:[PASSWORD]@billtracky-db:5432/billtracky

IMPORTANTE: 
- Guardar este archivo en lugar seguro
- NO commitear a GitHub
- Lo necesitas para el siguiente paso

Creado: 2024-11-17
═══════════════════════════════════════════════════
```

---

## 🧪 OPCIONAL: VERIFICAR CONEXIÓN

Si quieres verificar que PostgreSQL está funcionando:

### Desde Easypanel Terminal:

1. **Click** en tu servicio `billtracky-db`
2. **Click** en "Terminal" o "Console"
3. **Ejecutar:**

```bash
psql -U billtracky_user -d billtracky
```

**Deberías ver:**
```
billtracky=#
```

**Comandos de prueba:**
```sql
-- Ver versión
SELECT version();

-- Listar bases de datos
\l

-- Salir
\q
```

### Desde tu Computadora (si tienes psql instalado):

**⚠️ Solo funciona si:**
- El puerto 5432 está expuesto públicamente, O
- Tienes túnel SSH configurado

```bash
psql "postgresql://billtracky_user:PASSWORD@tu-servidor:5432/billtracky"
```

---

## ✅ CHECKLIST - PostgreSQL Creado

Antes de continuar al siguiente paso, verificar:

- [ ] Servicio PostgreSQL creado en Easypanel
- [ ] Status: Running (verde)
- [ ] Service Name: `billtracky-db`
- [ ] Database Name: `billtracky`
- [ ] Username: `billtracky_user`
- [ ] Password guardado en lugar seguro
- [ ] Connection string copiado y guardado
- [ ] Puerto 5432 configurado
- [ ] Volume/Storage configurado

---

## 🎉 ¡PostgreSQL Listo!

Tu base de datos está creada y corriendo. 

**Estado actual:**
```
✅ PostgreSQL 16 corriendo
✅ Base de datos 'billtracky' creada
✅ Usuario 'billtracky_user' configurado
✅ Credenciales guardadas
```

---

## 🚀 PRÓXIMO PASO

Ahora que PostgreSQL está listo, el siguiente paso es:

**Crear la aplicación Billtracky en Easypanel**

Ver: `PASO-2-CREAR-APP.md` (cuando estés listo)

O si prefieres ver el proceso completo: `DEPLOY-AHORA.md`

---

## 💡 NOTAS IMPORTANTES

### Sobre el Service Name (`billtracky-db`)

Es importante usar exactamente `billtracky-db` porque:
- El Dockerfile y configuración esperan este nombre
- Es el hostname interno en Easypanel
- Si usas otro nombre, tendrás que cambiar la connection string

### Sobre el Username (`billtracky_user`)

Es importante usar exactamente `billtracky_user` porque:
- Está en toda la documentación
- Facilita troubleshooting
- Si usas otro, actualiza la connection string

### Sobre el Password

- **NUNCA** uses passwords débiles en producción
- **NUNCA** uses passwords en el código
- **SIEMPRE** usa variables de entorno
- **GUARDA** el password en un password manager

---

## 🐛 TROUBLESHOOTING

### No puedo ver el servicio PostgreSQL en la lista

**Solución:**
- Verificar que estás en el proyecto correcto
- Algunos Easypanel usan categorías (Databases, Apps, etc.)
- Buscar en "Services" o "Databases"

### El servicio no inicia (Status: Error)

**Solución:**
- Ver logs del servicio
- Verificar que el puerto 5432 no esté en uso
- Verificar límites de memoria del servidor
- Reintentar creación

### No recuerdo el password

**Solución:**
- Ir a Settings del servicio
- Buscar opción "Reset Password" o "Environment Variables"
- O eliminar y recrear el servicio (si no hay datos importantes)

### "Could not connect to database"

**Solución:**
- Verificar que el servicio esté Running
- Verificar el connection string
- Verificar que estés en la misma red de Easypanel
- Ver logs para más detalles

---

**Creado:** 2024-11-17  
**Actualizado:** 2024-11-17  
**Status:** ✅ Guía completa

**Siguiente acción:** Guardar credenciales y crear la app
