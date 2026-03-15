# Professional Dispatch — towtruck.cv

Astro static site on Cloudflare Pages. Zero JavaScript output. 95+ PageSpeed.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Deploy to Cloudflare Pages (free)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial"
```

Create a repo on github.com (private is fine), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/towtruck-site.git
git branch -M main
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Go to dash.cloudflare.com → sign up (free)
2. Left sidebar → Workers & Pages → Create → Pages → Connect to Git
3. Select your GitHub repo
4. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click Deploy

### 3. Add your domain

Still in Cloudflare dashboard:

1. Go to Workers & Pages → your project → Custom domains
2. Click "Set up a custom domain"
3. Enter `towtruck.cv`
4. Cloudflare will ask you to add the domain to Cloudflare first

### 4. Point Namecheap DNS to Cloudflare

1. In Cloudflare dashboard → Add a site → enter `towtruck.cv` → select Free plan
2. Cloudflare gives you 2 nameservers (e.g., anna.ns.cloudflare.com, bob.ns.cloudflare.com)
3. In Namecheap → Domain List → Manage → Nameservers section
4. Change from "Namecheap BasicDNS" to "Custom DNS"
5. Enter both Cloudflare nameservers → save
6. Wait 1-24 hours for propagation
7. Back in Cloudflare → Workers & Pages → Custom domains → add `towtruck.cv`
8. SSL is automatic — no config needed

### 5. Redirect towtrucknearme.cv

1. Add `towtrucknearme.cv` to Cloudflare as a separate site (Free plan)
2. Update its Namecheap nameservers the same way
3. In Cloudflare → Rules → Redirect Rules → create rule:
   - When hostname equals `towtrucknearme.cv`
   - Redirect to `https://towtruck.cv` with 301

## Add a New City (5 min)

1. Open `src/lib/cities.js` → add city data following the pattern
2. Create folder: `src/pages/[slug]/index.astro`
3. Paste this in:

```astro
---
import CityPage from '../../components/CityPage.astro';
import { cities } from '../../lib/cities.js';
---
<CityPage city={cities['your-slug']} />
```

4. Push to GitHub → Cloudflare auto-deploys

## Google Ads Setup

- Landing URL for Detroit: `https://towtruck.cv/detroit`
- Conversion tracking: uncomment the gtag block in `src/layouts/Base.astro`
- For phone call conversions: set up in Google Ads → Goals → Conversions → Phone calls

## Structure

```
src/
  layouts/Base.astro        ← HTML shell, all CSS, tracking scripts
  components/CityPage.astro ← Reusable city landing page template
  lib/cities.js             ← All city data, phone number, brand
  pages/
    index.astro             ← Homepage (Detroit)
    detroit/index.astro     ← /detroit
    flint/index.astro       ← /flint
public/
  logo.svg                  ← Your logo
  robots.txt                ← SEO
  _redirects                ← Cloudflare redirect rules
```
