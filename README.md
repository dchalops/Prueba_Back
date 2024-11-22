# Servidor API Node.js

Starter de Express/Node.js con autenticación JWT y persistencia en SQLite - Personalizado por [Tu Nombre/Equipo]. El flujo de autenticación utiliza JSON Web Tokens a través de la biblioteca Passport (estrategia passport-jwt).

### Características

- **Preparado para Full-stack**: Fácilmente integrable con frameworks frontend.
- **Simplicidad en el código**: Código intuitivo y extensible.
- **Stack Tecnológico**:
  - Node.js / Express.js
  - SQLite / TypeORM
  - Passport.js (Autenticación JWT)
- **Integración OAuth** (por ejemplo, GitHub, opcional)
- **Configuraciones basadas en el entorno** para implementaciones flexibles.

### APIs Incluidas

#### **APIs de Gestión de Usuarios**

- **Registrar un Usuario**: `POST /api/users/register`
  ```json
  {
    "username": "example_user",
    "password": "password123",
    "email": "user@example.com"
  }
  ```
- **Login**: `POST /api/users/login`
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Logout**: `POST /api/users/logout`
  ```json
  {
    "token": "JWT_TOKEN"
  }
  ```
  Headers:
  ```
  Authorization: Bearer JWT_TOKEN
  ```
- **Obtener Todos los Usuarios**: `GET /api/users/all`
  - Ruta protegida (requiere token en el encabezado Authorization).

#### **APIs de Gestión de Roles**

- **Actualizar Rol de Usuario**:
  ```bash
  yarn update-role [user_id] [role_id (opcional)]
  ```
  - **`user_id`**: ID del usuario cuyo rol necesita ser actualizado.
  - **`role_id`**: ID del rol (1 para admin, 2 para usuario). Si no se proporciona, por defecto se asigna como admin.

---

## Requisitos

- **Node.js**: >= v16.13
- **SQLite**: Asegúrate de que SQLite esté instalado o incluido en el proyecto.

---

## Cómo Empezar

### Paso 1: Clonar el Proyecto
```bash
$ git clone <tu-enlace-del-repositorio>
$ cd <tu-directorio-del-proyecto>
```

### Paso 2: Instalar Dependencias
```bash
$ npm install
# O
$ yarn install
```

### Paso 3: Ejecutar las Migraciones de la Base de Datos
```bash
$ npm run typeorm migration:run
# O
$ yarn typeorm migration:run
```

### Paso 4: Configurar Variables de Entorno
- Copia el archivo `.env.sample` y renómbralo a `.env`.
- Edita el archivo `.env`:
  ```env
  PORT=5000
  SQLITE_PATH=./database.db
  SECRET="YourStrongSecretKey"
  ```

### Paso 5: Iniciar el Servidor
#### Modo de Desarrollo
```bash
$ npm run dev
# O
$ yarn dev
```

#### Build de Producción
```bash
$ yarn build
```
Luego inicia el servidor:
```bash
$ yarn start
```
El servidor API se iniciará en el puerto especificado en el archivo `.env` (por defecto: `5000`).

---

## Estructura del Código

```
< ROOT / src >
     |
     |-- config/                               
     |    |-- passport.ts           # Definir Estrategia Passport             
     |
     |-- migration/                           
     |    |-- some_migration.ts     # Migraciones de Base de Datos
     |
     |-- models/                              
     |    |-- activeSession.ts      # Modelo de Sesiones (TypeORM)              
     |    |-- user.ts               # Modelo de Usuario (TypeORM)
     |
     |-- routes/                              
     |    |-- users.ts              # Definir Rutas de API de Usuarios
     |
     |-- index.ts                   # Punto de Entrada de la API
     |-- .env                       # Configuración de Variables de Entorno
     |
```

---

## Comandos para Migraciones de Base de Datos

### Generar una Migración
```bash
$ yarn typeorm migration:generate -n <migration_name>
```

### Ejecutar Migraciones
```bash
$ yarn typeorm migration:run
```

---

## Prueba de las APIs

Para una configuración rápida, utiliza la **Colección de Postman** proporcionada:

### APIs de Usuarios

#### Registrar
**Endpoint**: `POST /api/users/register`
```json
{
  "username": "test_user",
  "password": "securepassword",
  "email": "test@example.com"
}
```

#### Login
**Endpoint**: `POST /api/users/login`
```json
{
  "email": "test@example.com",
  "password": "securepassword"
}
```

#### Logout
**Endpoint**: `POST /api/users/logout`
Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

#### Obtener Todos los Usuarios
**Endpoint**: `GET /api/users/all`
Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Ejecutar Pruebas
```bash
$ npm run test
# O
$ yarn test
```

---

## Notas de Personalización

Este proyecto ha sido personalizado con las siguientes características adicionales:
- APIs de Usuario Personalizadas (`Registrar`, `Login`, `Logout`, `Obtener Todos los Usuarios`).
- APIs de Gestión de Roles para asignar y actualizar roles de usuario.
- Esquema de base de datos mejorado a través de migraciones.

Siéntete libre de extender este proyecto para adaptarlo a tus necesidades específicas.

# prueba
