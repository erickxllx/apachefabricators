# Product

## Register

brand

## Users

**Comprador primario: procura de refinería y petroquímica.** Ingenieros y compradores del corredor industrial de Houston (Exxon, Shell, LyondellBasell, Chevron Phillips y sus contratistas). Evalúan proveedores contra una lista de verificación: sellos de código vigentes, capacidad instalada, récord de seguridad, historial de cumplimiento de fecha. No compran por entusiasmo, compran por ausencia de riesgo. Rango de edad de 40 a 60 años.

**Comprador secundario: gerente de proyecto de EPC o contratista general.** Subcontrata fabricación dentro de un proyecto mayor. Le importa si Apache puede absorber un pico de trabajo sin comprometer la fecha, y si el paquete documental que entrega va a pasar la auditoría de su cliente final.

**Contexto de uso.** El sitio se consulta en dos situaciones: en escritorio durante una evaluación formal de proveedores, y en celular a plena luz del día en patio o planta, con guantes, verificando un dato puntual antes de una llamada. Ambos escenarios exigen legibilidad alta y respuestas rápidas, no exploración.

**El trabajo que vienen a hacer.** No vienen a descubrir Apache Fabricators. Ya hubo contacto: una llamada, una feria, una recomendación, una cotización previa. Vienen a **verificar** que la empresa es lo que dijo ser, y a reunir evidencia para defender la decisión ante su propio jefe o ante un comité de compras.

## Product Purpose

El sitio es **material de verificación, no de captación.** Su función es cerrar la brecha entre "nos interesa Apache" y "aprobamos a Apache como proveedor".

Success se ve así: un comprador entra buscando confirmar tres cosas (los sellos son reales y están vigentes, la capacidad física alcanza para el alcance del trabajo, el récord de seguridad aguanta una auditoría) y las encuentra las tres en menos de dos minutos, sin tener que llamar para preguntarlas.

Los activos centrales del sitio, en orden:

1. **Las seis certificaciones**: AISC, ASME U Stamp, National Board R Stamp, ASME Certification Mark, ISO 9001:2015, ISO 45001. Son el argumento de venta completo. Hoy están enterradas en un carrusel sin etiquetas que gira cada segundo.
2. **La instalación**: 60,000 pies cuadrados de taller sobre 13 acres de patio en 8101 E Mt Houston Rd, Houston, TX 77050. Es un dato duro que separa a Apache de talleres pequeños.
3. **El programa de seguridad**: 20-20-20, Stop Work Obligation, pruebas antidoping pre-empleo y aleatorias, entrenamiento OSHA por descripción de puesto. Está genuinamente escrito y es lo mejor del contenido actual.
4. **Las capacidades**: soldadura, fabricación, maquinado CNC, procesamiento de placa, recubrimiento, pruebas de carga, servicio llave en mano.

Una solicitud de cotización en línea es deseable, pero secundaria: el comprador de este perfil normalmente ya tiene un contacto directo y envía su RFQ por correo con planos adjuntos.

## Brand Personality

**Exacto. Documentado. Sin adorno.**

Apache Fabricators vende tolerancias, no ideas. La voz del sitio es la de un plano de taller: cada afirmación lleva una unidad, una norma o un número de certificado. Donde la plantilla actual dice "superior quality and durability", la voz correcta dice qué código se cumple y quién lo auditó.

El objeto físico de referencia es **una ficha técnica de acero**: rejilla rígida y visible, datos densos, jerarquía por estructura y no por decoración. La organización de la página es en sí misma la demostración de que la empresa sabe organizar un trabajo.

Emoción objetivo: **alivio, no entusiasmo.** El comprador debe salir del sitio pensando "no voy a tener problemas con estos" y no "qué bonito sitio".

Tono de la copia: afirmativo, específico, breve. Sin superlativos, sin "líderes en la industria", sin signos de exclamación. Si una frase sobreviviría dentro de un pliego de licitación, sirve.

## Anti-references

**Startup de software.** La anti-referencia nombrada por el cliente, y la más importante. Prohibido: gradientes, glassmorphism, ilustraciones isométricas, tarjetas flotantes con sombra difusa, métricas gigantes con acento de color, insignias de producto, iconografía de línea redondeada, cualquier cosa que sugiera que el negocio es un SaaS. Un fabricante de recipientes a presión que se ve como una startup pierde credibilidad de inmediato.

**La plantilla genérica que el sitio es hoy.** Carrusel de héroe con cuatro slides, rejilla de tarjetas idénticas con ícono redondeado arriba, contadores animados, testimonios inventados, barras de progreso al 100%. Es el punto de partida y el material a eliminar.

**Métricas sin respaldo.** Toda cifra publicada debe poder sustentarse si un auditor la pide. Las cifras actuales de proyectos, clientes y entregas sí tienen fuente interna; el principio aplica a cualquier número que se añada en el futuro.

**Fotografía y contenido de stock.** El sello de ISO 45001 que se usa hoy tiene marca de agua de banco de imágenes visible. Toda imagen debe ser de la planta real, del trabajo real o el archivo oficial del organismo certificador.

## Design Principles

**1. Verificable o no se dice.** Cada afirmación del sitio debe poder respaldarse con un documento, un número o una fotografía de la operación real. Si no hay evidencia, la afirmación se elimina, no se suaviza. Este principio es la respuesta directa al lorem ipsum, a los testimonios falsos y a los contadores inventados.

**2. El dato antes que el adjetivo.** Se lidera con la cifra: 60,000 pies cuadrados, 13 acres, ASME Sección VIII, ISO 9001:2015. Los adjetivos ("superior", "de alta calidad", "de primer nivel") se eliminan salvo que vayan seguidos de la medida que los sostiene.

**3. La estructura es la voz.** La jerarquía se construye con rejilla, alineación y tipografía, nunca con decoración añadida. Nada de separadores ornamentales, sombras difusas ni ilustraciones de relleno. Si un elemento no transporta información, se quita.

**4. El comprador llega a mitad del camino.** No hay que convencerlo de que necesita fabricación de acero: ya lo sabe y ya contactó. Cada página debe responder una pregunta de su lista de verificación de forma directa, sin introducción y sin venta.

**5. La precisión del sitio es la muestra del trabajo.** Un enlace roto, una palabra mal escrita o un elemento desalineado se leen como una falla de control de calidad. En una empresa que vende tolerancias, el sitio es la primera pieza que el cliente inspecciona.

## Accessibility & Inclusion

**Objetivo: WCAG 2.2 nivel AA completo, con refuerzos para uso en planta.**

Requisitos que van más allá de AA por el contexto de uso:

- **Texto base de 17 a 18px**, no los 14px actuales. Los compradores están en el rango de 40 a 60 años y el sitio se consulta en celular bajo luz solar directa.
- **Contraste reforzado en texto de cuerpo**: objetivo de 7:1 donde sea posible sin romper la paleta. El token actual `text-light` (#bcbcbd) da 1.9:1 y queda prohibido para texto.
- **Foco visible obligatorio.** Hoy `focus-visible:outline-0` está aplicado a botones, flechas de carrusel y campos de formulario en toda la hoja de estilos. Se elimina esa regla y se define un indicador de foco explícito de al menos 2px con 3:1 de contraste.
- **`prefers-reduced-motion` respetado en todo movimiento.** Los cuatro carruseles actuales, las animaciones de entrada y los contadores deben detenerse por completo cuando el sistema lo pida.
- **Sin autoplay sin control.** Cualquier contenido en movimiento de más de 5 segundos necesita pausa accesible (WCAG 2.2.2). El carrusel de certificaciones a 1 segundo por slide queda prohibido.
- **Objetivos táctiles de 44x44px mínimo.** El sitio se usa con guantes de trabajo.
- **Jerarquía de encabezados correcta**: un solo `<h1>` por página, sin saltos de nivel. Hoy la portada tiene cuatro `<h1>` y la página de Calidad tiene ocho `<h2>` seguidos.
- **Texto alternativo descriptivo en cada certificación.** "AISC certified fabricator seal" y no "project image". Para un usuario de lector de pantalla que audita proveedores, ese alt es el contenido.
