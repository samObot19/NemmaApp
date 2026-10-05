import type { Principle, SectionCopy } from "@/types/content";

/**
 * Why clients choose Nemaa.
 *
 * Drafted from copy already on the site (About, the hero, the services
 * overview); review before launch. Each reason is something a client can
 * check in the work, never a comparison with other firms.
 */
export const whyHeading: SectionCopy = {
  title: "Why Nemaa",
  qualifier: "What you can hold us to.",
  lede: "Commitments you can check in our case studies, not adjectives on a page.",
};

export const reasons: Principle[] = [
  {
    title: "Financial correctness is our home ground",
    body: "Ledgers that balance, payroll that runs on schedule, audit trails that hold up. The work we have in production is accounting and audit software, so we start from the rules, not the screens.",
  },
  {
    title: "One team from interface to infrastructure",
    body: "The application, the API, the data model, and the deployment are designed together by the same engineers, so nothing is lost in a hand-off between vendors.",
  },
  {
    title: "Built to be changed for years",
    body: "Small modules, migrations and tests in the repository, and decisions written down. The next engineer can pick the system up without us in the room.",
  },
  {
    title: "AI only where it removes real work",
    body: "We use language models for reading, extracting, and routing, with evaluation around them, and keep them out of the path of any number that has to be exact.",
  },
];
