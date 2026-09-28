import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { TagList } from "@/components/shared/tag";
import { ArchitecturePreview } from "@/components/work/architecture-preview";
import { projectStatusLabel } from "@/content/projects";
import type { Project } from "@/types/content";

export function ProjectRow({
  project,
  headingLevel: Heading = "h3",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <li>
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-5 py-8 transition-colors hover:bg-card focus-visible:bg-card active:bg-secondary lg:-mx-4 lg:grid-cols-12 lg:gap-8 lg:px-4 lg:py-10"
      >
        <div className="text-sm text-muted-foreground lg:col-span-2">
          <p className="text-foreground">{project.category}</p>
          <p className="mt-1">{projectStatusLabel[project.status]}</p>
        </div>
        <div className="lg:col-span-6">
          <Heading className="text-h3 flex items-start gap-2">
            <span className="group-hover:underline">{project.title}</span>
            <ArrowUpRight
              className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Heading>
          <p className="text-body measure mt-3 text-muted-foreground">
            {project.summary}
          </p>
          <TagList items={project.technologies.slice(0, 5)} className="mt-5" />
        </div>
        <ArchitecturePreview
          layers={project.architecture}
          className="hidden transition-colors group-hover:border-border-strong lg:col-span-4 lg:flex"
        />
      </Link>
    </li>
  );
}
