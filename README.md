# CodeTools local static site

This folder is the cleaned local static build.

## Run

Use this folder as the web root:

```bash
cd CodeTools
python3 -m http.server 3001
```

Then open:

- Chinese: http://localhost:3001/zh-cn/
- English: http://localhost:3001/en/

No npm package or Python package is required. The Python command only starts a local static file server.

## Structure

- `zh-cn/`: Simplified Chinese pages.
- `en/`: English pages.
- `_astro/`, `images/`, `fonts/`, `scripts/`, `api/`: static assets used by pages.
- `sw.js`: disabled service-worker cleanup file for old browser caches.

The old flat root-level tool HTML files were intentionally omitted. Tool pages now live under language folders, for example:

- `/zh-cn/tools/char-counter/`
- `/en/tools/char-counter/`
