import type { Project } from "@/types/content";

/**
 * Case studies.
 *
 * Every entry with `reviewBeforePublish: true` was drafted from the
 * structure of the engineering work, not from a verified client brief.
 * Client names, metrics, and results are deliberately absent. Add an
 * `outcome` only once Nemaa has verified it.
 */
export const projects: Project[] = [
  {
    slug: "audit-engagement-platform",
    title: "Audit engagement platform for an advisory firm",
    category: "Accounting software",
    status: "in-production",
    summary:
      "A web platform that runs audit engagements end to end: team membership, evidence collection, sign-offs, and an event log, connected to the client's accounting platform.",
    role: "Design and build of the full platform",
    scope: [
      "Auditor web application",
      "Audit backend service",
      "Data model and migrations",
      "Partner API integration",
      "Firm single sign-on",
    ],
    overview:
      "An advisory firm needed a single place to run audit engagements. Evidence was arriving by email and spreadsheet, sign-offs were hard to trace, and the ledger data being audited lived in a separate accounting platform. Nemaa built the audit platform as a web application with its own backend service and a partner-API integration to that platform.",
    challenge: [
      "Engagements involve several roles with different permissions, and those permissions have to hold across both the audit platform and the accounting data it reads.",
      "Evidence must be tamper-evident. A reviewer has to be able to prove that what was signed off is exactly what was collected.",
      "Auditor independence has to be enforced at the ledger boundary, so the audit platform can read financial data without ever being able to change it.",
    ],
    approach: [
      "Modelled the audit domain as its own service: engagements, membership, evidence, sign-offs, and an append-only event log, with local identity plus firm single sign-on.",
      "Forwarded questionnaire operations to the accounting platform through a partner API after authorising them locally, keeping one source of truth for ledger data.",
      "Built the front end as a single-page application with a scoped lint and test gate so the audit modules could be added incrementally without lowering the bar on the rest of the code.",
    ],
    engineering: [
      "Content-hashed evidence snapshots so any later change to source data is detectable.",
      "Sign-off records and an event log that make every state change attributable to a person and a time.",
      "Role-based authorisation applied before any request leaves the audit service.",
      "Idempotent demo seeding and migration scripts so new environments are reproducible.",
    ],
    capabilities: [
      "Engagement setup and team membership",
      "Evidence collection with tamper-evident snapshots",
      "Questionnaire workflows forwarded to the accounting platform",
      "Sign-off records and audit event log",
      "Firm single sign-on and local login",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "REST",
      "Jest",
      "Vite",
    ],
    architecture: [
      { label: "Clients", nodes: ["Auditor web app", "Firm SSO"] },
      {
        label: "Audit service",
        nodes: ["Engagements", "Evidence", "Sign-offs", "Event log"],
      },
      { label: "Data", nodes: ["Relational database"] },
      { label: "External", nodes: ["Accounting platform partner API"] },
    ],
    reviewBeforePublish: true,
  },
  {
    slug: "accounting-platform-services",
    title: "Backend services and integrations for an accounting platform",
    category: "Fintech systems",
    status: "in-production",
    summary:
      "Partner-facing APIs, payroll pay-schedule workflows, document ingestion, and third-party integrations for a business accounting platform.",
    role: "Backend engineering and integrations on an existing platform",
    scope: [
      "Partner API with scoped keys",
      "Payroll pay-schedule workflows",
      "Document ingestion with OCR",
      "E-commerce integration",
      "Conversational assistant integration",
    ],
    overview:
      "A business accounting platform needed to open its ledger to partners and connect to the tools its customers already use. Nemaa built and extended the backend services behind it: a partner API with key-based access, payroll pay-period handling, document ingestion, and integrations with an e-commerce platform and a conversational assistant.",
    challenge: [
      "Partner access has to be scoped precisely. A partner can act on the customers it is authorised for and nothing else.",
      "Payroll pay periods change status through concurrent processes, and a race between them can leave a period in an inconsistent state.",
      "Customers wanted their sales and documents to flow into the ledger without re-keying, which means integrations with systems that Nemaa does not control.",
    ],
    approach: [
      "Organised the codebase into packages with explicit boundaries, so partner-facing modules, payroll, and integrations can change independently.",
      "Treated pay-period status transitions as a state machine and resolved the remaining race conditions with database-level guarantees rather than application locks.",
      "Built integrations as adapters behind stable internal interfaces, so a change on the third-party side is isolated to one module.",
    ],
    engineering: [
      "Partner API with per-partner keys and customer-scoped authorisation.",
      "Pay-schedule and pay-period status handling with concurrency safety.",
      "Document ingestion pipeline with OCR for scanned records.",
      "E-commerce platform integration for sales and payouts.",
      "Conversational assistant integration exposing safe read operations.",
    ],
    capabilities: [
      "Partner API and access management",
      "Payroll pay schedules and period status",
      "Scanned-document ingestion",
      "E-commerce and assistant integrations",
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "REST", "OCR"],
    architecture: [
      {
        label: "Consumers",
        nodes: ["Platform web app", "Partner systems", "Assistant"],
      },
      {
        label: "Services",
        nodes: ["Partner API", "Payroll", "Documents", "Integrations"],
      },
      { label: "Data", nodes: ["Relational database", "Document storage"] },
      { label: "External", nodes: ["E-commerce platform", "OCR"] },
    ],
    reviewBeforePublish: true,
  },
  {
    slug: "nemaa-pulse",
    title: "Nemaa Pulse: attendance and permissions on Telegram",
    category: "Automation",
    status: "in-development",
    summary:
      "An internal Nemaa product for attendance check-ins and permission requests, delivered where the team already is: Telegram.",
    role: "Internal product, designed and built by Nemaa",
    scope: [
      "Modular monolith service",
      "Telegram bot interface",
      "Database layer with generated queries",
      "Notification delivery",
      "Docker-based deployment",
    ],
    overview:
      "Nemaa Pulse is an internal tool being built by Nemaa for its own team. Employees check in, request time away, and get answers through a Telegram bot; managers approve and see the state of their team from the same place. It is also a proving ground for how we structure backend services.",
    challenge: [
      "A separate attendance app would not get used. The interface had to live inside a messaging tool people already have open.",
      "Attendance and permission rules involve teams, roles, and time, and they must be enforced the same way regardless of which handler receives the message.",
      "The service should stay simple to run: one binary, one database, no orchestration.",
    ],
    approach: [
      "Built a modular monolith using clean architecture: domain, application, infrastructure, and interface layers, organised by business module.",
      "Kept the domain layer free of Telegram and database dependencies so rules can be tested without either.",
      "Generated type-safe database access from the schema, with migrations versioned alongside the code.",
    ],
    engineering: [
      "Business modules for users, teams, attendance, permissions, and notifications.",
      "Telegram adapter as one interface among several, with an HTTP health endpoint alongside.",
      "Authorisation checks in the application layer, not the transport.",
      "Docker Compose for local development with a single command to build and test.",
    ],
    capabilities: [
      "Attendance check-in and check-out",
      "Permission and leave requests with approvals",
      "Team and role management",
      "Notifications to managers and employees",
    ],
    technologies: ["Go", "PostgreSQL", "sqlc", "Docker", "Telegram Bot API"],
    architecture: [
      { label: "Interfaces", nodes: ["Telegram bot", "HTTP health"] },
      {
        label: "Application",
        nodes: ["Attendance", "Permissions", "Teams", "Notifications"],
      },
      { label: "Domain", nodes: ["Entities and rules"] },
      { label: "Infrastructure", nodes: ["Relational database", "Telegram API"] },
    ],
    reviewBeforePublish: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}

export const projectStatusLabel: Record<Project["status"], string> = {
  "in-production": "In production",
  "in-development": "In development",
  internal: "Internal tool",
};
