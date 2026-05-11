# Agora Media

Faithful rebuild of [theagoramedia.com](https://theagoramedia.com/) as a Vite + React + TypeScript app, ready to import into Loveable.

- 39 articles, 36 categories, 76 tags, 13 authors — all hardcoded in `src/content/`.
- Poppins (body) + Syne (display) via Google Fonts.
- Light + dark mode with the original Schematic theme palette.
- Image URLs currently point at `theagoramedia.com/wp-content/uploads/...`. After Supabase Storage migration, run `scripts/rewrite_image_urls.py` from the sister `agora media migration` package to remap.

## Develop

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

## Pages

- `/` — homepage with sticky hero, "The Latest", "Featured", paginated 10/page
- `/events` and `/events/page/:page` — full archive
- `/post/:slug` — single article
- `/category/:slug`, `/tag/:slug`, `/author/:slug`, `/archive/:year/:month`
- `/search?q=...`
- `/contact`, `/privacy`

## Privacy policy

`src/content/privacy.ts` is a scaffold. Paste the body text of each section from
your existing policy at [bioharmonize.org/privacy](https://bioharmonize.org/privacy)
into the corresponding `body` field. Page will render automatically.
