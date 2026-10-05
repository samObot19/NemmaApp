export type ServiceSlug =
  | "software-engineering"
  | "fintech-accounting"
  | "ai-systems"
  | "backend-api"
  | "automation";

export interface Service {
  slug: ServiceSlug;
  name: string;
  /** One sentence shown in overviews. */
  summary: string;
  /** Two or three sentences shown on the services page. */
  description: string;
  /** Concrete things Nemaa builds under this service. */
  capabilities: string[];
  /** Technologies most often used for this service. */
  technologies: string[];
}

export type ProjectCategory =
  | "Accounting software"
  | "Fintech systems"
  | "AI applications"
  | "Automation"
  | "Business platforms"
  | "Developer infrastructure";

export type ProjectStatus = "in-production" | "in-development" | "internal";

export interface ArchitectureLayer {
  label: string;
  nodes: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** One sentence for listings. */
  summary: string;
  /** Short paragraph for the case-study overview. */
  overview: string;
  /** Nemaa's role on the engagement, in plain words. */
  role: string;
  /** What was delivered. Short noun phrases; four to five items. */
  scope: string[];
  challenge: string[];
  approach: string[];
  engineering: string[];
  capabilities: string[];
  technologies: string[];
  /**
   * Only set when the result has been verified by Nemaa.
   * Leave undefined rather than estimating.
   */
  outcome?: string[];
  architecture: ArchitectureLayer[];
  /**
   * Copy in this entry was drafted from repository structure, not from a
   * verified brief. Review before publishing.
   */
  reviewBeforePublish: boolean;
}

export interface TechnologyGroup {
  area: string;
  description: string;
  items: string[];
}

export interface Principle {
  title: string;
  body: string;
}

export interface NavItem {
  label: string;
  href: string;
}

/**
 * A fact only Nemaa can supply. `null` until it has been confirmed; never
 * estimated. Content that is still `null` previews in development and is
 * left out of production builds.
 */
export type NeedsInput<T> = T | null;

/** A chapter's heading copy, kept with its content rather than in the component. */
export interface SectionCopy {
  title: string;
  /** Second line of the title, set in the muted tone. */
  qualifier?: string;
  lede: string;
}

export interface Industry extends Principle {
  /** Services this industry's work usually draws on. */
  services: ServiceSlug[];
  /** The case study that shows the work, if one is published. */
  projectSlug?: string;
}

export interface EngagementModel extends Principle {
  /**
   * Whether Nemaa has confirmed it offers this way of working. Unconfirmed
   * models preview in development and stay out of production builds.
   */
  confirmed: boolean;
  /** A case study that shows this way of working, if one is published. */
  projectSlug?: string;
}

export interface Stat {
  label: string;
  /** The figure as it should read, e.g. "12" or "40%". */
  value: NeedsInput<string>;
  /** What was counted and when, e.g. "Counted from deploy logs, September 2026". */
  basis: NeedsInput<string>;
}

export interface WorkingNorm {
  term: string;
  value: NeedsInput<string>;
}

export interface Faq {
  question: string;
  answer: NeedsInput<string>;
  link?: NavItem;
}
