# Product

<!-- impeccable:product-schema 1 -->

> Facts below come from the written brief supplied at project start. Items marked *(inferred)* were not confirmed by a person and should be reviewed by Nemaa before launch.

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui + Lucide React + Motion. Set by the brief.

## Users

- Decision-makers at businesses who need custom software built: founders, operations leads, finance leads, CTOs. They are evaluating whether Nemaa can be trusted with a serious build.
- Engineers considering working at Nemaa.
- Secondary: partners and general enquiries.

## Product Purpose

The company website for Nemaa Technology, a software development company. It presents Nemaa professionally, attracts software development clients, showcases products and engineering work, supports recruitment, and demonstrates experience building accounting, fintech, and business software.

## Positioning

Nemaa builds serious business software: accounting and fintech systems, AI and automation, and the backend infrastructure under them. The site should make one impression: "these people build serious software."

## Operating Context

- Visitors arrive from search, referrals, or outreach and read on laptops and phones during working hours *(inferred)*.
- Contact happens through a form (no delivery backend configured yet) and through direct email/links that Nemaa will supply.

## Capabilities and Constraints

- Service areas: software engineering, AI and intelligent systems, fintech and accounting software, backend and API engineering, automation.
- Technologies in use: Go, Python, FastAPI, TypeScript, React, Next.js, PostgreSQL, Redis, Docker, Azure, AWS, LangChain, LangGraph, vector databases, LLM APIs.
- Routes: /, /services, /work, /work/[slug], /about, /careers, /contact.
- Contact form is frontend-only until a delivery service is wired up. The UI must not claim messages are sent.
- No verified job openings. Careers page uses an open invitation instead of listings.
- Nemaa must not be described as owning, operating, or partnering with Count, KBF, or any other company.

## Brand Commitments

- Name: Nemaa Technology (also "Nemaa").
- No official logo yet. The site uses a clearly temporary geometric mark that must be trivially replaceable.
- Voice: plain, concrete, engineering-minded. No "leverage cutting-edge technologies" marketing filler.
- Suggested palette foundation (not mandatory): dark #0B1220, text #0F172A, teal #14B8A6, blue #2563EB, background #F8FAFC, borders #E2E8F0, muted #64748B. Typography: Inter, Geist, or a comparable clean sans.

## Evidence on Hand

- Engineering work exists in sibling repositories (an accounting-platform partner API, an audit platform for an advisory firm, and an internal Telegram-first attendance tool). Case studies describe these at a high level only, with no client names, metrics, or confidential details. Each case study in `src/content/projects.ts` is flagged for review before publishing.
- Absent, and never to be fabricated: client names, partnerships, testimonials, awards, certifications, revenue, user counts, employee counts, uptime, locations, company history, team members, project metrics.

## Product Principles

1. Clarity over volume: every section must tell the visitor something concrete about what Nemaa builds.
2. Trust is earned by specificity: name the systems, the stacks, the problems solved, never the adjectives.
3. Restraint is the premium signal: one accent, one authored motion moment, quiet surfaces.
4. Truthful by construction: content lives in typed files with review flags; nothing unverifiable ships as fact.
5. Maintainable for the next engineer: content separate from presentation, small components, replaceable brand assets.

## Accessibility & Inclusion

WCAG 2.2 AA target: 4.5:1 body contrast, keyboard-operable navigation and forms, visible focus, reduced-motion alternative for the single authored animation, semantic landmarks and heading order.
