# Junliang Ye — Personal Homepage

Modern personal academic homepage for Junliang Ye (叶俊良).

## Features

- Modern, clean design with smooth animations
- Dark / light theme toggle (auto-detects system preference)
- Responsive layout (mobile, tablet, desktop)
- Publication cards with filtering by research area
- News timeline
- Hero section with particle background
- Built with vanilla HTML/CSS/JS — no build step needed

## Local Preview

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

Then open http://localhost:8000

## Deploy to GitHub Pages

1. Push this repo to GitHub as `<your-username>.github.io`
2. Go to Settings → Pages
3. Select branch `main` / root
4. Your site will be live at `https://<your-username>.github.io/`

## Structure

```
├── index.html          # Main page
├── assets/
│   ├── css/
│   │   └── style.css   # All styles
│   ├── js/
│   │   └── main.js     # Theme toggle, filters, animations
│   └── images/         # Local images (currently using remote URLs)
```
