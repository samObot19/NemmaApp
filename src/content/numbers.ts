import type { SectionCopy, Stat } from "@/types/content";

export const numbersHeading: SectionCopy = {
  title: "Nemaa by the numbers",
  qualifier: "Counted, not estimated.",
  lede: "Each figure says what was counted and when. Nothing here is rounded up or projected.",
};

/**
 * TODO(nemaa): every value and basis below needs real input. A stat
 * publishes only when both are set, and the chapter stays out of
 * production builds until at least one is. The labels are prompts: rename
 * or replace any of them, but keep the count at 3 or 6 so the grid fills
 * whole rows.
 */
export const stats: Stat[] = [
  // Delivered software
  { label: "Systems in production", value: null, basis: null },
  { label: "Years building financial software", value: null, basis: null },
  // Engineering rigour
  { label: "Production releases in the last 12 months", value: null, basis: null },
  { label: "Automated test coverage on active codebases", value: null, basis: null },
  // Global expertise
  { label: "Countries our clients operate in", value: null, basis: null },
  { label: "Time zones we work across", value: null, basis: null },
];

/** A figure without its basis is an adjective; it does not publish. */
export const statIsReady = (stat: Stat) => stat.value !== null && stat.basis !== null;
