# Professional Dispatch — Heavy Equipment Hauling
## towtruck.cv

Astro static site on Cloudflare Pages. Zero JavaScript. Fast load. Mobile-first click-to-call.

## Pages

- `/` — SE Michigan statewide (homepage)
- `/oakland-county` — Oakland County (Novi, Troy, Rochester Hills, South Lyon)
- `/brighton` — Brighton & Livingston County
- `/ann-arbor` — Ann Arbor & Washtenaw County
- `/canton` — Canton, Plymouth & Western Wayne

## Deploy

This replaces the existing towtruck.cv site. Push to the same GitHub repo — Cloudflare auto-rebuilds.

```bash
# In your existing repo directory:
# 1. Replace all files with these new ones
# 2. Commit and push
git add .
git commit -m "pivot to heavy equipment hauling"
git push
```

Cloudflare Pages auto-deploys on push. No config changes needed — same build settings (Astro, dist output).

## Add a New City

1. Add city data to `src/lib/cities.js`
2. Create `src/pages/[slug]/index.astro`:

```astro
---
import CityPage from '../../components/CityPage.astro';
import { cities } from '../../lib/cities.js';
---
<CityPage city={cities['your-slug']} />
```

3. Push to GitHub

## Google Ads Tracking

Uncomment the gtag block in `src/layouts/Base.astro` and replace `AW-XXXXX` with your Google Ads tag ID. Your existing tag ID from the towing campaign should work — just update the conversion action.

---

# GOOGLE ADS CAMPAIGN PLAN — Heavy Equipment Hauling

## Campaign Structure

**Campaign Name:** Heavy Equipment Hauling - Michigan
**Campaign Type:** Search
**Bid Strategy:** Maximize Clicks (switch to Maximize Conversions after 15+ conversions)
**Daily Budget:** $40-60/day to start (heavy haul CPCs are lower than consumer towing)
**Networks:** Search only (no Display)

## Geographic Targeting — The Construction Belt

**Phase 1 (Launch):**
40-mile radius centered on Brighton, MI (I-96 / US-23 intersection).
This covers the entire SE Michigan construction corridor:
- Oakland County — Novi, Troy, Rochester Hills, South Lyon, Commerce Twp
- Livingston County — Brighton, Howell, Hartland (heavy subdivision activity)
- Washtenaw County — Ann Arbor, Saline, Dexter
- Western Wayne — Canton, Plymouth, Northville
- Parts of Macomb — Shelby Twp, Washington Twp

This is where subdivision builders (Toll Brothers, Pulte, MI Homes, Lombardo)
are actively running SkyTraks and heavy equipment on job sites daily.

**Phase 2 (after 30 days with data):**
Expand radius to 60 miles or add Macomb / St. Clair county targeting.

**Phase 3:**
All of Lower Michigan.

## Ad Groups & Keywords

### Ad Group 1: Heavy Equipment Hauling (Broad)
Keywords (phrase match):
- "heavy equipment hauling"
- "heavy equipment transport"
- "equipment hauling service"
- "heavy haul trucking"
- "equipment moving service"
- "machinery hauling"
- "heavy equipment shipping"

### Ad Group 2: Construction Equipment (Specific)
Keywords (phrase match):
- "construction equipment hauling"
- "excavator transport"
- "backhoe hauling"
- "dozer transport"
- "skid steer hauling"
- "construction equipment delivery"

### Ad Group 3: Telehandler / SkyTrak (Niche)
Keywords (phrase match):
- "skytrak transport"
- "telehandler hauling"
- "telehandler transport"
- "forklift transport"
- "boom lift hauling"
- "scissor lift transport"
- "aerial lift hauling"

### Ad Group 4: Heavy Recovery
Keywords (phrase match):
- "heavy equipment recovery"
- "machinery recovery service"
- "stuck equipment recovery"
- "heavy tow recovery"
- "equipment breakdown recovery"
- "overturned equipment recovery"

### Ad Group 5: Location-Specific
Keywords (phrase match):
- "heavy equipment hauling michigan"
- "equipment hauling detroit"
- "heavy haul flint michigan"
- "equipment transport southeast michigan"
- "heavy hauling near me"

## Negative Keywords (Add Immediately)

- jobs, hiring, career, salary, CDL, driver, training, indeed, ziprecruiter
- for sale, buy, purchase, dealer, auction, used, rental, rent
- toy, game, simulator, video, app, model
- DIY, how to, tutorial
- insurance, claim, accident, lawyer
- free, cheap, discount, coupon
- class, course, school, certification, license
- parts, repair, mechanic, manual
- international, overseas, export, import (you're Michigan-only)

## Ad Copy

### Ad Group 1 Headlines (max 30 chars each):
- Heavy Equipment Hauling MI
- Michigan Heavy Haul Service
- Equipment Transport - Call Now
- Hydraulic Recovery Trailers
- Up to 164,000 lbs Capacity
- Owner-Operated Fleet
- DOT Compliant & Insured
- Free Quotes - Call Today
- 7 Days a Week Service

### Descriptions (max 90 chars each):
- Heavy equipment hauling across Michigan. Owner-operated. No middleman. Call for a free quote.
- Construction equipment, SkyTraks, telehandlers & machinery. Hydraulic recovery available.
- Michigan DOT compliant. Fully insured & bonded. Direct pricing — we own the equipment.
- From excavators to oversize loads. Up to MI max weight. Call (810) 545-4201 for a quote.

### Ad Group 3 Headlines (SkyTrak niche):
- SkyTrak Transport Michigan
- Telehandler Hauling Service
- We Know SkyTraks — We Run Them
- Attachments & Man Boxes Too
- Boom Lift & Scissor Lift Haul

## Extensions

**Call Extension:** (810) 545-4201
**Callout Extensions:**
- Owner-Operated
- Fully Insured
- Michigan DOT Compliant
- Hydraulic Recovery
- Free Quotes

**Structured Snippets:**
- Service catalog: Equipment Hauling, SkyTrak Transport, Heavy Recovery, Oversize Loads
- Types: Excavators, Telehandlers, Dozers, Backhoes, Forklifts, Boom Lifts

**Sitelink Extensions:**
- "Oakland County" → /oakland-county
- "Brighton & Livingston" → /brighton
- "Ann Arbor Area" → /ann-arbor
- "Canton & Plymouth" → /canton

## Conversion Tracking

**Primary conversion:** Phone call (60+ seconds)
Set up: Google Ads → Goals → Conversions → Phone calls → Calls from ads

**Secondary conversion:** Click-to-call on website
Set up: Google Tag → track clicks on tel: links

## Budget Math

- Estimated CPC: $3-10 for heavy equipment hauling keywords (much less competitive than consumer towing)
- At $50/day = ~5-15 clicks/day
- Expected call rate: 15-25% (B2B searchers call more than consumers)
- That's 1-4 qualified calls/day
- At $1,000-3,000 average job value, 1 converted job per week = $4,000-12,000/month revenue
- Breakeven is fast if you close 1-2 jobs per week

## Week 1 Checklist

1. [ ] Push site update to GitHub (auto-deploys to Cloudflare)
2. [ ] Verify towtruck.cv loads with new heavy haul content
3. [ ] In Google Ads: pause existing towing campaign
4. [ ] Create new campaign with the structure above
5. [ ] Add negative keywords (critical — do this first)
6. [ ] Set up phone call conversion tracking (60 sec minimum)
7. [ ] Add call extension with (810) 545-4201
8. [ ] Add callout extensions and sitelinks
9. [ ] Set daily budget to $40-50
10. [ ] Set location targeting: 40-mile radius centered on Brighton, MI
11. [ ] Submit campaign for review
12. [ ] Monitor search terms report after 48 hours — add negatives for junk queries
