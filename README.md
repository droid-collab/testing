# WISMUN 2K26 — Witty International Model United Nations

React website for WISMUN 2K26, the Sixth Edition of the Witty International Model United Nations.

---

## ⚠️ One-time setup before deploying

Open `package.json` and edit this line:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username and `YOUR-REPO-NAME` with the exact name of your GitHub repository.

**Example:**
```json
"homepage": "https://wismunofficial.github.io/wismun-website"
```

---

## Deploying to GitHub Pages

### Option A — Automatic (recommended)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`).
Every time you push to `main`, it builds the site and deploys it automatically.

**Steps:**
1. Edit `homepage` in `package.json` (see above)
2. Push your code to GitHub
3. Go to your repo on GitHub → **Settings** → **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Set the branch to `gh-pages` and folder to `/ (root)` → click **Save**
6. Wait ~1 minute → your site will be live at your homepage URL

From now on, just push to `main` and the site updates automatically.

---

### Option B — Manual deploy

Run these commands in your terminal:

```bash
npm install
npm run deploy
```

Then on GitHub → Settings → Pages → set source to `gh-pages` branch → Save.

---

## Local development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`

---

## Project structure

```
mun-website/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← Auto-deploy on push to main
├── public/
│   └── index.html
├── src/
│   ├── App.js                ← HashRouter (required for GitHub Pages)
│   ├── index.js
│   ├── index.css             ← Global styles & design tokens
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   └── Footer.js / .css
│   └── pages/
│       ├── Home.js / .css
│       ├── Register.js / .css
│       ├── Brochure.js / .css
│       └── Contact.js / .css
├── package.json              ← Set homepage here before deploying
└── README.md
```

## Why HashRouter?

GitHub Pages is a static file host — it can only serve files that physically exist.
`BrowserRouter` uses URLs like `/register` which GitHub Pages can't resolve (it returns a 404 because there's no `register/index.html` file).

`HashRouter` uses `/#/register` — everything after `#` is handled by the browser, not the server, so GitHub Pages works perfectly.

---

WISMUN 2K26 · Witty International Model United Nations · Sixth Edition
