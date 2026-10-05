import type { EngagementModel, SectionCopy, WorkingNorm } from "@/types/content";

/**
 * How Nemaa works alongside a client's team: the collaboration model, not
 * the delivery steps (those are `howWeWork` in about.ts).
 */
export const collaborationHeading: SectionCopy = {
  title: "How we plug into your team",
  // TODO(nemaa): mention engineers inside the client's team here once that model is confirmed.
  lede: "How we fit around the people you already have: a whole system built by us, or work inside a platform you already run.",
};

export const engagementModels: EngagementModel[] = [
  {
    // Backed by the audit platform case study (role: full build).
    title: "We build the whole system",
    body: "We take a system from domain model to production: application, backend, data, and deployment. You stay close to the decisions; we carry the build.",
    confirmed: true,
    projectSlug: "audit-engagement-platform",
  },
  {
    // Backed by the accounting platform case study (role: backend on an existing platform).
    title: "We work inside your platform",
    body: "We add services, integrations, and workflows to a system you already run, following its conventions and its review process.",
    confirmed: true,
    projectSlug: "accounting-platform-services",
  },
  {
    // TODO(nemaa): confirm Nemaa offers this, then set `confirmed: true`.
    title: "Engineers inside your team",
    body: "Our engineers work in your repository, your tracker, and your review process, to your team's standards rather than ours.",
    confirmed: false,
  },
];

export const engagementModelIsReady = (model: EngagementModel) => model.confirmed;

export const workingNorms: WorkingNorm[] = [
  // Derived from the office location; review the wording.
  { term: "Time zone", value: "East Africa Time (UTC+3)" },
  // From howWeWork: decisions and runbooks live next to the code.
  { term: "Handover", value: "Architecture notes, decisions, and runbooks in your repository" },
  // TODO(nemaa): how and how often you report progress, e.g. a weekly demo or a shared channel.
  { term: "Communication", value: null },
  // TODO(nemaa): who owns the code and IP when the engagement ends.
  { term: "Code ownership", value: null },
];

export const workingNormIsReady = (norm: WorkingNorm) => norm.value !== null;
