# cxmausecha.github.io

Sitio personal y blog de ciberseguridad de **Claudia Ximena Muñoz Ausecha**, hecho con [Astro](https://astro.build) y publicado en GitHub Pages.

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala las dependencias (solo la primera vez) |
| `npm run dev` | Abre el sitio en `http://localhost:4321` y lo recarga al guardar |
| `npm run build` | Genera el sitio final en `dist/` |
| `npm run preview` | Muestra localmente el sitio generado |

## Estructura

```
src/
├── content/
│   ├── blog/            ← entradas del blog (.md o .mdx)
│   └── laboratorios/    ← prácticas numeradas
├── pages/               ← páginas (inicio, sobre-mi, aviso-etico, etc.)
├── components/          ← Callout, IocCard, PostCard…
├── layouts/             ← plantillas de página
├── styles/global.css    ← colores y estilos
└── consts.ts            ← título del sitio y redes sociales
public/                  ← favicon, robots.txt, security.txt
.github/workflows/       ← publicación automática en GitHub Pages
```

## Publicar una entrada nueva

1. Crea un archivo en `src/content/blog/`, por ejemplo `mi-entrada.md`.
2. Empieza con este encabezado:

```md
---
title: 'Título de la entrada'
description: 'Resumen de una o dos líneas.'
pubDate: 2026-11-20
categoria: hacking-etico   # hacking-etico | analisis-de-malware | auditoria-informatica | seguridad-en-redes
tags: [nmap, reconocimiento]
draft: false              # true = no se publica todavía
---

Aquí va el contenido en Markdown…
```

3. Guarda, haz *commit* y *push*. En un par de minutos estará publicada.

Para usar los recuadros de aviso o las fichas de IOC, usa la extensión `.mdx` (mira `analisis-estatico-malware-primeros-pasos.mdx` como ejemplo).

## Seguridad

- Sitio 100 % estático: sin base de datos ni panel de administración.
- Content Security Policy generada automáticamente por Astro (`security.csp`).
- `/.well-known/security.txt` para reportes de vulnerabilidades.
- **No subir muestras de malware al repositorio**: solo hashes e IOC.
