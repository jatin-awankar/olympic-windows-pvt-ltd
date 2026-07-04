# Olympic Windows (B2B Web Portal)

This is the official codebase and deployment documentation for the high-performance Olympic Windows B2B web portal.

---

## 🌟 Core Features & Highlights
* **Zero External Dependencies:** 100% local assets hosted in `/public/images/` for maximum loading performance and offline capability.
* **Next.js App Router Architecture:** Configured for flat static HTML exports (`output: 'export'`) to allow serverless hosting.
* **Structured SEO Markup:** Injected JSON-LD LocalBusiness & Organization schema, breadcrumb list schema, and dynamic product catalog crawlers.
* **Fallback Route Handlers:** Custom `app/not-found.tsx` (404) and `app/error.tsx` (500) routes matching corporate styling standards.
* **Branded Caching Profiles:** Pre-configured `.htaccess` asset expiration rules for ultra-high page speed metrics.

---

## 🛠️ Technology Stack
* **Framework:** Next.js (App Router, Static Export mode)
* **Styling:** Vanilla TailwindCSS
* **Animation:** Framer Motion
* **Iconography:** Lucide React
* **Verification:** TypeScript & ESLint

---

## 📁 Directory Architecture
```text
├── app/                  # Next.js App Routing Pages
│   ├── about/            # Corporate story and mission pages
│   ├── contact/          # Aspect-locked Google Maps and secure forms
│   ├── impact/           # Sustainability, CSR, and closed-loop recycling
│   ├── products/         # Main catalog & specifications
│   │   └── [category]/   # Spec sheets with dynamic Breadcrumb & Product schema
│   ├── projects/         # Master case studies overview
│   │   └── [slug]/       # Township project details & case study schema
│   ├── layout.tsx        # Global layouts & SEO metadataBase configs
│   ├── loading.tsx       # Routing loader transitions
│   ├── sitemap.ts        # Static sitemap.xml generator (statically compiled)
│   ├── robots.ts         # Static robots.txt generator (statically compiled)
│   └── manifest.ts       # Static webmanifest generator (statically compiled)
├── components/           # Reusable UI component libraries
├── public/               # Local images, icons, and sitemaps
```

---

## 🚀 Production Build & Deployment

### 1. Generate Static Export
To compile the site into optimized, flat static HTML assets:
```bash
npm run build
```
This output is saved to the `/out/` folder in the project root directory.

### 2. Live Hosting (Hostinger Upload)
* Compress the contents of the `/out/` directory into a `.zip` file.
* Log into **Hostinger File Manager**.
* Navigate to the root directory (`public_html`) of your domain.
* Upload and extract the `.zip` archive.

---

## 🌐 Production Host Server Configuration (Apache)

To optimize browser caching and force HTTPS security headers, create a `.htaccess` file inside the root folder of the server:

```apache
# 1. Enable Browser Caching (Cache-Control)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# 2. Inject Security Headers
<IfModule mod_headers.c>
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "no-referrer-when-downgrade"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>
```

---

## 🏷️ Corporate Coordinates (Quick Reference)
* **India HQ:** `F11, 12 Balaji Plaza, Khoni - Taloja Bypass Road, Usatane, Maharashtra`
* **London Office:** `UNIT 3A, Northgate Business Centre, Collier Row, Ramford, London, UK`
* **Corporate Email:** `info@olympicwindows.co.in`
