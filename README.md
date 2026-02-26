# Online Game Site (Next.js + TypeScript)

This project has been migrated from static HTML/JS to **Next.js + TypeScript**.

## Tech Stack

- Next.js (App Router)
- TypeScript
- React

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build / Export

```bash
npm run build
```

This repo is configured with `output: "export"`, so static files are generated in `out/`.

## Routes

- `/` Home game list
- `/policy` Privacy policy
- `not-found` Custom 404 page

## Static Assets

All static assets are served from `public/`:

- `public/assets`
- `public/datas/game_list.json`
- `public/favicon.ico`
- `public/ads.txt`
- site verification files
