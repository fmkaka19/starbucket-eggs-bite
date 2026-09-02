# Savory Table — Starbucks Egg Bites Recipe Homepage

Savory Table is a modern, production-ready recipe publication homepage optimized around the target SEO keyword **`starbucks egg bites recipe`**. Built strictly using native **HTML5**, **CSS3**, and **Vanilla JavaScript** without third-party frameworks or dependencies.

---

## 🌟 Key Features

- **Primary Target Keyword Optimization**: `starbucks egg bites recipe` strategically placed in title tags, meta description, single `<h1>` heading, Open Graph metadata, and JSON-LD schemas (`WebSite` & `Organization`).
- **Original Editorial Branding**: Warm food-focused editorial aesthetic using Google Fonts (*Playfair Display* for headings and *Inter* for body copy) with custom SVG wordmark and favicon.
- **Dynamic Recipe Engine**: Client-side JavaScript data model (`recipes` array) that dynamically renders popular and latest recipe cards.
- **Interactive Live Search**: Real-time client-side filter matching recipe titles, categories, descriptions, and keywords with empty and no-results UI states.
- **Accessible Mobile Navigation**: Sticky header with responsive drawer navigation, ARIA attributes, focus trap, ESC key close, and backdrop blur.
- **Newsletter Subscription**: Frontend email validation with live error feedback and confirmation states.
- **Zero Horizontal Overflow**: Fully responsive design across all breakpoints (1280px desktop, 768px tablet, down to 375px mobile).

---

## 📁 File Structure

```
starbucket egg bike/
├── index.html                  # Semantic HTML5 Homepage
├── sitemap.xml                 # Technical SEO XML Sitemap (Sitemap 0.9 & Image extensions)
├── robots.txt                  # Search Engine Crawler Directives & Sitemap reference
├── css/
│   └── style.css               # Design System, Custom Properties & Fluid Typography
├── js/
│   └── script.js               # Recipe Engine, Search Modal & UI Interactions
├── assets/
│   ├── images/                 # High-resolution WebP/JPG recipe photography
│   │   ├── starbucks-egg-bites.jpg
│   │   ├── cottage-cheese-egg-bites.jpg
│   │   ├── crispy-breakfast-potatoes.jpg
│   │   ├── fluffy-pancakes.jpg
│   │   ├── blueberry-muffins.jpg
│   │   ├── chicken-alfredo.jpg
│   │   ├── about-kitchen.jpg
│   │   └── category-*.jpg
│   ├── icons/                  # Line SVG icons
│   └── logo/
│       ├── logo.svg            # Savory Table SVG Brand Wordmark
│       └── favicon.svg         # SVG Favicon Icon
└── README.md                   # Technical Documentation
```

---

## 🚀 How to Run Locally

Because this project relies exclusively on native web standards:

1. Open `index.html` directly in any modern web browser (Chrome, Safari, Firefox, Edge).
2. Alternatively, serve using any lightweight HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node npx
   npx serve .
   ```
3. Open `http://localhost:8000` in your browser.

---

## 🎯 SEO & Accessibility Compliance

- **Single H1 Tag**: Exactly one `<h1>` element on the entire page targeting `Starbucks Egg Bites Recipe You Can Make at Home`.
- **Heading Hierarchy**: Clean sequential tree (`H1 -> H2 -> H3`).
- **Semantic Tags**: Utilizes `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Keyboard Navigation**: Interactive elements support `:focus-visible` outline rings and `Esc` key modal closures.
- **Responsive Touch Targets**: Buttons and touch controls maintain a minimum size of `44px x 44px`.
- **Performance Optimized**: Image dimensions declared explicitly (`width` and `height`), LCP image pre-positioned, and below-the-fold assets lazy-loaded.
