# Sistema Contable y de Registro – Notaría de Mapiri

Este es un sistema de escritorio desarrollado para una notaría en Mapiri, Bolivia, que permite la gestión de documentos, clientes y contabilidad de manera eficiente. Se construyó utilizando **Tauri** para el backend, **React** con **Tailwind CSS** para el frontend, y **SQLite** como base de datos.

## 🚀 Características

- 📄 **Gestión de Documentos**: Registro, seguimiento y almacenamiento de documentos por cliente.
- 📊 **Módulo Contable**: Administración de ingresos, egresos y reportes financieros automatizados.
- 👥 **Seguimiento de Clientes**: Registro de clientes, historial de documentos y control de pagos.
- 📌 **Interfaz Moderna y Responsiva**: Construida con React y Tailwind CSS, con soporte para modo claro/oscuro.
- 🖥️ **Aplicación Nativa para Windows**: Gracias a Tauri, el sistema es ligero y rápido.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React + Tailwind CSS
- **Backend**: Tauri (Rust)
- **Base de Datos**: SQLite
- **Componentes UI**: shadcn/ui

## 📦 Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/notaria-mapiri.git
   cd notaria-mapiri

2. Instala las dependencias:
   ```sh
   npm install
   # o
   bun install

3. Ejecuta el proyecto:
   ```sh
   npm run tauri dev
   # o
   bun run tauri dev

## 🚀 Compilación para Producción
Para generar la aplicación para distribución:
   ```sh
   npm run tauri build
   # o
   bun run tauri build

## 📝 Licencia
Este proyecto está bajo la Licencia MIT.