import type { NavItem } from "@/types/content";

/**
 * Site-wide facts. Everything here is safe to edit without touching components.
 * Values marked TODO are placeholders that Nemma should replace before launch.
 */
export const site = {
  name: "Nemma Technology",
  shortName: "Nemma",
  tagline: "Engineering software for modern businesses.",
  description:
    "Nemma Technology is a software development company building accounting and fintech systems, AI applications, automation, and the backend infrastructure behind them.",
  /** TODO: replace with the production domain before launch. */
  url: "https://nemma.example",
  /** TODO: replace with a monitored inbox. */
  email: "hello@nemma.example",
  /** Set to a real endpoint (or form service) to enable message delivery. */
  contactEndpoint: null as string | null,
  /** Office location. `mapQuery` is what the embedded map searches for. */
  address: {
    lines: ["Bole Medhanyalem, Hintsa", "Addis Ababa, Ethiopia"],
    locality: "Addis Ababa",
    country: "ET",
    mapQuery: "Hintsa, Bole Medhanialem, Addis Ababa, Ethiopia",
  },
} as const;

/**
 * Optional notice shown above the navbar. Set to `null` to hide it.
 * Keep it to one honest sentence; it is dismissible per browser session.
 */
export const announcement: {
  id: string;
  text: string;
  label: string;
  href: string;
} | null = {
  id: "careers-open-invitation",
  text: "We\u2019re always interested in meeting strong engineers.",
  label: "Introduce yourself",
  href: "/contact?type=careers",
};

export const navigation: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Get in touch",
    items: [
      { label: "Start a project", href: "/contact?type=project" },
      { label: "Partner with us", href: "/contact?type=partnership" },
      { label: "Introduce yourself", href: "/contact?type=careers" },
    ],
  },
];
