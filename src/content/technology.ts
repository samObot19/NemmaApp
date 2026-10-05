import type { SectionCopy, TechnologyGroup } from "@/types/content";

export const technologyHeading: SectionCopy = {
  title: "Technology we use",
  lede: "Grouped by what it builds. We choose from this set for each system and keep the list short on purpose.",
};

/**
 * The tools are the technologies listed in the written brief (PRODUCT.md)
 * and on each service in services.ts; the grouping and descriptions are
 * drafted. Confirm before launch. Each group leads with what gets built:
 * tools are never decoration. Six groups fill the three-column grid.
 */
export const technologyGroups: TechnologyGroup[] = [
  {
    area: "Product interfaces",
    description: "Web applications people use every day, server-rendered and fast.",
    items: ["TypeScript", "React", "Next.js"],
  },
  {
    area: "Services and APIs",
    description: "Backend services and partner APIs with typed contracts.",
    items: ["Go", "Python", "FastAPI", "Node.js"],
  },
  {
    area: "Data",
    description: "Relational data models, caching, and search over documents.",
    items: ["PostgreSQL", "Redis", "Vector databases"],
  },
  {
    area: "AI systems",
    description: "Retrieval, extraction, and agent workflows with evaluation.",
    items: ["LangChain", "LangGraph", "LLM APIs"],
  },
  {
    area: "Automation and integrations",
    description: "Chat-based tools and document pipelines that take manual steps off people's desks.",
    items: ["Telegram Bot API", "OCR"],
  },
  {
    area: "Infrastructure",
    description: "Containerised services deployed to managed cloud platforms.",
    items: ["Docker", "AWS", "Azure"],
  },
];
