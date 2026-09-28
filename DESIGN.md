# Design

The visual world for the Nemma Technology website. Refinements inherit this; a redesign replaces it.

## Concept: the spec sheet

Nemma builds ledgers, APIs, and audit trails: systems where alignment and precision are the product. The site borrows that vernacular. Structure is carried by hairline rules and aligned columns, the way a technical specification or a ledger lays out information, rather than by cards, gradients, or decorative panels. With every word removed the page should still read as a carefully set document.

What this refuses: the SaaS card kit (identical rounded cards with icon, heading, and text), gradient washes, glass panels, section eyebrows, section numbering where nothing is sequential, a logo wall, and a fade-and-rise entrance on every section.

## Color

Light surfaces by default. The audience reads during working hours on laptops and phones; dark is reserved for two focal bands (the hero's system panel and the closing call to action) so it registers as depth rather than a theme.

| Token | Value | Use |
|---|---|---|
| ink | #0B1220 | dark bands, primary buttons, display text on dark |
| foreground | #0F172A | body and heading text on light |
| muted-foreground | #475569 | secondary text on light (7.4:1 on background) |
| background | #F8FAFC | page |
| surface | #FFFFFF | raised panels, form fields |
| border | #E2E8F0 | hairlines on light |
| border-strong | #CBD5E1 | field borders, table rules that need to read |
| accent | #0F766E | links, active states, marks on light (5.9:1 on white) |
| accent-bright | #2DD4BF | the same accent on dark bands only |
| accent-soft | #CCFBF1 | selection, subtle highlight fills |
| ink-muted | #94A3B8 | secondary text on dark bands (tinted, never pure gray) |
| ink-border | rgba(255,255,255,0.12) | hairlines on dark bands |
| destructive | #B91C1C | form errors |

One accent. Blue from the brief's suggestion is dropped; two accents on a restrained page compete.

## Typography

Geist (variable) for everything set in words. Geist Mono only for things that are genuinely code or data: request payloads, technology identifiers, table figures. Mono is never a costume for "technical".

Scale (desktop / mobile), tracking in em:

- display: 3.5rem / 2.375rem, weight 600, tracking -0.025, line-height 1.05
- h1: 2.75rem / 2rem, weight 600, tracking -0.02, line-height 1.1
- h2: 2rem / 1.625rem, weight 600, tracking -0.02, line-height 1.15
- h3: 1.25rem / 1.125rem, weight 600, line-height 1.3
- body-lg: 1.125rem, weight 400, line-height 1.6
- body: 1rem, line-height 1.6
- small-plus: 0.9375rem, line-height 1.6 (secondary paragraphs, lists, footer)
- small: 0.875rem, line-height 1.5
- mono-sm: 0.8125rem, tabular numerals

Headings are balanced (text-wrap: balance). Body measure is capped at 58ch, about 75 characters. No all-caps labels. Sentence case throughout.

## Layout

Container 1200px with 24px gutters on mobile and 32px on desktop. Twelve-column grid on desktop; sections are left-aligned, never centered stacks, except the closing call to action.

Section rhythm: 96px vertical on desktop, 64px on mobile. A section opens with a heading row: heading on the left, an optional one-line lede on the right, both sitting on a shared top hairline. Content follows as rows separated by hairlines, or as a two-column definition list (term left, definition right). Content blocks never carry a bottom rule; the next heading row or dark band is the boundary, so two rules never stack with dead space between them.

Radius: 6px on controls, 10px on panels. Pills only for small tags. Elevation is declared once: hairline borders on light, no shadows except the raised system panel in the hero (offset 0 24px, blur 48px, ink at 18%).

## Components

- Button: primary is ink with white text; on dark bands it inverts to white with ink text. Secondary is a hairline-bordered surface button. Ghost is text with an underline offset of 4px. Height 44px, 40px in compact contexts. Focus ring 2px accent, offset 2px. Labels name the action; no trailing arrow icons.
- Tag: mono-sm, hairline border, 4px radius, used for technology identifiers.
- Definition row: grid of 4/8 columns, term as a heading, definition in body with an optional list of capabilities. No icons beside terms; the rule and the column carry the structure.
- Hairline grid: two or three columns of short statements separated by real borders, first cell on the container edge, no bottom rule on the last row. Numbered only for a real sequence (the three working steps).
- Hairline heading row: shared across all pages.
- System diagram: crisp SVG geometry (rectangles, connectors, labels), never illustration.
- Service glyph: one small geometric diagram per service (browser and database, ledger columns, retrieval into a model, services with a queue, a pipeline with a branch), set in the term column of the definition row, hairline strokes with one accent. Decorative and hidden from assistive technology.
- Architecture preview: a compact, non-interactive version of the case-study architecture figure used as the visual on project rows in place of screenshots.
- Announcement bar: one sentence on the soft accent surface above the navbar, dismissible for the session.
- Services menu: the navbar's Services item opens a hairline panel listing the five areas with one-line summaries.
- Brand mark: a placeholder geometric N built from two parallel bars and a diagonal, 24px in the navbar, 20px in the footer. Component is `BrandMark` and is the only thing to swap when the real logo arrives.

## Motion

One authored moment: on the home hero, the system diagram draws its connectors and the request token travels through the stages once, 1.2s total, exponential ease-out, starting from an already-visible default state. Everything else is interaction feedback: hover states at 150–200ms, the mobile menu at 200ms, focus instantly. Under prefers-reduced-motion the diagram renders in its final state and the menu cross-fades.

## Browser surfaces

Selection is accent-soft on light and accent at 35% on dark. Focus rings use the accent. Underline offset 4px, thickness 1px. Figures in tables and the diagram use tabular numerals. The caret color follows the accent.

## Copy

Plain verbs, sentence case, no filler. Controls name their action ("Start a project", "Send message"). Errors name the problem and the fix. Nothing that cannot be verified is stated as fact.
