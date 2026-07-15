# Portfolio Website

Next.js portfolio for Kurt Lee Gayao. Static export for GitHub Pages.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Static export to `out/` |
| `npm run preview:export` | Preview the `out/` folder locally |
| `npm run lint` | ESLint |

## Deploy (GitHub Pages)

Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds the static export and deploys to GitHub Pages.

### One-time GitHub setup

1. Open the repo → **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Under **Custom domain**, enter `kurtleeg.work` (must match `public/CNAME`)
4. After DNS validates, enable **Enforce HTTPS**

### DNS (at your registrar)

For apex domain `kurtleeg.work`, add A records to GitHub Pages:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Optional: CNAME `www` → `Kurtly97.github.io`

After the first green Actions run, the site should load at [https://kurtleeg.work](https://kurtleeg.work).
