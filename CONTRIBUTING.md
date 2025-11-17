# 🤝 Guía de Contribución - Billtracky

¡Gracias por tu interés en contribuir a Billtracky! Esta guía te ayudará a empezar.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guías de Estilo](#guías-de-estilo)
- [Reportar Bugs](#reportar-bugs)
- [Solicitar Features](#solicitar-features)
- [Pull Requests](#pull-requests)

---

## 📜 Código de Conducta

Este proyecto sigue el [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables a conduct@billtracky.com.

---

## 🚀 ¿Cómo puedo contribuir?

Hay muchas formas de contribuir a Billtracky:

### 1. 🐛 Reportar Bugs

Si encuentras un bug, [abre un issue](https://github.com/curetcore/Billtracky/issues/new?template=bug_report.md) con:
- Descripción clara del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots o videos (si aplica)
- Información del entorno (OS, navegador, versión)

### 2. 💡 Sugerir Mejoras

Para sugerir nuevas funcionalidades, [abre un issue](https://github.com/curetcore/Billtracky/issues/new?template=feature_request.md) con:
- Descripción de la funcionalidad
- Por qué es útil
- Posibles implementaciones
- Mockups o ejemplos (si aplica)

### 3. 📝 Mejorar Documentación

La documentación siempre puede mejorar:
- Corregir typos
- Agregar ejemplos
- Clarificar instrucciones
- Traducir contenido

### 4. 💻 Contribuir Código

Puedes trabajar en:
- Bugs existentes
- Features solicitados
- Refactorizaciones
- Tests
- Optimizaciones

---

## 🔧 Proceso de Desarrollo

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/Billtracky.git
cd Billtracky

# Agrega el repositorio original como upstream
git remote add upstream https://github.com/curetcore/Billtracky.git
```

### 2. Crea una Rama

```bash
# Actualiza tu main
git checkout main
git pull upstream main

# Crea una rama descriptiva
git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/descripcion-del-bug
```

**Convenciones de nombres de ramas:**
- `feature/` - Para nuevas funcionalidades
- `fix/` - Para corrección de bugs
- `docs/` - Para cambios en documentación
- `refactor/` - Para refactorizaciones
- `test/` - Para agregar/modificar tests
- `chore/` - Para tareas de mantenimiento

### 3. Instala Dependencias

```bash
npm install
```

### 4. Configura el Entorno

```bash
cp .env.example .env.local
# Edita .env.local con tus credenciales
```

### 5. Desarrolla

```bash
# Inicia el servidor de desarrollo
npm run dev

# En otra terminal, inicia Genkit (si trabajas con IA)
npm run genkit:dev
```

### 6. Escribe Tests (si aplica)

```bash
# Ejecuta tests
npm run test

# Tests en modo watch
npm run test:watch

# Coverage
npm run test:coverage
```

### 7. Verifica tu Código

```bash
# Linting
npm run lint

# Type checking
npm run typecheck

# Formateo
npm run format
```

### 8. Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "tipo(alcance): descripción corta

Descripción más detallada si es necesaria.

Closes #123"
```

**Tipos de commit:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formateo, punto y coma, etc.
- `refactor`: Refactorización sin cambiar funcionalidad
- `perf`: Mejoras de performance
- `test`: Agregar o modificar tests
- `build`: Cambios en build system o dependencias
- `ci`: Cambios en CI/CD
- `chore`: Otras tareas de mantenimiento

**Ejemplos:**
```bash
git commit -m "feat(orders): agregar filtro por fecha en panel de órdenes"
git commit -m "fix(auth): corregir validación de email en registro"
git commit -m "docs(readme): actualizar instrucciones de instalación"
git commit -m "refactor(api): simplificar lógica de autenticación"
```

### 9. Push

```bash
git push origin feature/nombre-descriptivo
```

### 10. Abre un Pull Request

Ve a GitHub y abre un PR desde tu rama hacia `main` del repositorio original.

---

## 🎨 Guías de Estilo

### TypeScript

- Usa **TypeScript strict mode**
- Siempre define tipos explícitos
- Evita `any`, usa `unknown` si es necesario
- Usa interfaces para objetos, types para uniones/intersecciones

```typescript
// ✅ Bien
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // ...
}

// ❌ Mal
function getUser(id: any): any {
  // ...
}
```

### React Components

- Usa **functional components** con hooks
- Nombra componentes con PascalCase
- Archivos: kebab-case.tsx
- Un componente por archivo (excepto componentes pequeños relacionados)
- Props con TypeScript interfaces

```typescript
// ✅ Bien - user-card.tsx
interface UserCardProps {
  user: User;
  onEdit?: (id: string) => void;
}

export function UserCard({ user, onEdit }: UserCardProps) {
  return (
    <div className="user-card">
      {/* ... */}
    </div>
  );
}

// ❌ Mal
export function UserCard(props: any) {
  return <div>{/* ... */}</div>;
}
```

### Estructura de Archivos

```typescript
// Orden de imports
// 1. External libraries
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. Internal libraries/components
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

// 3. Types
import type { User } from '@/types';

// 4. Styles (si aplica)
import './styles.css';

// Orden dentro del componente:
// 1. Hooks
// 2. State
// 3. Effects
// 4. Handlers
// 5. Render helpers
// 6. Return JSX
```

### CSS/Tailwind

- Usa **Tailwind CSS** para styling
- Evita CSS custom a menos que sea necesario
- Usa `cn()` utility para combinar clases
- Mantén clases ordenadas: layout → spacing → sizing → colors → typography

```typescript
import { cn } from '@/lib/utils';

// ✅ Bien
<div className={cn(
  "flex items-center justify-between",
  "p-4 gap-4",
  "w-full h-20",
  "bg-white text-gray-900",
  "text-sm font-medium",
  isActive && "bg-blue-50"
)}>
  {/* ... */}
</div>

// ❌ Mal
<div className="p-4 bg-white text-sm flex w-full items-center h-20 gap-4 justify-between font-medium text-gray-900">
  {/* ... */}
</div>
```

### Naming Conventions

```typescript
// Variables y funciones: camelCase
const userName = "John";
function getUserData() {}

// Clases y componentes: PascalCase
class UserService {}
function UserProfile() {}

// Constantes: UPPER_SNAKE_CASE
const MAX_ITEMS = 100;
const API_BASE_URL = "https://api.example.com";

// Archivos:
// - Componentes: PascalCase o kebab-case
// - Utilities: kebab-case
// - Hooks: use-hook-name.ts
// - Types: types.ts o models.ts
```

### Comments

- Usa comentarios solo cuando sea necesario
- Prefiere código auto-explicativo
- Documenta funciones complejas con JSDoc

```typescript
// ✅ Bien - JSDoc para funciones públicas
/**
 * Calcula el total de una orden incluyendo impuestos y descuentos
 * @param items - Array de items en la orden
 * @param taxRate - Tasa de impuesto (0-1)
 * @param discount - Descuento en porcentaje (0-100)
 * @returns Total calculado
 */
export function calculateOrderTotal(
  items: OrderItem[],
  taxRate: number,
  discount: number
): number {
  // Implementación
}

// ❌ Mal - comentarios obvios
// Suma los números
function add(a: number, b: number) {
  return a + b; // Retorna la suma
}
```

---

## 🐛 Reportar Bugs

### Antes de Reportar

1. **Busca issues existentes** para evitar duplicados
2. **Verifica** que estás usando la última versión
3. **Confirma** que el bug es reproducible

### Template de Bug Report

```markdown
## Descripción
Descripción clara y concisa del bug.

## Pasos para Reproducir
1. Ve a '...'
2. Click en '...'
3. Scroll hasta '...'
4. Ver error

## Comportamiento Esperado
Lo que debería pasar.

## Comportamiento Actual
Lo que realmente pasa.

## Screenshots
Si aplica, agrega screenshots.

## Entorno
- OS: [e.g. macOS 14.0]
- Navegador: [e.g. Chrome 120]
- Versión: [e.g. 0.1.0]

## Información Adicional
Cualquier otro contexto relevante.
```

---

## 💡 Solicitar Features

### Template de Feature Request

```markdown
## Problema/Necesidad
¿Qué problema resuelve esta feature?

## Solución Propuesta
Descripción clara de lo que propones.

## Alternativas Consideradas
Otras soluciones que consideraste.

## Mockups/Ejemplos
Si aplica, agrega mockups o ejemplos.

## Impacto
- [ ] Alta prioridad
- [ ] Media prioridad
- [ ] Baja prioridad

## Beneficios
Qué beneficios trae esta feature.
```

---

## 🔀 Pull Requests

### Checklist antes de crear PR

- [ ] El código sigue las guías de estilo
- [ ] Los tests pasan (`npm run test`)
- [ ] El linting pasa (`npm run lint`)
- [ ] Type checking pasa (`npm run typecheck`)
- [ ] Agregaste tests para nuevas funcionalidades
- [ ] Documentación actualizada (README, comentarios)
- [ ] No hay warnings en consola
- [ ] Commits siguen Conventional Commits
- [ ] La rama está actualizada con main

### Template de Pull Request

```markdown
## Descripción
Descripción clara de los cambios realizados.

## Tipo de Cambio
- [ ] Bug fix (cambio que corrige un issue)
- [ ] Nueva funcionalidad (cambio que agrega funcionalidad)
- [ ] Breaking change (cambio que rompe compatibilidad)
- [ ] Documentación

## ¿Cómo se probó?
Describe cómo probaste los cambios.

## Screenshots
Si aplica, agrega screenshots del antes y después.

## Checklist
- [ ] Mi código sigue las guías de estilo
- [ ] Revisé mi propio código
- [ ] Comenté código complejo
- [ ] Actualicé documentación
- [ ] Tests agregados/actualizados
- [ ] Todos los tests pasan
- [ ] No hay warnings

## Issues Relacionados
Closes #123
Related to #456
```

### Proceso de Review

1. **Asigna reviewers** apropiados
2. **Espera aprobación** de al menos 1 maintainer
3. **Resuelve comentarios** de los reviewers
4. **Actualiza** tu rama si hay conflictos
5. **Mantainer hace merge** una vez aprobado

### Después del Merge

- Elimina tu rama
- Celebra 🎉
- Actualiza tu fork:

```bash
git checkout main
git pull upstream main
git push origin main
```

---

## 🧪 Tests

### Escribir Tests

Usamos Jest y React Testing Library:

```typescript
// user-card.test.tsx
import { render, screen } from '@testing-library/react';
import { UserCard } from './user-card';

describe('UserCard', () => {
  it('renders user information', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    render(<UserCard user={user} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', () => {
    const user = { id: '1', name: 'John', email: 'john@example.com' };
    const onEdit = jest.fn();

    render(<UserCard user={user} onEdit={onEdit} />);

    const editButton = screen.getByRole('button', { name: /edit/i });
    editButton.click();

    expect(onEdit).toHaveBeenCalledWith('1');
  });
});
```

### Cobertura

Mantén cobertura >80%:

```bash
npm run test:coverage
```

---

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Google Genkit Docs](https://firebase.google.com/docs/genkit)

---

## 🙏 Agradecimientos

¡Gracias por contribuir a Billtracky! Cada contribución, grande o pequeña, hace la diferencia.

---

## ❓ Preguntas

Si tienes preguntas, puedes:
- Abrir un [Discussion](https://github.com/curetcore/Billtracky/discussions)
- Unirte a nuestro [Discord](https://discord.gg/billtracky)
- Enviar email a: dev@billtracky.com

---

<div align="center">

**Happy Coding! 🚀**

[← Volver al README](README.md)

</div>
