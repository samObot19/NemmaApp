# Nemaa Technology website

Company website for Nemaa Technology, built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, shadcn/ui, Lucide, and Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm run start
```

## Where things live

| Path | What it holds |
|---|---|
| `src/content/site.ts` | Name, tagline, URL, email, navigation, announcement bar, contact endpoint |
| `src/content/services.ts` | The five service areas |
| `src/content/projects.ts` | Case studies (see the review flag below) |
| `src/content/technologies.ts` | The capability matrix |
| `src/content/about.ts`, `careers.ts` | Philosophy, culture, openings |
| `src/content/social-proof.ts` | Client logos and testimonials (empty until verified; sections stay hidden) |
| `src/components/layout` | Navbar, mobile menu, footer, brand mark |
| `src/components/shared` | Heading rows, definition rows, tags, hairline grid, CTA band |
| `src/components/home`, `services`, `work`, `contact` | Page sections |
| `src/lib/contact.ts` | Form validation and the delivery boundary |
| `PRODUCT.md`, `DESIGN.md` | Product truth and the visual system (Impeccable) |

Content is data; components only render it. Editing copy never requires touching a component.

## Before launch

1. **Domain and inbox.** `src/content/site.ts` still carries `nemaa.example` placeholders for `url` and `email`. They appear in the footer, contact page, metadata, sitemap, and robots.
2. **Case studies.** Entries in `src/content/projects.ts` with `reviewBeforePublish: true` were drafted from the structure of the engineering work, not from a verified brief. Review the wording, then flip the flag. Add an `outcome` only once it is verified.
3. **Contact delivery.** The form validates on the client only. With `site.contactEndpoint` set to `null` the submit button reads "Send by email" and opens a prefilled email instead. Point `contactEndpoint` at a route handler or form service that accepts a JSON `ContactPayload` to enable real delivery.
4. **Social proof.** `src/content/social-proof.ts` holds client logos and testimonials. Both lists are empty, so the "Businesses we have built for" band and the "What clients say" section do not render. Add verified entries (with permission) and they appear on the home page automatically.
5. **Office map.** The contact page embeds a Google map for `site.address.mapQuery`. Check that the pin lands on the right building; if not, replace `mapQuery` with a more exact query or the coordinates from Google Maps (for example `8.9930,38.7890`).
6. **Announcement bar.** `announcement` in `src/content/site.ts` controls the notice above the navbar. Set it to `null` to remove it.
7. **Logo.** The mark in `src/components/layout/brand-mark.tsx` and `src/app/icon.svg` is a temporary geometric placeholder. Replace both when the official logo exists; the Open Graph image in `src/app/opengraph-image.tsx` draws the same mark inline.

## Theme and home chapters

The site ships a dark theme by default and a light theme behind the header toggle (next-themes, class strategy, persisted per browser). Both themes come from the token sets in `src/app/globals.css`. Every page is composed of chapters (`src/components/home/chapter.tsx`), one idea per screen: each chapter fills the viewport, eases in when scrolled to (`reveal.tsx`), snaps at its start (firmly on desktop, gently on phones), and a dot navigation on desktop marks the chapter in view. The service screens live in `src/components/home/service-chapters.tsx`; each page declares its chapter list next to its sections (see `src/app/page.tsx`, `src/app/services/page.tsx`, and the others).

## Design notes

The visual system is documented in `DESIGN.md`. In short: light surfaces with two dark bands, one teal accent, Geist for text and Geist Mono only for real code and data, structure carried by hairline rules and aligned columns rather than cards, and a single authored motion moment in the hero (rendered in its final state under `prefers-reduced-motion`).
