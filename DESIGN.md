# Design

The visual world for the Nemaa Technology website: **dark studio**. Chosen on 2026-09-28 to replace the earlier light spec-sheet world. Refinements inherit this; a redesign replaces it.

## Direction contract

- **Thesis.** A quiet, dark engineering studio. Depth comes from tone shifts between three navy surfaces and one hairline, never from gradients, glass, or cards nested in cards. It refuses the light SaaS landing page and the neon "AI" look alike.
- **Own world.** Near-black navy base, two raised navy surfaces, white and tinted-grey text, one teal used as light (dots, glows, links, focus). Bricolage Grotesque for the display voice, Geist for everything read or operated, Geist Mono for real data. With the words removed, the page reads as a set of dark panels with a single glowing console.
- **Story.** A visitor who runs a business understands within one viewport what Nemaa builds, sees a real ledger transaction move through a system, and can start a conversation without a form standing in the way.
- **First viewport.** Announcement bar, header, then a headline of up to fifteen characters per line at display size, a lede, two buttons, and below them the full-width posting-pipeline console with a soft teal light behind it.
- **Form.** Stacked hero over a wide console, then a service grid with one lead panel, then work as stacked engagement panels.
- **Finish.** Unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Color

| Token | Value | Use |
|---|---|---|
| background | #0a0f1a | page |
| card | #111827 | raised panels, form fields |
| popover | #172033 | menus, hovered panels |
| foreground | #f4f6fa | text |
| muted-foreground | #a3afc2 | secondary text (8.6:1 on background) |
| border | rgba(255,255,255,0.09) | hairlines |
| border-strong | rgba(255,255,255,0.18) | field borders, hovered panel edges |
| brand | #2dd4bf | links, dots, focus ring, the console's light (10:1 on background) |
| brand-soft | rgba(45,212,191,0.16) | selection, dot glow |
| primary | #ffffff on #0a0f1a | the primary button |
| destructive | #fca5a5 | form errors |

One accent. Teal is light, not paint: it appears as points and glows, never as fills behind text.

## Typography

- **Display voice:** Bricolage Grotesque, weight 600, for the hero headline, page titles, and section titles. Fluid sizes: display `clamp(2.75rem, 1.9rem + 3.8vw, 4.75rem)` at 1.02; h1 `clamp(2.25rem, 1.65rem + 2.6vw, 3.5rem)` at 1.06; h2 `clamp(1.75rem, 1.35rem + 1.8vw, 2.5rem)` at 1.1. Tracking -0.03em to -0.02em.
- **Working voice:** Geist. h3 `clamp(1.1875rem, 1.1rem + 0.4vw, 1.375rem)` 600 at 1.3; lede `clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)` at 1.55 in muted; body 1rem at 1.65; small 0.9375rem at 1.6; label 0.8125rem 500 in muted, sentence case, never all caps.
- **Data voice:** Geist Mono at 0.8125rem with tabular numerals, only for code, identifiers, and figures.
- Navigation and buttons: 0.9375rem, weight 500. Headings balanced; body measure capped at 58ch.

## Layout

Container 1200px, 24px gutters on mobile and 32px on desktop, twelve columns on desktop. Section rhythm 112px on desktop, 72px on mobile. A section opens with a heading row on a shared top hairline: title left, lede right.

The world's one container is the **panel**: 1px hairline, 16.8px radius, card surface. Panels hover to the popover surface with a stronger edge. Panels never nest; the architecture preview inside a project panel sits on the page background, one tone down, and is the only exception.

Grids: services as a six-column grid with the first panel spanning four; work as stacked full-width panels; facts and steps as ruled hairline grids without backgrounds.

## Themes and chapters

Two themes on one token set: dark studio is the default; the light theme keeps the same surfaces, panels, and teal-as-light rule in daylight (background #f6f7fb, card #ffffff, text #0a0f1a, secondary #4b5568, teal #0f766e). The toggle sits in the header and the choice persists per browser. The home page reads as chapters, one topic per screen: each chapter fills the viewport below the header, snaps gently at its start (not under reduced motion), and a right-edge dot navigation marks the chapter in view on desktop. Adapted from a portfolio reference on 2026-09-28.

## Borrowed devices

Adapted from supabase.com on 2026-09-28, translated into this world: feature panels that show a miniature of what the service produces (browser, ledger, extraction, terminal, workflow) instead of an icon; a two-tone heading device where a muted second line qualifies the white first line; a tabbed showcase that switches a large architecture figure; and a one-line closing statement under the feature grid. Not borrowed: customer logos, testimonials, community counts, and code samples, because none of those can be shown truthfully yet.

## Components

- Button: primary white on navy, outline hairline, ghost, link. 44px, 40px compact, 48px large. Focus ring 3px teal, offset 2px. No trailing arrows.
- Console (hero): panel with a header bar in mono and four stages in a row on desktop, stacked on mobile.
- Service glyph: crisp geometric diagram per service, hairline strokes in border-strong with one teal detail.
- Architecture preview and figure: layered rows of labelled boxes.
- Engagement facts: three ruled cells (role, scope, status).
- Brand mark: placeholder geometric N, white with a teal diagonal.

## Motion

One authored moment: the console's stages light left to right on load, 0.22s apart, exponential ease-out from an already-visible state; under reduced motion it renders complete. Everything else is feedback: panel edge and surface on hover at 150ms, the mobile sheet at 200ms in and 150ms out.

## Browser surfaces

Selection in brand-soft. Focus rings teal. Caret teal. Underline offset 4px. Tabular numerals in data. Theme colour #0a0f1a.

## Copy

Plain verbs, sentence case, no filler. Controls name their action. No technology names as decoration: capabilities are described as what gets built, not as a list of tools.
