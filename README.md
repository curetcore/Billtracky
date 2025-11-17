# 💼 Billtracky - Sistema Inteligente de Gestión Empresarial

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-11.9-orange)
![AI Powered](https://img.shields.io/badge/AI-Google_Genkit-green)
![License](https://img.shields.io/badge/license-Private-red)

**Plataforma SaaS profesional para gestión de gastos, facturación y operaciones empresariales potenciada con Inteligencia Artificial**

[🚀 Demo](#) • [📖 Documentación](#documentación) • [🤝 Contribuir](#contribuir) • [🐛 Reportar Bug](#)

</div>

---

## 📋 Tabla de Contenidos

- [Visión General](#-visión-general)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Uso y Desarrollo](#-uso-y-desarrollo)
- [Módulos del Sistema](#-módulos-del-sistema)
- [Integración de IA](#-integración-de-ia)
- [Despliegue](#-despliegue)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)

---

## 🎯 Visión General

**Billtracky** es una solución SaaS moderna diseñada para automatizar y optimizar la gestión financiera y operativa de pequeñas y medianas empresas. Combina herramientas tradicionales de gestión con capacidades avanzadas de Inteligencia Artificial para ofrecer insights automáticos, procesamiento inteligente de documentos y automatización de tareas repetitivas.

### 🎪 ¿Para quién es Billtracky?

- 🏢 **Pequeñas y medianas empresas** que necesitan control financiero profesional
- 👨‍💼 **Freelancers y consultores** que gestionan múltiples clientes y proyectos
- 🏪 **Comercios minoristas** que requieren tracking de inventario y ventas
- 📊 **Equipos remotos** que necesitan gestión centralizada de gastos
- 💼 **Startups** buscando escalabilidad desde el día uno

### ✨ ¿Qué hace diferente a Billtracky?

- 🤖 **IA Integrada**: Asistente inteligente con Google Genkit para análisis automático
- ⚡ **Ultra Rápido**: Construido con Next.js 15 y Turbopack
- 🎨 **UI/UX Premium**: Sistema de diseño moderno con Shadcn/ui
- 🔥 **Tiempo Real**: Sincronización instantánea con Firebase
- 📱 **Responsive**: Experiencia perfecta en cualquier dispositivo
- 🔒 **Seguro**: Autenticación y permisos con Firebase Auth

---

## 🚀 Características Principales

### 💰 Gestión Financiera Inteligente

- ✅ Tracking automático de gastos e ingresos
- ✅ Facturación electrónica con plantillas personalizables
- ✅ Reportes financieros en tiempo real
- ✅ Análisis predictivo de flujo de caja (AI)
- ✅ Categorización automática de transacciones
- ✅ Exportación a formatos contables (Excel, PDF, CSV)

### 📦 Panel de Órdenes y Ventas

- ✅ Gestión completa del ciclo de vida de órdenes
- ✅ Estados personalizables de pedidos
- ✅ Notificaciones automáticas a clientes
- ✅ Integración con sistemas de pago
- ✅ Dashboard visual con métricas clave
- ✅ Gráficos interactivos con Recharts

### 👥 Gestión de Empleados

- ✅ Base de datos centralizada del equipo
- ✅ Control de accesos y permisos
- ✅ Gestión de nóminas y pagos
- ✅ Tracking de horas y productividad
- ✅ Evaluaciones de desempeño

### 🤖 Asistente de IA

- ✅ Análisis automático de documentos financieros
- ✅ Sugerencias inteligentes para optimización de gastos
- ✅ Respuestas en lenguaje natural a consultas financieras
- ✅ Generación automática de reportes ejecutivos
- ✅ Detección de anomalías en transacciones
- ✅ Predicciones de flujo de caja

### 📊 Historial y Reportes

- ✅ Timeline completo de todas las operaciones
- ✅ Auditoría detallada de cambios
- ✅ Reportes personalizables
- ✅ Filtros avanzados y búsqueda
- ✅ Exportación de datos históricos

### 📱 Marketing y CRM

- ✅ Gestión de campañas de marketing
- ✅ Seguimiento de leads y conversiones
- ✅ Email marketing integrado
- ✅ Análisis de ROI por campaña
- ✅ Segmentación de clientes

### ⚙️ Configuración Avanzada

- ✅ Personalización completa de la plataforma
- ✅ Temas claro/oscuro
- ✅ Integraciones con servicios externos
- ✅ API REST para extensibilidad
- ✅ Webhooks personalizados

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 15.3.3 | Framework React con App Router |
| **React** | 18.3.1 | Biblioteca UI |
| **TypeScript** | 5.0+ | Type safety y mejor DX |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS |
| **Shadcn/ui** | Latest | Sistema de componentes |
| **Radix UI** | Latest | Primitivas UI accesibles |
| **Lucide React** | Latest | Iconografía moderna |

### Backend & Database

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Firebase** | 11.9.1 | Backend as a Service |
| **Firestore** | - | Base de datos NoSQL |
| **Firebase Auth** | - | Autenticación |
| **Firebase Storage** | - | Almacenamiento de archivos |

### Inteligencia Artificial

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Google Genkit** | 1.14.1 | Framework de IA |
| **Genkit AI GoogleAI** | 1.14.1 | Integración con modelos Google |
| **Genkit Next** | 1.14.1 | Integración Next.js |

### Formularios y Validación

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React Hook Form** | 7.54.2 | Gestión de formularios |
| **Zod** | 3.24.2 | Schema validation |
| **@hookform/resolvers** | 4.1.3 | Integración RHF + Zod |

### Visualización de Datos

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Recharts** | 2.15.1 | Gráficos y dashboards |
| **date-fns** | 3.6.0 | Manipulación de fechas |

### Utilidades

- **clsx** & **tailwind-merge** - Gestión de clases CSS
- **cmdk** - Command palette
- **embla-carousel-react** - Carruseles
- **react-markdown** - Renderizado Markdown
- **dotenv** - Variables de entorno
- **patch-package** - Parches de dependencias

---

## 🏗️ Arquitectura del Proyecto

```
billtracky/
├── 📁 src/
│   ├── 📁 app/                          # App Router (Next.js 15)
│   │   ├── 📁 (auth)/                   # Rutas de autenticación
│   │   ├── 📁 assistant/                # 🤖 Módulo de IA
│   │   │   ├── page.tsx                 # Chat con asistente
│   │   │   ├── components/              # Componentes del chat
│   │   │   └── actions.ts               # Server actions
│   │   ├── 📁 employees/                # 👥 Gestión de empleados
│   │   │   ├── page.tsx                 # Lista de empleados
│   │   │   ├── [id]/                    # Detalle de empleado
│   │   │   └── components/              # Tablas, formularios
│   │   ├── 📁 history/                  # 📊 Historial
│   │   │   ├── page.tsx                 # Timeline
│   │   │   └── components/              # Filtros, cards
│   │   ├── 📁 marketing/                # 📱 Marketing
│   │   │   ├── campaigns/               # Gestión de campañas
│   │   │   ├── analytics/               # Análisis
│   │   │   └── components/              # Widgets
│   │   ├── 📁 orders-panel/             # 📦 Panel de órdenes
│   │   │   ├── page.tsx                 # Dashboard órdenes
│   │   │   ├── [orderId]/               # Detalle orden
│   │   │   └── components/              # Estadísticas, listas
│   │   ├── 📁 services/                 # 🛠️ Servicios
│   │   │   ├── page.tsx                 # Catálogo
│   │   │   └── components/              # Cards de servicios
│   │   ├── 📁 settings/                 # ⚙️ Configuración
│   │   │   ├── profile/                 # Perfil usuario
│   │   │   ├── billing/                 # Facturación
│   │   │   ├── integrations/            # Integraciones
│   │   │   └── appearance/              # Personalización
│   │   ├── layout.tsx                   # Layout principal
│   │   ├── page.tsx                     # Dashboard home
│   │   └── globals.css                  # Estilos globales
│   ├── 📁 ai/                           # 🧠 Lógica de IA
│   │   ├── 📁 flows/                    # Flujos de Genkit
│   │   │   ├── analysis.ts              # Análisis financiero
│   │   │   ├── suggestions.ts           # Sugerencias
│   │   │   └── reports.ts               # Generación reportes
│   │   ├── 📁 tools/                    # Herramientas IA
│   │   │   ├── document-parser.ts       # Parseo documentos
│   │   │   ├── expense-categorizer.ts   # Categorización
│   │   │   └── anomaly-detector.ts      # Detección anomalías
│   │   └── index.ts                     # Configuración Genkit
│   ├── 📁 components/                   # 🎨 Componentes
│   │   ├── 📁 ui/                       # Shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (24+ componentes)
│   │   ├── 📁 dashboard/                # Componentes dashboard
│   │   │   ├── stats-card.tsx
│   │   │   ├── recent-activity.tsx
│   │   │   └── quick-actions.tsx
│   │   ├── 📁 layout/                   # Layout components
│   │   │   ├── sidebar.tsx
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   └── 📁 shared/                   # Componentes compartidos
│   │       ├── data-table.tsx
│   │       ├── search-bar.tsx
│   │       └── date-range-picker.tsx
│   ├── 📁 hooks/                        # 🪝 Custom hooks
│   │   ├── use-auth.ts                  # Autenticación
│   │   ├── use-firebase.ts              # Firebase helpers
│   │   ├── use-toast.ts                 # Notificaciones
│   │   └── use-debounce.ts              # Utilidades
│   ├── 📁 lib/                          # 📚 Utilidades
│   │   ├── firebase.ts                  # Config Firebase
│   │   ├── utils.ts                     # Helpers generales
│   │   ├── validations.ts               # Schemas Zod
│   │   └── constants.ts                 # Constantes
│   └── 📁 types/                        # 📝 TypeScript types
│       ├── models.ts                    # Modelos de datos
│       ├── api.ts                       # Tipos API
│       └── index.ts                     # Exports
├── 📁 public/                           # Archivos estáticos
│   ├── icon.png                         # Logo
│   └── favicon.ico
├── 📄 .env.local                        # Variables de entorno
├── 📄 .env.example                      # Ejemplo env
├── 📄 .gitignore                        # Git ignore
├── 📄 apphosting.yaml                   # Config Firebase
├── 📄 components.json                   # Config Shadcn
├── 📄 next.config.ts                    # Config Next.js
├── 📄 package.json                      # Dependencias
├── 📄 postcss.config.mjs                # PostCSS
├── 📄 tailwind.config.ts                # Tailwind
├── 📄 tsconfig.json                     # TypeScript
└── 📄 README.md                         # Este archivo
```

### 🔄 Flujo de Datos

```
Usuario → Next.js (Frontend)
           ↓
    Server Actions / API Routes
           ↓
    Firebase (Backend)
           ↓
    Firestore / Auth / Storage
           ↓
    Google Genkit (AI Processing)
           ↓
    Respuesta al Usuario
```

---

## 📦 Instalación y Configuración

### Prerequisitos

Asegúrate de tener instalado:

- **Node.js** 18.x o superior
- **npm** 9.x o superior (o **pnpm** / **yarn**)
- **Git**
- Cuenta de **Firebase** (gratuita para desarrollo)
- **Google Cloud Account** (para Genkit AI)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/curetcore/Billtracky.git
cd Billtracky
```

### 2. Instalar Dependencias

```bash
npm install
# o
pnpm install
# o
yarn install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_proyecto_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# Firebase Admin (Server-side)
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk@tu-proyecto.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Google Genkit AI
GOOGLE_GENAI_API_KEY=tu_google_ai_api_key
GENKIT_ENV=dev

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:9002
NODE_ENV=development
```

### 4. Configurar Firebase

#### 4.1. Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto
3. Habilita los siguientes servicios:
   - **Authentication** (Email/Password, Google)
   - **Firestore Database**
   - **Storage**

#### 4.2. Configurar Firestore

Crea las siguientes colecciones en Firestore:

```
/users
  - uid: string
  - email: string
  - displayName: string
  - role: string
  - createdAt: timestamp

/orders
  - orderId: string
  - customerId: string
  - items: array
  - total: number
  - status: string
  - createdAt: timestamp

/employees
  - employeeId: string
  - name: string
  - email: string
  - role: string
  - salary: number
  - hireDate: timestamp

/transactions
  - transactionId: string
  - type: string (income/expense)
  - amount: number
  - category: string
  - description: string
  - date: timestamp

/campaigns
  - campaignId: string
  - name: string
  - budget: number
  - startDate: timestamp
  - endDate: timestamp
  - metrics: object
```

#### 4.3. Reglas de Seguridad

En Firestore Rules, agrega:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return request.auth.uid == userId;
    }
    
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId);
    }
    
    match /orders/{orderId} {
      allow read, write: if isAuthenticated();
    }
    
    match /employees/{employeeId} {
      allow read: if isAuthenticated();
      allow write: if isAuthenticated() && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    match /transactions/{transactionId} {
      allow read, write: if isAuthenticated();
    }
  }
}
```

### 5. Configurar Google Genkit

```bash
# Instalar Genkit CLI globalmente
npm install -g genkit-cli

# Autenticar con Google Cloud
gcloud auth login
gcloud config set project TU_PROJECT_ID
```

### 6. Inicializar Base de Datos (Opcional)

Ejecuta el script de seed para datos de prueba:

```bash
npm run db:seed
```

---

## 🚀 Uso y Desarrollo

### Comandos Disponibles

```bash
# Desarrollo (Puerto 9002)
npm run dev

# Desarrollo con Turbopack (más rápido)
npm run dev:turbo

# Desarrollo del Asistente IA
npm run genkit:dev

# Modo watch para AI
npm run genkit:watch

# Build para producción
npm run build

# Iniciar producción
npm run start

# Linting
npm run lint

# Type checking
npm run typecheck

# Tests (agregar después)
npm run test

# Seed database
npm run db:seed
```

### Desarrollo Local

1. **Iniciar servidor de desarrollo:**

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:9002`

2. **Iniciar servidor de IA (en otra terminal):**

```bash
npm run genkit:dev
```

Panel de Genkit disponible en: `http://localhost:4000`

### Hot Reload

El proyecto usa **Turbopack** para hot reload ultra-rápido. Los cambios se reflejan instantáneamente sin necesidad de reiniciar el servidor.

### Estructura de Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Dashboard principal |
| `/orders-panel` | Panel de órdenes |
| `/orders-panel/[id]` | Detalle de orden |
| `/employees` | Lista de empleados |
| `/employees/[id]` | Perfil de empleado |
| `/history` | Historial de transacciones |
| `/assistant` | Chat con IA |
| `/marketing` | Campañas de marketing |
| `/marketing/analytics` | Análisis de marketing |
| `/services` | Catálogo de servicios |
| `/settings` | Configuración |
| `/settings/profile` | Perfil de usuario |
| `/settings/billing` | Facturación |

---

## 📱 Módulos del Sistema

### 1. 📊 Dashboard Principal

El dashboard ofrece una visión general del negocio:

- Métricas clave (ingresos, gastos, ganancias)
- Gráficos de tendencias
- Actividad reciente
- Acciones rápidas
- Alertas y notificaciones

**Tecnologías:** Recharts, Firebase Realtime Queries

### 2. 📦 Panel de Órdenes

Gestión completa del ciclo de ventas:

- Vista de lista con filtros avanzados
- Estados: Pendiente, En proceso, Completado, Cancelado
- Detalles de orden con items, cliente, totales
- Generación de facturas PDF
- Tracking de envíos
- Notificaciones automáticas

**Componentes principales:**
- `OrdersList.tsx` - Tabla de órdenes
- `OrderDetail.tsx` - Detalle completo
- `OrderForm.tsx` - Crear/editar orden
- `InvoiceGenerator.tsx` - PDFs

### 3. 👥 Gestión de Empleados

Administración del equipo:

- Directorio de empleados
- Perfiles con información completa
- Control de roles y permisos
- Gestión de nóminas
- Tracking de asistencia
- Evaluaciones de desempeño

**Roles disponibles:**
- Admin (acceso completo)
- Manager (gestión de equipo)
- Employee (acceso limitado)
- Viewer (solo lectura)

### 4. 🤖 Asistente de IA

Chatbot inteligente con capacidades avanzadas:

**Comandos disponibles:**
- `analizar gastos del último mes`
- `generar reporte financiero`
- `categorizar transacciones pendientes`
- `predecir flujo de caja`
- `sugerir optimizaciones`
- `detectar gastos inusuales`

**Capacidades:**
- Procesamiento de lenguaje natural
- Análisis de documentos (facturas, recibos)
- Generación de reportes
- Respuestas contextuales
- Aprendizaje de patrones

**Implementación:**
```typescript
// src/ai/flows/analysis.ts
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export const analyzeExpenses = genkit({
  model: googleAI.gemini15Pro,
  prompt: 'Analiza los siguientes gastos...'
});
```

### 5. 📊 Historial y Reportes

Timeline completo de operaciones:

- Vista cronológica
- Filtros por fecha, tipo, categoría
- Búsqueda avanzada
- Exportación CSV/Excel/PDF
- Auditoría de cambios

**Tipos de eventos:**
- Transacciones financieras
- Cambios en órdenes
- Actualizaciones de empleados
- Acciones de usuarios

### 6. 📱 Marketing y CRM

Herramientas de marketing:

- Gestión de campañas
- Email marketing
- Segmentación de clientes
- Análisis de conversión
- ROI por campaña
- A/B testing

**Métricas:**
- Tasa de apertura
- Click-through rate
- Conversiones
- CAC (Costo de Adquisición)
- LTV (Lifetime Value)

### 7. ⚙️ Configuración

Personalización completa:

- **Perfil:** Información personal, foto, contraseña
- **Facturación:** Planes, métodos de pago, historial
- **Integraciones:** APIs, webhooks, servicios externos
- **Apariencia:** Tema, idioma, timezone
- **Notificaciones:** Email, push, preferencias
- **Seguridad:** 2FA, sesiones activas, logs

---

## 🤖 Integración de IA

### Google Genkit Framework

Billtracky usa **Google Genkit** para capacidades de IA avanzadas.

#### Configuración

```typescript
// src/ai/index.ts
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'gemini-1.5-pro',
});
```

#### Flujos de IA

##### 1. Análisis Financiero

```typescript
// src/ai/flows/analysis.ts
export const financialAnalysis = ai.defineFlow(
  { name: 'financialAnalysis' },
  async (expenses) => {
    const analysis = await ai.generate({
      prompt: `Analiza estos gastos: ${JSON.stringify(expenses)}`,
      model: 'gemini-1.5-pro',
    });
    return analysis;
  }
);
```

##### 2. Categorización Automática

```typescript
// src/ai/tools/expense-categorizer.ts
export const categorizeExpense = ai.defineTool(
  { name: 'categorizeExpense' },
  async (description) => {
    // IA determina categoría (comida, transporte, etc.)
  }
);
```

##### 3. Detección de Anomalías

```typescript
// src/ai/tools/anomaly-detector.ts
export const detectAnomalies = ai.defineTool(
  { name: 'detectAnomalies' },
  async (transactions) => {
    // Detecta gastos inusuales o sospechosos
  }
);
```

#### Panel de Genkit

Para desarrollo y testing de flujos IA:

```bash
npm run genkit:dev
```

Accede a `http://localhost:4000` para:
- Probar flujos interactivamente
- Ver trazas de ejecución
- Debuggear prompts
- Monitorear uso de API

---

## 🎨 Sistema de Diseño

### Shadcn/ui + Radix UI

Billtracky usa **Shadcn/ui**, un sistema de componentes que combina:
- Radix UI (primitivas accesibles)
- Tailwind CSS (styling)
- CVA (variantes de componentes)

#### Agregar Componentes

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add form
```

#### Personalizar Tema

Edita `src/app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    /* ... más variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... modo oscuro */
  }
}
```

#### Componentes Disponibles

- Accordion
- Alert Dialog
- Avatar
- Button
- Card
- Checkbox
- Collapsible
- Dialog
- Dropdown Menu
- Form
- Input
- Label
- Menubar
- Popover
- Progress
- Radio Group
- Scroll Area
- Select
- Separator
- Slider
- Switch
- Tabs
- Toast
- Tooltip

---

## 🚀 Despliegue

### Opción 1: Firebase App Hosting (Recomendado)

Firebase ofrece hosting nativo para Next.js.

#### 1. Instalar Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

#### 2. Inicializar Firebase

```bash
firebase init hosting
```

#### 3. Configurar `apphosting.yaml`

Ya está configurado:

```yaml
runConfig:
  maxInstances: 1  # Ajustar según necesidad
```

#### 4. Deploy

```bash
npm run build
firebase deploy --only hosting
```

Tu app estará en: `https://tu-proyecto.web.app`

### Opción 2: Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opción 3: Docker

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t billtracky .
docker run -p 3000:3000 billtracky
```

### Variables de Entorno en Producción

**Vercel:**
```bash
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
vercel env add GOOGLE_GENAI_API_KEY
```

**Firebase:**
```bash
firebase functions:config:set genkit.api_key="YOUR_KEY"
```

---

## 🗺️ Roadmap

### ✅ Versión 0.1 (Actual)

- [x] Arquitectura base con Next.js 15
- [x] Sistema de autenticación con Firebase
- [x] Panel de órdenes básico
- [x] Gestión de empleados
- [x] Integración de IA con Genkit
- [x] Sistema de diseño con Shadcn/ui

### 🚧 Versión 0.2 (En Desarrollo)

- [ ] Facturación electrónica completa
- [ ] Integración con pasarelas de pago (Stripe, PayPal)
- [ ] Reportes avanzados con exportación
- [ ] Notificaciones push
- [ ] Aplicación móvil (React Native)
- [ ] API pública REST/GraphQL

### 🔮 Versión 0.3 (Futuro)

- [ ] Multi-tenancy (múltiples empresas)
- [ ] Roles y permisos granulares
- [ ] Integración con contabilidad (QuickBooks, Xero)
- [ ] OCR para escaneo de facturas
- [ ] Predicciones avanzadas con ML
- [ ] Marketplace de integraciones

### 💡 Ideas en Backlog

- [ ] Modo offline (PWA)
- [ ] Soporte multi-idioma completo
- [ ] Chat en tiempo real entre empleados
- [ ] Videollamadas integradas
- [ ] Firma digital de documentos
- [ ] Blockchain para auditoría
- [ ] Integración con ERPs empresariales

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Aquí está cómo puedes ayudar:

### Proceso de Contribución

1. **Fork** el repositorio
2. **Clona** tu fork
   ```bash
   git clone https://github.com/TU-USUARIO/Billtracky.git
   ```
3. **Crea** una rama para tu feature
   ```bash
   git checkout -b feature/mi-nueva-funcionalidad
   ```
4. **Commitea** tus cambios
   ```bash
   git commit -m "feat: agregar nueva funcionalidad X"
   ```
5. **Push** a tu fork
   ```bash
   git push origin feature/mi-nueva-funcionalidad
   ```
6. **Abre** un Pull Request

### Convenciones de Código

- **TypeScript strict mode** habilitado
- **ESLint** para linting
- **Prettier** para formateo
- **Conventional Commits** para mensajes

#### Tipos de Commits

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Formateo, punto y coma, etc.
- `refactor:` Refactorización de código
- `test:` Agregar tests
- `chore:` Tareas de mantenimiento

### Estructura de Pull Request

```markdown
## Descripción
Breve descripción del cambio

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## Checklist
- [ ] Código sigue las convenciones
- [ ] Tests agregados/actualizados
- [ ] Documentación actualizada
- [ ] No hay warnings en consola
```

### Reportar Bugs

Usa la plantilla de issues con:
- Descripción del bug
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots si aplica
- Entorno (OS, navegador, versión)

---

## 📞 Soporte y Comunidad

### 💬 Canales de Comunicación

- **GitHub Issues**: [Reportar bugs y features](https://github.com/curetcore/Billtracky/issues)
- **GitHub Discussions**: [Preguntas y discusiones](https://github.com/curetcore/Billtracky/discussions)
- **Email**: soporte@billtracky.com
- **Discord**: [Unirse al servidor](https://discord.gg/billtracky)
- **Twitter**: [@billtracky](https://twitter.com/billtracky)

### 📚 Documentación Adicional

- [📖 Documentación Completa](https://docs.billtracky.com)
- [🎓 Tutoriales](https://docs.billtracky.com/tutoriales)
- [🔌 API Reference](https://docs.billtracky.com/api)
- [🎨 Design System](https://docs.billtracky.com/design)
- [🎥 Video Tutoriales](https://youtube.com/@billtracky)

### ❓ FAQ

**¿Es gratuito?**
Billtracky tiene planes gratuitos y premium. Ver [pricing](https://billtracky.com/pricing).

**¿Puedo auto-hostear?**
Sí, el código es open-source bajo licencia privada para clientes enterprise.

**¿Soporta multi-idioma?**
Actualmente solo español. Multi-idioma en roadmap v0.3.

**¿Hay límites en el plan gratuito?**
Sí: 50 órdenes/mes, 5 empleados, 1000 transacciones/mes.

**¿Los datos están seguros?**
Sí, usamos Firebase con encriptación end-to-end y backups diarios.

---

## 📄 Licencia

Este proyecto está bajo licencia **Privada** para uso comercial.

Para uso personal/educativo, contactar a: legal@billtracky.com

---

## 🙏 Agradecimientos

Billtracky fue construido gracias a:

- **Next.js Team** - Framework increíble
- **Vercel** - Excelente DX y hosting
- **Firebase** - Backend robusto
- **Google Genkit** - IA simplificada
- **Shadcn** - Sistema de componentes hermoso
- **Radix UI** - Primitivas accesibles
- **Comunidad Open Source** - Inspiración constante

---

## 📊 Estadísticas del Proyecto

![GitHub Stars](https://img.shields.io/github/stars/curetcore/Billtracky)
![GitHub Forks](https://img.shields.io/github/forks/curetcore/Billtracky)
![GitHub Issues](https://img.shields.io/github/issues/curetcore/Billtracky)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/curetcore/Billtracky)
![Last Commit](https://img.shields.io/github/last-commit/curetcore/Billtracky)

---

<div align="center">

**Hecho con ❤️ por el equipo de [Curetcore](https://curetcore.com)**

[Website](https://billtracky.com) • [Documentación](https://docs.billtracky.com) • [Blog](https://blog.billtracky.com) • [Twitter](https://twitter.com/billtracky)

</div>
