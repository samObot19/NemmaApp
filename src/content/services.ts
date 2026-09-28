import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "software-engineering",
    name: "Software engineering",
    summary:
      "Web applications, APIs, and the architecture that keeps them maintainable as they grow.",
    description:
      "We design and build complete products: the user-facing application, the API behind it, the data model, and the operational pieces around them. The goal is software that a team can keep changing safely years after launch.",
    capabilities: [
      "Product web applications, server-rendered and fast",
      "REST APIs with typed contracts and versioning",
      "Relational data modelling and migrations",
      "Authentication, roles, and permission models",
      "Background jobs, queues, and scheduled work",
      "Automated testing and continuous integration",
    ],
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    slug: "fintech-accounting",
    name: "Fintech and accounting software",
    summary:
      "Ledgers, financial workflows, reporting, and the integrations that connect them to the rest of the business.",
    description:
      "Financial software has to be correct first and fast second. We build systems where every posting is traceable, every change is attributable, and every report can be reconciled back to its source records.",
    capabilities: [
      "Double-entry ledger design and posting rules",
      "Invoicing, billing, payroll, and pay-schedule workflows",
      "Reconciliation and period-close processes",
      "Audit trails, evidence records, and sign-off flows",
      "Partner and accounting-platform API integrations",
      "Financial reporting and export",
    ],
    technologies: ["TypeScript", "Node.js", "Go", "PostgreSQL", "REST"],
  },
  {
    slug: "ai-systems",
    name: "AI and intelligent systems",
    summary:
      "LLM applications, retrieval over business documents, and agent workflows that are measured before they ship.",
    description:
      "We use language models where they remove real work: reading documents, answering questions over internal data, and running multi-step workflows. Each system ships with evaluation so its behaviour can be trusted and improved.",
    capabilities: [
      "Retrieval-augmented generation over internal documents",
      "Agent workflows with explicit state and tool use",
      "Structured extraction from invoices, contracts, and forms",
      "Evaluation sets, guardrails, and regression checks",
      "Provider-independent model integration",
    ],
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "Vector databases",
      "LLM APIs",
    ],
  },
  {
    slug: "backend-api",
    name: "Backend and API engineering",
    summary:
      "Backend services with the databases, caches, and queues that make them reliable, built to be operated for years.",
    description:
      "Backend work is where most of the risk in a system lives. We build services with clear module boundaries, explicit data ownership, and the observability needed to operate them.",
    capabilities: [
      "Long-running services with clear module boundaries",
      "Schema design, migrations, and query performance",
      "Caching and rate limiting",
      "Message queues and asynchronous processing",
      "Authentication, SSO, and API keys for partners",
      "Containerised cloud deployment",
    ],
    technologies: ["Go", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    slug: "automation",
    name: "Automation",
    summary:
      "Integrations and workflow automation that take repetitive operational work off people's desks.",
    description:
      "Much of a business runs on repeated manual steps between systems. We connect those systems, automate the steps, and add AI where a judgement call used to need a person.",
    capabilities: [
      "Integrations with accounting, e-commerce, and messaging platforms",
      "Document ingestion pipelines with OCR and extraction",
      "Chat-based tools on Telegram and similar platforms",
      "Scheduled jobs, notifications, and approvals",
      "AI-assisted routing and classification",
    ],
    technologies: ["Go", "Python", "TypeScript", "Telegram Bot API", "OCR"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
