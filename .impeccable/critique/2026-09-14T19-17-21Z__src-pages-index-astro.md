---
target: todo el sitio apachefabricators
total_score: 11
p0_count: 6
p1_count: 9
timestamp: 2026-09-14T19-17-21Z
slug: src-pages-index-astro
---
# Auditoría de diseño: apachefabricators.com (Astro / tema Biztrox)

Registro: **brand** (sitio de marca B2B industrial). El diseño ES el producto.

## Design Health Score

| # | Heurística | Score | Problema clave |
|---|-----------|-------|----------------|
| 1 | Visibilidad del estado | 1 | `.nav-link.active` se aplica en el HTML pero nunca se estiliza (navigation.css). Ninguna página indica dónde estás. |
| 2 | Correspondencia con el mundo real | 1 | "Cup Of Coffee: 580" como métrica de una empresa de fabricación de acero. Sección "Our Industries" que lee la colección `services`, sección "Quality and Certifications" que muestra fotos de proyectos de marketing. |
| 3 | Control y libertad del usuario | 1 | Carrusel de proyectos con `autoplay delay: 1000` (1 segundo), sin pausa. Sin `prefers-reduced-motion`. 404 sin salida. |
| 4 | Consistencia y estándares | 1 | `red-600`/`red-700`/`gray-200/300/400/50` hardcodeados junto a los tokens `secondary`/`border`/`light`. Tres sistemas de tamaño de h2 conviviendo. |
| 5 | Prevención de errores | 1 | 4 de 6 enlaces del ServiceSidebar apuntan a URLs que no existen. `brochure: "#?"`. |
| 6 | Reconocer antes que recordar | 2 | ProjectCard renderiza solo una imagen: sin título, sin categoría, sin enlace. |
| 7 | Flexibilidad y eficiencia | 1 | El botón "Get A Quote" lleva a /contact, donde no hay formulario. El teléfono es la única vía de conversión. |
| 8 | Estética y diseño minimalista | 2 | Buena intención fotográfica, pero footer con una columna vacía declarada, texto justificado global, lorem ipsum visible. |
| 9 | Recuperación de errores | 0 | 404.astro es una sola imagen: sin encabezado, sin texto, sin enlace a inicio. |
| 10 | Ayuda y documentación | 1 | Se afirman certificaciones sin detallarlas; el folleto descargable no existe. |
| **Total** | | **11/40** | **Trabajo significativo requerido** |

## Audit Health Score (técnico)

| # | Dimensión | Score | Hallazgo principal |
|---|-----------|-------|--------------------|
| 1 | Accesibilidad | 1 | Logo y preloader sin `alt`; 4 `<h1>` en la home; foco eliminado globalmente (`focus-visible:outline-0`). |
| 2 | Rendimiento | 0 | `banner-1.jpg` pesa 20.6 MB. 46.6 MB de imágenes en total. Favicon de 817 KB. |
| 3 | Responsive | 2 | `PageHeader` con `h-[700px]` fijo en móvil; cuerpo de texto a 14px. |
| 4 | Theming | 1 | Tokens definidos en theme.json pero eludidos; clases Tailwind v3 muertas (`bg-opacity-*`), clase inexistente `bg-gray-20`. |
| 5 | Anti-patrones | 2 | Slop de plantilla más que slop de IA: rejillas de tarjetas idénticas, carrusel hero genérico, separador decorativo repetido en cada sección. |
| **Total** | | **6/20** | **Poor (revisión mayor)** |
