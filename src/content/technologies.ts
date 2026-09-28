import type { TechnologyGroup } from "@/types/content";

/**
 * Presented as engineering capabilities, not a logo wall.
 * Keep each list short and honest: only technologies used in real work.
 */
export const technologyGroups: TechnologyGroup[] = [
  {
    area: "Backend services",
    description:
      "Long-running services with clear module boundaries and typed interfaces.",
    items: ["Go", "Python", "FastAPI", "Node.js", "TypeScript"],
  },
  {
    area: "Web applications",
    description:
      "Server-rendered React applications that stay fast and accessible.",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    area: "Data and storage",
    description:
      "Relational data first, with caching and search where the workload needs it.",
    items: ["PostgreSQL", "Redis", "sqlc", "Vector databases"],
  },
  {
    area: "AI systems",
    description:
      "Language-model applications built with explicit state, retrieval, and evaluation.",
    items: ["LLM APIs", "LangChain", "LangGraph", "RAG pipelines", "Evaluation"],
  },
  {
    area: "Infrastructure",
    description:
      "Containerised deployments with automated builds and migrations.",
    items: ["Docker", "Azure", "AWS", "CI pipelines"],
  },
];
