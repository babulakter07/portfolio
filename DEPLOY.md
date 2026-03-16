# Portfolio – GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Set to **Public**
4. Click **Create repository**

## Step 2: Initialize Git & Push

```bash
cd D:/MyProject/PortFolio

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/rjbabul/portfolio.git
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch.

## Step 4: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `gh-pages` → `/root`
4. Click **Save**

## Live URL

After ~2 minutes your portfolio will be live at:

```
https://rjbabul.github.io/portfolio/
```

## Future Updates

Every time you make changes, just run:

```bash
npm run deploy
```

---

## Notes

- The `vite.config.js` base is set to `/portfolio/` matching the repo name
- The `homepage` in `package.json` is set to `https://rjbabul.github.io/portfolio`
- Profile photo is served from `public/profile.jpg`
- Award certificate is embedded directly from Google Drive
