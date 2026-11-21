# Portafolio de Jheyder W. Perez Aguinaga

**Tu sitio:** https://jheyderperez.com

Cuando guardas un cambio en `main`, la Action **Publicar sitio** compila el portafolio y lo publica en la rama `gh-pages` en 1 o 2 minutos. Se puede editar desde el navegador, sin instalar nada.

---

## Todo tu contenido está en un solo archivo

**[`src/config.ts`](src/config.ts)**: nombre, título, servicios, publicaciones, proyectos, experiencia, becas, premios, líneas de investigación, educación y redes.

**Para editarlo:** abre el archivo → lápiz (arriba a la derecha) → cambia lo que quieras → **Commit changes**.

> Respeta las comillas, las comas y las llaves. Si se te escapa una, el sitio no se rompe: la publicación falla, ves una marca roja en la pestaña **Actions**, corriges y se publica.

## Cambiar tu foto, tu imagen para redes o un PDF

Los archivos sueltos van en `public/`: `profile.png` (foto), `og.jpg` (la imagen que sale al compartir el link, 1200×630). Reemplázalos con el mismo nombre.

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
