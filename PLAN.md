# Plan de implementación — Quinto Informe

## Cómo usar este plan

Se implementará y revisará una etapa completa antes de iniciar la siguiente. Si una validación falla, se corrige dentro de la misma etapa y no se marca como terminada. Los elementos entre corchetes sirven como control de avance.

## Estado global

- [x] 1. Base técnica y estilos globales
- [x] 2. Encabezado y navegación principal
- [ ] 3. Hero y mensaje institucional
- [ ] 4. Destacados y carrusel
- [ ] 5. Selector de ejes y rutas internas
- [ ] 6. Plantilla y contenido de los ejes
- [ ] 7. Transmisión, descarga y pie de página
- [ ] 8. Calidad, accesibilidad y entrega

---

## 1. Base técnica y estilos globales

**Objetivo:** sustituir la pantalla inicial de Astro por la base del sitio en español y establecer las reglas visuales reutilizables.

**Trabajo**

- Crear un layout con idioma `es-MX`, metadatos SEO iniciales y una estructura semántica de página.
- Definir tokens CSS para naranja de campaña, grises, tipografías, espaciados, radios y anchos de contenido.
    - El naranja para headers es #eb9012 y el gris de textos es #727071
    - Las tipografías son Area <link rel="stylesheet" href="https://use.typekit.net/yhw3szz.css"> y esta es la fuente Anzeigen Grotesk <link rel="stylesheet" href="https://use.typekit.net/ovq5wyj.css">
- Establecer estilos responsive: móvil como punto de partida y ajustes para tablet y escritorio.
- Preparar una configuración centralizada para URLs de video, descarga y redes sociales temporales.

**Validación antes de continuar**

- [x] La página deja de mostrar el starter de Astro.
- [x] El documento declara español y cuenta con título y descripción coherentes.
- [x] No hay desbordamiento horizontal a 320 px, 768 px ni 1440 px.
- [x] `pnpm build` termina correctamente.

**Si algo falla:** revisar primero errores de Astro en consola, rutas de imports y reglas globales que puedan afectar tamaño o márgenes del documento.

---

## 2. Encabezado y navegación principal

**Objetivo:** reproducir la franja naranja superior y ofrecer un punto de regreso claro al inicio.

**Trabajo**

- Implementar un encabezado naranja persistente en la parte superior del documento.
- Incluir una marca temporal accesible, enlazada a la página principal.
- Ajustar alturas, separación y alineación para móvil y escritorio sin depender de un logo final.

**Validación antes de continuar**

- [x] La cabecera conserva contraste suficiente y no tapa contenido.
- [x] La marca es accionable con teclado y vuelve a `/`.
- [x] El placeholder puede sustituirse por un SVG/logo final desde un único componente.

**Si algo falla:** comprobar el `z-index`, los estilos de foco y el tamaño mínimo del enlace táctil.

---

## 3. Hero y mensaje institucional

**Objetivo:** construir la apertura narrativa de la landing conservando la composición del referente sin inventar recursos de campaña.

**Trabajo**

- Añadir un hero audiovisual de ancho completo con póster neutral, proporción adaptable y etiqueta clara de contenido próximo.
- Crear el bloque de mensaje institucional naranja: retrato placeholder, texto visible y énfasis tipográfico.
- Mantener el contenido como HTML editable; no incrustar la lámina `LANDING.jpg` como interfaz.

**Validación antes de continuar**

- [ ] El hero no aparenta reproducir un video inexistente.
- [ ] Texto y fondo mantienen legibilidad en todos los breakpoints.
- [ ] El retrato placeholder reserva el espacio de la imagen final sin deformarse.

**Si algo falla:** revisar `aspect-ratio`, `object-fit`, el orden de columnas y el contraste del bloque naranja.

---

## 4. Destacados y carrusel

**Objetivo:** presentar “Lo nuevo sí cumple” como contenido destacado navegable y accesible.

**Trabajo**

- Crear tarjetas de destacado con imagen/ilustración placeholder, título, enlace y relación con el eje correspondiente.
- Implementar avance automático, controles anterior/siguiente e indicadores de diapositiva.
- Pausar o desactivar la animación al respetar `prefers-reduced-motion`; permitir control completo por teclado y toque.

**Validación antes de continuar**

- [ ] Los controles cambian de diapositiva sin saltos de layout.
- [ ] Cada indicador anuncia y activa su diapositiva correctamente.
- [ ] La interacción no depende solamente de arrastre, hover ni reproducción automática.
- [ ] Los enlaces de cada destacado llegan a la ruta correcta.

**Si algo falla:** comprobar índices de diapositiva, gestión de foco, temporizadores duplicados y limpieza de listeners al desmontar el componente.

---

## 5. Selector de ejes y rutas internas

**Objetivo:** permitir que el visitante explore los nueve temas del informe desde la landing.

**Trabajo**

- Definir una fuente de datos única con `slug`, nombre, titular, resumen, métricas y orden de los nueve ejes: seguridad, movilidad, agua, salud, ayudamos, capullos, espacios públicos, economía y medio ambiente.
- Construir el selector horizontal con tarjetas adaptables y navegación por botones/flechas cuando el espacio sea limitado.
- Generar las rutas `/informe/[slug]` a partir de esos datos.

**Validación antes de continuar**

- [ ] Las nueve tarjetas se muestran exactamente una vez y en un orden definido.
- [ ] Cada tarjeta es clicable y funciona también mediante teclado.
- [ ] Las nueve rutas se generan durante el build; un slug desconocido devuelve 404.
- [ ] En móvil se puede llegar a todas las tarjetas sin contenido inaccesible fuera de pantalla.

**Si algo falla:** cotejar slugs y enlaces con la fuente de datos, y revisar la estrategia de scroll/controles del selector.

---

## 6. Plantilla y contenido de los ejes

**Objetivo:** convertir las láminas de campaña en páginas HTML responsivas y editables.

**Trabajo**

- Implementar una plantilla compartida para el detalle: hero del eje, título “Lo nuevo sí cumple”, introducción, lista de logros y tarjetas de métricas.
- Transcribir como contenido preliminar los titulares, cifras y textos visibles de cada lámina de diseño.
- Usar placeholders neutros donde las láminas contengan fotografías o gráficos sin un recurso fuente independiente.
- Añadir enlace de regreso a la landing y CTA hacia el siguiente eje o selector.

**Validación antes de continuar**

- [ ] Los datos de un eje no aparecen por error en otro.
- [ ] Las métricas se leen como texto, no están incrustadas en una imagen.
- [ ] La plantilla conserva jerarquía de encabezados y se adapta a móvil/escritorio.
- [ ] Todas las páginas comparten cabecera, pie y metadatos específicos del eje.

**Si algo falla:** revisar el mapeo de datos por slug, el render condicional de métricas y los textos con caracteres especiales en español.

---

## 7. Transmisión, descarga y pie de página

**Objetivo:** terminar los llamados a la acción de la landing sin crear enlaces rotos mientras faltan recursos definitivos.

**Trabajo**

- Mostrar el bloque “Presentación del informe” con placeholder no interactivo y estado “próximamente”.
- Incluir el CTA de descarga como enlace temporal centralizado y marcarlo de forma que pueda activarse al recibir el PDF/URL final.
- Implementar pie naranja con marca temporal y enlaces configurables de Facebook, Instagram y X.

**Validación antes de continuar**

- [ ] El video placeholder no usa un enlace ni botón que falle.
- [ ] Los enlaces temporales se identifican y sustituyen desde una única configuración.
- [ ] Los iconos sociales incluyen nombre accesible y no se anuncian como contenido decorativo.
- [ ] El pie se mantiene legible y ordenado en móvil y escritorio.

**Si algo falla:** revisar atributos `href`, nombres accesibles y el comportamiento de enlaces aún no publicados.

---

## 8. Calidad, accesibilidad y entrega

**Objetivo:** comprobar el sitio completo antes de dar la etapa por cerrada.

**Trabajo**

- Ejecutar build de producción y resolver todos los errores y advertencias relevantes.
- Revisar rutas, enlaces internos, estados 404 y metadatos por página.
- Probar navegación exclusivamente con teclado, foco visible, contraste, texto alternativo y reducción de movimiento.
- Verificar visualmente la landing en móvil, tablet y escritorio contra la jerarquía del diseño de referencia.

**Validación final**

- [ ] `pnpm build` completa sin fallos.
- [ ] Landing y nueve rutas de ejes cargan correctamente.
- [ ] El carrusel funciona con teclado, toque y preferencias de movimiento reducido.
- [ ] No existen enlaces rotos, controles engañosos ni desbordamiento horizontal.
- [ ] Los placeholders y enlaces que esperan recursos finales están documentados en la configuración.

**Si algo falla:** clasificar el problema por sección, regresar a la etapa correspondiente y repetir sus validaciones antes de reintentar esta revisión final.

## Supuestos vigentes

- El sitio se publica inicialmente solo en español.
- Los videos, el PDF, las redes definitivas, el logo y las fotos individuales todavía no están disponibles.
- Los recursos ausentes se sustituyen por placeholders neutros, no por recortes de las láminas.
- Las cifras transcritas desde las láminas son preliminares y requieren aprobación editorial antes de publicación.
