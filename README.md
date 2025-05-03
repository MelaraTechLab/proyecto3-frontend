# Proyecto 3 – Frontend en React

Este es el frontend del Proyecto 3 de Bases de Datos 1: **Gestión de eventos culturales y asistencia**. Está desarrollado en React usando Create React App.

## Tecnologías

- React
- React Router DOM
- Fetch API

## Estructura

- `/` Página principal con menú de selección de reportes
- `/reporte1` Eventos por fecha y tipo (con filtros)
- `/reporte2` Total de asistentes por evento
- `/reporte3` Eventos por lugar (con filtro)
- `/reporte4` Asistencias por género (con filtro)
- `/reporte5` Patrocinadores por evento (con filtro)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/MelaraTechLab/proyecto3-frontend.git
   cd proyecto3-frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   npm start
   ```

Asegúrate de que el backend esté corriendo en `http://localhost:3001`.

## Notas

- Cada reporte tiene su propia vista y un botón para regresar al menú.
- El frontend hace peticiones al backend para mostrar datos en tiempo real.
- Los filtros son opcionales y ayudan a refinar los resultados.

## Autores

- Juan Cruz 23110
