---
name: Apache Fabricators
description: Sistema visual de un fabricante de acero certificado ASME, AISC e ISO en Houston.
colors:
  primary: "#223A6B"
  secondary: "#A8221F"
  ink: "#17181C"
  ink-strong: "#16181D"
  ink-muted: "#5C6270"
  surface: "#FFFFFF"
  surface-sunken: "#F2F3F5"
  rule: "#DDE0E6"
typography:
  display:
    fontFamily: "Libre Franklin, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.5rem, 1.55rem + 3.1vw, 4.125rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Libre Franklin, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.9rem, 1.36rem + 1.9vw, 2.875rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Libre Franklin, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.4rem, 1.22rem + 0.62vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Libre Franklin, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Libre Franklin, Helvetica Neue, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.13em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
rounded:
  none: "0px"
  sm: "4px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  button-outline-light:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-primary-white:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-strong}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-strong}"
    rounded: "{rounded.none}"
    padding: "24px"
  card-art:
    backgroundColor: "{colors.surface-sunken}"
    rounded: "{rounded.none}"
    padding: "20px"
    height: "212px"
  spec-value:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.ink-strong}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "0px"
  nav-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 10px"
---

# Design System: Apache Fabricators

## 1. Overview

**Creative North Star: "El Turno de Noche"**

El taller no para. La primera pantalla del sitio es oscura porque así se ve la nave cuando importa: el arco de soldadura como única fuente de luz, la chispa contra el acero, la gente trabajando mientras el resto de Houston duerme. Después de esa entrada el sitio se abre a papel blanco y se convierte en lo que el comprador necesita: fichas, cifras y sellos que puede verificar sin llamar a nadie.

Ese contraste entre oscuro y claro es la estructura del sistema. Las superficies en tinta (`#17181C`) enmarcan y presentan: cabecera, héroe, bloque de capacidades, pie. Las superficies en blanco y gris de plano contienen y ordenan: rejillas de mercados, tablas de especificaciones, certificaciones. El visitante entra a la nave, se le muestra el trabajo, y luego se le entrega el expediente.

Este sistema rechaza explícitamente la estética de producto de software, la anti-referencia que PRODUCT.md nombra en primer lugar. Nada de gradientes de color, superficies de vidrio, ilustraciones isométricas ni métricas gigantes con acento decorativo. También rechaza la plantilla de la que parte el sitio: carrusel de héroe, tarjetas idénticas con ícono redondeado y sombra quemada, testimonios inventados.

**Key Characteristics:**

- Alternancia deliberada de superficies oscuras y claras; nunca gris medio.
- Fotografía a sangre contra el borde del viewport, no encajonada en marcos.
- Una sola familia de texto con contraste de peso de 400 a 900, más una monoespaciada reservada a datos.
- Rótulos y cifras en monoespaciada: la textura técnica separa lo que se lee de lo que se verifica.
- Esquinas de 4px en controles, rectas en contenedores. Sin píldoras.
- Sombra únicamente como respuesta a la interacción, jamás en reposo.

## 2. Colors

Paleta de dos colores de marca sobre una neutra fría ligeramente azulada. Ambos colores de marca superan WCAG AA sobre blanco en texto normal, lo que permite usarlos en tipografía y no solo en fondos.

### Primary

- **Azul Acero** (`#223A6B`): color de estructura y de enlace. Encabezados de sección cuando necesitan autoridad, estado activo de navegación, borde de tarjeta al pasar el cursor, texto de la afordancia "Details". No se usa en fondos amplios.

### Secondary

- **Rojo Óxido** (`#A8221F`): el rojo del ala del logotipo. Es el color de acción y de señal: botón principal, rótulos de sección, subrayado de la página activa, viñetas, etiqueta de certificaciones sobre la fotografía. Su escasez es lo que lo hace funcionar.

### Neutral

- **Tinta de Nave** (`#17181C`): la superficie oscura del sistema. Cabecera, héroe, panel de capacidades y pie. Sustituye todo uso de negro puro.
- **Tinta** (`#16181D`): color por defecto del texto sobre superficies claras.
- **Tinta Apagada** (`#5C6270`): metadatos, descripciones de tarjeta, etiquetas secundarias. Nunca para párrafos largos.
- **Papel** (`#FFFFFF`): superficie base de lectura.
- **Gris de Plano** (`#F2F3F5`): franja de especificaciones, banda de imagen en tarjetas, secciones alternas. Es el recurso de agrupación por defecto.
- **Regla** (`#DDE0E6`): todo borde y divisor, siempre a 1px.

### Named Rules

**La Regla de la Alternancia.** Las secciones alternan entre papel y gris de plano, y las superficies en tinta se reservan para presentar: entrada, capacidades y cierre. Dos secciones oscuras seguidas apagan la página.

**La Regla del Color Prestado.** Prohibido escribir un color de Tailwind en el marcado. Todo color sale de los tokens de `theme.json`. Si hace falta un tono que no existe, se añade al tema, no a la clase.

**La Regla del Rojo Escaso.** El rojo aparece como máximo tres veces por pantalla. Si aparece una cuarta, algo se está decorando en vez de señalarse.

## 3. Typography

**Text Font:** Libre Franklin (con Helvetica Neue, sans-serif), pesos 400, 500, 600, 700, 800 y 900
**Data Font:** JetBrains Mono (con ui-monospace, monospace), pesos 500 y 700

**Character:** Libre Franklin es una grotesca americana con un peso Black que aguanta tamaños de display sin deformarse, y un Regular que se lee cómodo en párrafo largo. Una sola familia con contraste fuerte de peso da más cohesión que un emparejamiento forzado. La monoespaciada no compite: aparece solo donde el contenido es una cifra o un rótulo, y su textura distinta es la señal de que ahí hay un dato verificable.

La escala de display es fluida con `clamp()` para que respire en pantallas anchas sin saltar en el breakpoint. Los niveles de cuerpo son fijos, para que las rejillas mantengan alturas predecibles.

### Hierarchy

- **Display** (900, `clamp(2.5rem, 1.55rem + 3.1vw, 4.125rem)`, altura 0.98, tracking -0.035em): un solo uso por página. El nombre de la empresa o el título de la página.
- **Headline** (800, `clamp(1.9rem, 1.36rem + 1.9vw, 2.875rem)`, altura 1.06, tracking -0.028em): títulos de sección, nivel `h2`.
- **Title** (700, `clamp(1.4rem, 1.22rem + 0.62vw, 1.75rem)`, altura 1.16): subsecciones, nivel `h3`.
- **Subtitle** (700, 1.5rem a 1.125rem): niveles `h4` a `h6`, nombres de tarjeta y de bloque.
- **Body** (400, 17px, altura 1.65): texto de lectura, máximo 68 caracteres por línea, siempre alineado a la izquierda.
- **Label** (700, 11px, tracking 0.13em, mayúsculas): etiquetas de tabla, categorías, encabezados de columna. Clase `.label`.
- **Kicker** (mono 500, 11px, tracking 0.16em, mayúsculas, rojo): el rótulo que abre cada sección. Clase `.kicker`.
- **Data** (mono 500, `tabular-nums`): superficie, acres, teléfonos, horarios, códigos. Clase `.data`.

### Named Rules

**La Regla del Tracking Proporcional.** Cuanto mayor el tamaño, más cerrado el interletrado. El display va a -0.035em y el `h6` a -0.006em. Aplicar el mismo valor a todos los niveles es el error que delata una tipografía sin trabajar.

**La Regla del Dato Monoespaciado.** Si un número puede ser auditado, va en JetBrains Mono con cifras tabulares. Los números que solo son prosa ("más de 30 años") van en Libre Franklin como texto normal.

**La Regla de la Bandera.** El texto de cuerpo se alinea a la izquierda con borde derecho irregular. `text-justify` queda prohibido en todo el sitio.

**La Regla del Encabezado Único.** Un `<h1>` por página y ningún salto de nivel.

## 4. Elevation

El sistema es plano en reposo. La profundidad se construye con tres recursos, en este orden: reglas de 1px en Regla, cambio de superficie entre Papel y Gris de Plano, y bloques invertidos en Tinta de Nave.

La sombra existe, pero **solo como respuesta a la interacción**. Una tarjeta en reposo no flota; al pasar el cursor se eleva ligeramente y su borde toma el Azul Acero. Eso convierte la sombra en información sobre el estado, no en decoración.

### Shadow Vocabulary

- **hover-lift** (`box-shadow: 0 10px 26px rgba(22, 24, 29, 0.10)`): única sombra del sistema. Tarjetas de mercado y de capacidad al pasar el cursor.

### Named Rules

**La Regla del Anillo Visible.** Todo elemento enfocable lleva `outline: 2px solid #A8221F` con `outline-offset: 2px`. Ninguna regla puede eliminar el foco sin sustituirlo por algo igual de visible.

**Prueba de auditoría:** si un elemento parece flotar sin que el cursor esté encima, la sombra sobra.

## 5. Components

### Buttons

- **Shape:** esquinas de 4px, altura mínima 48px para uso con guantes.
- **Primary:** fondo Rojo Óxido, texto blanco, Label en mayúsculas con tracking 0.08em, padding 14px 24px.
- **Outline light:** sobre superficie oscura, borde blanco al 40%, texto blanco. Al pasar el cursor invierte a fondo blanco con texto en Tinta de Nave.
- **Primary white:** sobre superficie oscura, fondo blanco con texto en Tinta. Es el botón de la cabecera.
- **Hover:** cada variante define el suyo. Prohibido un `:hover` global que imponga un color a todas.

### Cards

- **Estructura:** banda de imagen arriba sobre Gris de Plano con altura mínima de 212px, cuerpo abajo sobre Papel.
- **Border:** 1px en Regla en los cuatro lados. Al pasar el cursor el borde toma Azul Acero y aparece `hover-lift`.
- **Imagen:** recorte sin fondo, `object-contain`, 166px de alto, con una ampliación del 5% en hover.
- **Contenido obligatorio:** título, una línea de descripción y la afordancia "Details". Una tarjeta sin destino no es una tarjeta.
- **Altura:** todas las tarjetas de una fila terminan a la misma altura.

### Spec Band

La franja de datos bajo el héroe y las tablas de instalación. Etiqueta en `.label` arriba, valor en `.data` debajo a 26px. Fondo Gris de Plano, regla inferior de 1px. Es donde el comprador encuentra lo que vino a verificar.

### Certification Card

El activo central. Sello monocromo en Tinta de Nave sobre banda clara, todos al mismo encuadre de 344px, y debajo categoría en `.label`, nombre en `h3` y alcance en cuerpo. Nunca se imita el sello de un organismo certificador: si no hay archivo oficial, se compone tipográficamente.

### Navigation

- **Cabecera en Tinta de Nave**, logotipo en su variante clara, enlaces en Label sobre blanco al 75%.
- **Estado activo:** texto blanco y subrayado de 2px en Rojo Óxido.
- **Mobile:** cajón desplegable sobre Tinta de Nave, filas de 56px, teléfono real como última fila.

### Hero

Fotografía a sangre contra el borde derecho ocupando el 46% del ancho y la altura completa de la sección, con un degradado de 96px en su borde izquierdo que la funde con la tinta. Altura mínima de 580px. En móvil pasa a banner a ancho completo sobre el titular. La etiqueta de certificaciones va anclada abajo a la izquierda de la fotografía, en Rojo Óxido.

## 6. Do's and Don'ts

### Do:

- **Do** alternar superficies: tinta para presentar, papel y gris de plano para consultar.
- **Do** llevar la fotografía hasta el borde del viewport en vez de encajonarla.
- **Do** usar `.kicker` para abrir cada sección, `.label` para etiquetas de dato y `.data` para toda cifra verificable.
- **Do** cerrar el interletrado en proporción al tamaño del texto.
- **Do** mantener el cuerpo en 17px y los objetivos táctiles en 44x44px mínimo.
- **Do** dar a cada elemento enfocable un anillo de `2px solid #A8221F` con `outline-offset: 2px`.
- **Do** igualar la altura de las tarjetas de una misma fila y el encuadre de los sellos.
- **Do** detener todo movimiento bajo `prefers-reduced-motion: reduce`.
- **Do** escribir un solo `<h1>` por página y respetar el orden de niveles.

### Don't:

- **Don't** parecer una **startup de software**: prohibidos los gradientes, el glassmorphism, las ilustraciones isométricas y las insignias de producto.
- **Don't** reproducir la **plantilla genérica** de partida: carrusel de héroe, rejillas de tarjetas con ícono redondeado y sombra quemada, testimonios inventados.
- **Don't** publicar una cifra que no se pueda sustentar ante un auditor. Las métricas actuales tienen fuente interna; cualquier número nuevo necesita la suya.
- **Don't** poner sombra en reposo. La sombra es respuesta a la interacción.
- **Don't** usar radios mayores a 4px ni píldoras.
- **Don't** escribir colores de Tailwind en el marcado; todo sale de los tokens.
- **Don't** aplicar `text-justify` en ningún lugar.
- **Don't** eliminar el indicador de foco sin sustituirlo.
- **Don't** hacer autoplay de menos de 7 segundos ni sin botón de pausa permanente.
- **Don't** usar la monoespaciada en prosa. Es para datos y rótulos.
- **Don't** imitar la marca de un organismo certificador. O es el archivo oficial, o es un bloque tipográfico.
- **Don't** mostrar una tarjeta sin título, sin descripción o sin destino.
