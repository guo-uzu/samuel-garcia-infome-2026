# Etapa 2: Encabezado y navegación principal

## Resumen

Añadir la franja naranja superior con el símbolo oficial del león. La cabecera quedará fija al hacer scroll y su enlace llevará a la página de inicio.

## Cambios previstos

- Crear un componente Astro para el encabezado y usarlo desde el layout.
- Usar `Informe_2026_sg-09.svg`, que coincide con el símbolo blanco del diseño, dentro de un enlace accesible a `/`.
- Aplicar estilos responsive y `position: sticky`, cuidando que la barra no tape el contenido.
- No añadir enlaces de navegación a secciones o páginas que aún no existen.

Astro permite crear componentes `.astro` sin añadir JavaScript al navegador cuando no necesitan interacción dinámica. [Documentación de componentes Astro (https://docs.astro.build/en/basics/astro-components/)](<https://docs.astro.build/en/basics/astro-components/>)

## Archivos probables

- `src/components/Header.astro` — componente nuevo.
- `src/layouts/Layout.astro` — incluir la cabecera.
- `src/styles/global.css` — estilos y comportamiento sticky.

## Comprobación

- Ejecutar `pnpm build`, como indica `AGENTS.md`.
- Verificar visualmente a 320 px, 768 px y 1440 px; comprobar que la barra permanece arriba al desplazarse y no oculta el contenido.
- Probar el enlace con teclado y confirmar que vuelve a `/`, con foco visible y nombre accesible.

## Supuestos

- El SVG disponible es el símbolo que debe usarse en esta etapa.
- La cabecera lleva solo el enlace al inicio; las demás rutas se añadirán cuando estén disponibles en etapas posteriores.