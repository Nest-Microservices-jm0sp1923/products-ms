# 🛍️ Product Microservices

Este microservicio gestiona productos dentro de una arquitectura basada en microservicios. A continuación, encontrarás los pasos para levantar el entorno de desarrollo.

---

## 🚀 Entorno de Desarrollo

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/Nest-Microservices-jm0sp1923/products-ms.git
cd products-ms
```

### 2️⃣ Instalar Dependencias, Configurar Variables de Entorno y Ejecutar Migraciones

```bash
# Instalar dependencias
npm install

# Crear archivo de entorno
cp .env.example .env

# Ejecutar migraciones de Prisma
npx prisma migrate dev
```

Asegúrate de completar todas las variables necesarias en el archivo `.env` antes de correr las migraciones.

### 3️⃣ Iniciar el Proyecto en Modo Desarrollo

```bash
npm run start:dev
```

---

## 🧪 Tecnologías Usadas

- **Node.js**
- **NestJS**
- **Prisma ORM**
- **SQLite**(u otra base de datos compatible)
