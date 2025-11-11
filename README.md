# React Jobs Contact

Pequeña aplicación React que demuestra enrutado con React Router, un contexto para datos de contacto y una sección de ofertas de trabajo que obtiene datos de una API local.

## Resumen

Este proyecto usa Vite + React y está organizado en páginas y componentes. Permite navegar entre Home, About, Products, Contact (form y info) y Jobs (lista y detalle). El formulario de contacto guarda los datos en un Contexto React y muestra la información en otra ruta.

## Requisitos

- Node.js (>= 18 recomendado)
- npm

## Instalación

1. Clona el repositorio

2. Instala dependencias

```bash
npm install
```

## Scripts disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo (Vite).
- `npm run build` - Genera la versión de producción.
- `npm run preview` - Previsualiza la build de producción.
- `npm run lint` - Ejecuta ESLint sobre el proyecto.

Ejemplo rápido:

```bash
npm run dev
```

Abre http://localhost:5173 (o el puerto que indique Vite) en tu navegador.

## Estructura del proyecto

- `index.html` - Entrada HTML.
- `src/main.jsx` - Punto de entrada React, envuelve la app con `ContactProvider`.
- `src/App.jsx` - Define las rutas con `react-router-dom`.
- `src/pages/` - Páginas: `Home`, `About`, `Products`, `Contact`, `Jobs`.
- `src/components/` - Componentes pequeños: `ContactForm`, `ContactInfo`, `Navbar`, `JobDetails`, `Error`, `NotFound`.
- `src/context/ContactContext.jsx` - Contexto para almacenar y compartir los datos de contacto.
- `src/assets/data.json` - Datos de ejemplo para jobs (además el loader de Jobs espera una API en `http://localhost:5200/jobs`).


## Licencia

Repositorio con licencia en el archivo `LICENSE`.
