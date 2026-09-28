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
  /** Concrete things Nemma builds under this service. */
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
  challenge: string[];
  approach: string[];
  engineering: string[];
  capabilities: string[];
  technologies: string[];
  /**
   * Only set when the result has been verified by Nemma.
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
