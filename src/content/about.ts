import type { Principle } from "@/types/content";

export const philosophy: Principle[] = [
  {
    title: "Build for the people who use it",
    body: "We start from the job someone is trying to finish, not the feature list. A workflow that saves an accountant ten minutes a day is worth more than a dashboard nobody opens.",
  },
  {
    title: "Keep systems maintainable",
    body: "Most of a system's life is spent being changed. We write code the next engineer can read, keep modules small, and leave migrations and tests in the repository, not in someone's head.",
  },
  {
    title: "Prefer the simplest architecture that works",
    body: "A modular monolith on one database beats a fleet of services when the team is small and the domain is still moving. We split things when there is a reason to, not before.",
  },
  {
    title: "Automate repetitive work",
    body: "Deployments, migrations, seed data, and checks run from a single command. If a person has to remember a step, it will eventually be forgotten.",
  },
  {
    title: "Design for reliability",
    body: "Financial software has to be right every time. We reach for database guarantees, idempotent operations, and explicit state machines before we reach for retries.",
  },
  {
    title: "Use AI where it creates real value",
    body: "Language models are good at reading, extracting, and routing. We put them there, with evaluation around them, and keep them away from decisions that need to be exact.",
  },
];

export const howWeWork: Principle[] = [
  {
    title: "Understand the domain first",
    body: "Before writing code we map the entities, the rules, and the edge cases with the people who live with them. In accounting and payroll the edge cases are the product.",
  },
  {
    title: "Ship in small, reviewable steps",
    body: "Work lands in increments that can be reviewed, tested, and rolled back. Large rewrites are a last resort.",
  },
  {
    title: "Leave the system better documented than we found it",
    body: "Architecture notes, decisions, and runbooks live next to the code, so the team that inherits the system can operate it.",
  },
];
