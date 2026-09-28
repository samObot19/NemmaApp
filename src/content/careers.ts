import type { Principle } from "@/types/content";

export interface JobOpening {
  title: string;
  team: string;
  location: string;
  type: string;
  href: string;
}

/**
 * Verified openings only. When empty, the careers page shows an open
 * invitation instead of a list.
 */
export const openings: JobOpening[] = [];

export const culture: Principle[] = [
  {
    title: "Small team, real ownership",
    body: "Engineers own features from the data model to the interface, and see them used by real businesses.",
  },
  {
    title: "Serious domains",
    body: "Accounting, payroll, and audit are unforgiving. The work rewards care, and the systems you build are relied on.",
  },
  {
    title: "Modern tools, boring reliability",
    body: "Modern languages, relational databases, and language-model tooling, used with the discipline that financial software demands.",
  },
  {
    title: "Learning is part of the job",
    body: "Reviews are thorough and kind. Architecture decisions are written down and discussed, not handed down.",
  },
];

export const whatToExpect: string[] = [
  "Work across backend services, web applications, and AI systems rather than one narrow slice.",
  "A codebase with tests, migrations, and documentation that you are expected to keep that way.",
  "Direct contact with the people who use what you build.",
  "Code review as the main way we teach and learn.",
];

export const typesOfWork: string[] = [
  "Ledger and payroll systems where correctness is the product",
  "Partner APIs and integrations with third-party platforms",
  "Retrieval and agent workflows over business documents",
  "Internal tools that remove manual operational work",
  "Infrastructure, migrations, and continuous integration",
];
