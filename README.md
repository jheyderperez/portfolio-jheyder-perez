# Portafolio de Jheyder W. Perez Aguinaga

**Tu sitio:** https://jheyderperez.com

Cuando guardas un cambio en `main`, la Action **Publicar sitio** compila el portafolio y lo publica en la rama `gh-pages` en 1 o 2 minutos. Se puede editar desde el navegador, sin instalar nada.

---

## Todo tu contenido está en un solo archivo

**[`src/config.ts`](src/config.ts)**: nombre, sobre mí, líneas de investigación, publicaciones, presentaciones, proyectos (de investigación y de código), coautores con su página, docencia, educación, experiencia, becas, premios, técnicas, idiomas y redes.

**Para editarlo:** abre el archivo → lápiz (arriba a la derecha) → cambia lo que quieras → **Commit changes**.

> Respeta las comillas, las comas y las llaves. Si se te escapa una, el sitio no se rompe: la publicación falla, ves una marca roja en la pestaña **Actions**, corriges y se publica.

## Dos idiomas: español e inglés

La web tiene cada pestaña en español (`/`, `/publicaciones/`, `/proyectos/`, `/docencia/`, `/cv/`) y en inglés (`/en/`, `/en/publications/`, `/en/projects/`, `/en/teaching/`, `/en/cv/`). El botón **ES | EN** de arriba cambia a la misma pestaña en el otro idioma.

En `src/config.ts`, cada texto que cambia según el idioma se escribe así:

```ts
title: { es: "Ingeniero Civil & Investigador", en: "Civil Engineer & Researcher" },
```

Lo que es igual en los dos idiomas (nombres, títulos de artículos, instituciones) va como texto simple: `"Natural Hazards"`. Si escribes solo el español, la versión en inglés lo mostrará en español hasta que agregues la traducción.

Los textos fijos de la interfaz (nombres de pestañas, títulos de sección) están en `src/i18n.ts`.

## Agregar un proyecto de código

En `src/config.ts`, bloque `codeProjects`: agrega uno por proyecto con el nombre, la descripción (en los dos idiomas), los lenguajes y el link a GitHub (hay un ejemplo comentado). La sección «Proyectos de código» aparece sola cuando agregas el primero.

Para que el nombre de un coautor enlace a su página, agrégalo en `coauthors` tal como aparece en la lista de autores (p. ej. `"Moya L.": "https://..."`).

## Cambiar tu foto, tu imagen para redes o un PDF

Los archivos sueltos van en `public/`: `profile.jpg` (foto), `og.jpg` (la imagen que sale al compartir el link, 1200×630). Reemplázalos con el mismo nombre.

El CV que descarga la pestaña CV es `public/cv.pdf`: para actualizarlo, sube tu nuevo PDF con ese mismo nombre.

## Colores

`accentColor` y `highlightColor` al inicio de `src/config.ts`.

## Si prefieres trabajar en tu computadora

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## No borres

- `public/CNAME`: tiene tu dominio. Sin él, jheyderperez.com deja de apuntar a tu sitio.
- `public/.nojekyll`: sin él GitHub ignora la carpeta de estilos.
- `.github/workflows/deploy.yml`: es la que publica.

Nunca guardes nada solo en `gh-pages`: se reescribe en cada publicación.

---

Hecho por [Cofoundy](https://cofoundy.dev).
