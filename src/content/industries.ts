import type { Industry, SectionCopy } from "@/types/content";

export const industriesHeading: SectionCopy = {
  title: "Industries we work in",
  qualifier: "Where our systems run.",
  lede: "We go deep in a few domains rather than wide across many. Each one here is backed by work we have delivered.",
};

/**
 * Only industries backed by a published case study. Nemaa Pulse is an
 * internal tool, so it does not count as an industry served.
 *
 * TODO(nemaa): add the other industries you have delivered for. Each entry
 * needs a short, concrete description of the work; link a case study when
 * one is published. The grid reads best with 2, 3, 4, or 6 entries.
 */
export const industries: Industry[] = [
  {
    title: "Accounting and audit",
    body: "Audit engagements run end to end: evidence collection, sign-offs, and an event log that holds up to review, connected to the client's accounting platform.",
    services: ["fintech-accounting", "software-engineering"],
    projectSlug: "audit-engagement-platform",
  },
  {
    title: "Financial software platforms",
    body: "Partner-facing APIs, payroll pay schedules, document ingestion, and third-party integrations inside a business accounting platform.",
    services: ["fintech-accounting", "backend-api"],
    projectSlug: "accounting-platform-services",
  },
];
