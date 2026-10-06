# Fase 3 — Hero y Mensaje Institucional Ajustado

## Resumen

Actualizar la fase 3 para que, debajo del hero audiovisual grande, aparezca un bloque institucional como el referente: tarjeta naranja ancha, retrato real de Samuel Garcia a la izquierda y texto institucional a la derecha. Se elimina el placeholder visual tipo `div` para retrato y se usa `src/assets/samuelGarcia.webp`.

## Cambios clave

- Mantener el hero audiovisual grande arriba, no interactivo y con estado de contenido proximo.
- Reemplazar el placeholder `.intro__retrato` por una imagen real:
  - Importar `samuelGarcia.webp` en `src/components/HeroIntro.astro`.
  - Renderizar con `<img>`, no con `div role="img"`.
  - Usar `alt="Samuel Garcia"`.
- Ajustar el bloque institucional:
  - Fondo naranja `#eb9012`.
  - Texto blanco `#ffffff`.
  - Esquina superior izquierda amplia y esquina inferior derecha amplia.
  - Retrato alineado abajo/izquierda, sin deformacion.
  - Texto a la derecha, alineado a la izquierda.
- No implementar todavia carrusel, selector, transmision, descarga ni footer.

## Texto y tipografia

- Usar la fuente de cuerpo existente: `var(--font-body)` / Area.
- No usar titulo visible "Lo nuevo si cumple" dentro de este bloque; el bloque debe mostrar solo el mensaje institucional como en la referencia.
- Tamano base recomendado del texto: `clamp(1rem, 1.7vw, 1.35rem)`.
- Line-height compacto: `1.08` a `1.18`, porque el referente usa texto denso.
- Color de todo el texto: blanco.
- Peso normal para texto corriente: `400`.
- Peso fuerte para enfasis: `700` o `800`.
- El contenido debe escribirse como HTML editable con `<p>` y `<strong>`.

Texto exacto y enfasis:

```html
<p>
  Hace un ano <strong>te dije que ibamos en tiempo y forma, hoy te demuestro que lo nuevo si cumple!</strong>
</p>

<p>
  Millones de neoleoneses ya se benefician de las
  <strong>obras que construimos por todo el estado,</strong>
  como el Nuevo Cuartel General, la Nueva Presa Leon, nuevas escuelas, nuevos parques y estamos muy cerca de movernos en las nuevas Lineas del Metro.
</p>

<p>
  <strong>Terminamos lo que otros gobiernos ni siquiera empezaron y sin endeudar al estado.</strong>
  Gracias a ello, Nuevo Leon tiene los mejores resultados de seguridad de los ultimos 20 anos, una reduccion historica de la pobreza y seguimos siendo los primeros en economia y coberturas de salud gratuitas.
</p>

<p>
  Hace cinco anos nos diste tu confianza y no te equivocaste,
  <strong>valio la pena confiar en lo nuevo, porque lo nuevo si cumple.</strong>
</p>
```

## Detalle de implementacion

- En `HeroIntro.astro`, usar una estructura minima:
  - seccion `.hero` para el video/poster grande.
  - seccion `.intro` debajo.
  - `.intro__card` como tarjeta naranja.
  - `.intro__portrait` con `<img>`.
  - `.intro__copy` para los parrafos.
- En CSS:
  - Mobile-first: tarjeta en una columna, imagen arriba o antes del texto.
  - Desde tablet: dos columnas, imagen izquierda y texto derecha.
  - La imagen debe usar `object-fit: contain` y alinearse al borde inferior de la tarjeta.
  - Evitar sombras pesadas y cards anidadas.
  - Mantener ancho contenido alineado con `.container`.

## Validacion

- Ejecutar `pnpm build`.
- Verificar que el bloque institucional aparece debajo del hero grande.
- Confirmar que ya no existe "Retrato proximamente".
- Confirmar que `samuelGarcia.webp` carga correctamente y no se deforma.
- Revisar responsive en 320 px, 768 px y 1440 px:
  - sin overflow horizontal.
  - texto legible.
  - imagen y texto no se enciman.
- Verificar teclado:
  - `Saltar al contenido` sigue funcionando.
  - el hero y el bloque institucional no agregan focos falsos.

## Supuestos

- `src/assets/samuelGarcia.webp` es el retrato correcto para este bloque.
- La tarjeta institucional debe parecerse al referente adjunto, no al placeholder neutro del plan anterior.
- `design/LANDING.jpg` sigue siendo referencia visual unicamente; no se incrusta como interfaz.
- Fase 3 no se marca como completada hasta revision humana.
