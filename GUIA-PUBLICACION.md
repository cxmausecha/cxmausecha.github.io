# Guía de publicación paso a paso

## 1. Crear la cuenta y el repositorio en GitHub

1. Entra a <https://github.com/signup> y crea la cuenta con el usuario **`cxmausecha`**.
   (Si ya tienes una cuenta con otro nombre, la dirección será `tu-usuario.github.io` y hay que cambiar `site` en `astro.config.mjs`.)
2. Activa la verificación en dos pasos: *Settings → Password and authentication*.
3. Crea un repositorio nuevo **público** llamado exactamente **`cxmausecha.github.io`**, sin README.

## 2. Subir el proyecto

**Opción fácil (sin terminal):** instala GitHub Desktop, *File → Add local repository*, elige la carpeta del proyecto, crea el primer *commit* y pulsa *Publish repository*.

**Opción con terminal:**

```bash
cd cxmausecha.github.io
git init -b main
git add .
git commit -m "Primera versión del sitio"
git remote add origin https://github.com/cxmausecha/cxmausecha.github.io.git
git push -u origin main
```

## 3. Activar GitHub Pages

En el repositorio: *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
En la pestaña *Actions* verás el despliegue. Al terminar (1–2 min) el sitio estará en <https://cxmausecha.github.io>.

## 4. Trabajar en tu computador (opcional pero recomendado)

1. Instala [Node.js LTS](https://nodejs.org) y [VS Code](https://code.visualstudio.com) (con la extensión "Astro").
2. En la carpeta del proyecto: `npm install` y luego `npm run dev`.
3. Abre <http://localhost:4321>: verás los cambios en vivo mientras escribes.

## 5. Redirigir el blog antiguo de Blogger

1. **Respaldo:** en Blogger, *Configuración → Administrar blog → Hacer copia de seguridad del contenido*.
2. Cambia el título del blog y la descripción para que coincidan con el nuevo sitio (*Configuración → Básico*).
3. *Tema → ▼ (junto a "Personalizar") → Editar HTML*. Pega el contenido de `blogger/redireccion-blogger.xml` justo debajo de `<head>` y guarda.
4. Visita <https://tec-progsw.blogspot.com>: debe llevarte al sitio nuevo.
5. Opcional: deja publicada una sola entrada que diga "Este blog se mudó a cxmausecha.github.io" para quien lo vea sin JavaScript.

## 6. Personalizar

- `src/consts.ts`: título, descripción y enlaces (LinkedIn, correo).
- `src/pages/sobre-mi.md`: tu presentación (busca los comentarios ✏️ COMPLETAR).
- `src/styles/global.css`: colores (variables al inicio del archivo).
- Las entradas de ejemplo de `src/content/blog/` son un punto de partida: revísalas, ajústalas a tu estilo o márcalas con `draft: true`.
