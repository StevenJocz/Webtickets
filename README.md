# 🎫 Sistema de Gestión de Tickets -- Frontend

Frontend del **Sistema de Gestión de Tickets** desarrollado con
**React + TypeScript + Vite**.\
Consume una **API REST en .NET Core 8 con PostgreSQL**, utilizando
autenticación **JWT** y una arquitectura modular escalable.

------------------------------------------------------------------------

## 🚀 Tecnologías Utilizadas

-   ⚛️ React 18\
-   ⚡ Vite\
-   🧠 TypeScript\
-   🎨 CSS Modules\
-   📡 Axios\
-   🗃️ Redux Toolkit\
-   📝 Formik + Yup (validación de formularios)

------------------------------------------------------------------------

## 📦 Instalación y Configuración


### 2️⃣ Instalar dependencias

``` bash
npm install
```

### 3️⃣ Configurar la URL de la API

Edita el archivo:

``` bash
src/models/servicio.ts
```

Ejemplo:

``` ts
export const servicio = {
  api: 'http://localhost:5059/api'
};
```

------------------------------------------------------------------------

## ▶️ Ejecutar el proyecto

``` bash
npm run dev
```

La aplicación estará disponible en:

    http://localhost:5173

------------------------------------------------------------------------

## 🗂️ Estructura del Proyecto

    src/
    │
    ├── app/              # Configuración principal de la app
    ├── assets/           # Imágenes y recursos estáticos
    ├── features/          # Módulos por dominio
    │   ├── auth/          # Autenticación
    │   └── tickets/        # Gestión de tickets
    ├── guards/            # Guards de rutas (AuthGuard, etc.)
    ├── models/            # Interfaces y modelos TypeScript
    ├── redux/              # Store y slices globales
    ├── service/            # Servicios HTTP y API
    ├── shared/              # Componentes reutilizables
    ├── styles/              # Estilos globales
    └── main.tsx             # Punto de entrada de la aplicación

------------------------------------------------------------------------

## 🔐 Autenticación

El token se almacena en **LocalStorage** y se gestiona mediante **Redux
Toolkit**, permitiendo proteger rutas con **Route Guards**.

------------------------------------------------------------------------

## 📌 Características

-   🎫 Creación y consulta de tickets\
-   🧩 Arquitectura modular por features\
-   📝 Formularios con Formik y validaciones con Yup\
-   🗃️ Manejo de estado global con Redux Toolkit\
-   🧼 Código limpio y escalable

------------------------------------------------------------------------

## 🧑‍💻 Autor

**SHamilton Espinal**\
Desarrollador de Software \| React \| .NET \| PostgreSQL

------------------------------------------------------------------------

