import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ArchitecturePreview } from "@/components/work/architecture-preview";
import { projectStatusLabel } from "@/content/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

/**
 * One engagement record on a raised panel: category and role, title and
 * summary, what was delivered, and the architecture at a glance. The title
 * is the link, stretched over the panel so the whole panel is clickable
 * while screen readers hear one clean name.
 */
export function ProjectRow({
  project,
  headingLevel: Heading = "h3",
  size = "default",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
  size?: "default" | "lg";
}) {
  return (
    <li className="panel group relative p-6 transition-colors hover:border-border-strong hover:bg-popover focus-within:border-border-strong lg:p-8">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <dl className="flex flex-wrap gap-x-6 gap-y-3 lg:col-span-3 lg:flex-col lg:gap-y-5">
          <div>
            <dt className="text-label">Category</dt>
            <dd className="text-small mt-1 font-medium">{project.category}</dd>
          </div>
          <div>
            <dt className="text-label">Status</dt>
            <dd className="text-small mt-1 font-medium">
              {projectStatusLabel[project.status]}
            </dd>
          </div>
          <div className="hidden lg:block">
            <dt className="text-label">Our role</dt>
            <dd className="text-small measure mt-1 font-medium">{project.role}</dd>
          </div>
        </dl>

        <div className="lg:col-span-5">
          <Heading className={cn(size === "lg" ? "text-h2 leading-[1.35]" : "text-h3")}>
            <Link
              href={`/work/${project.slug}`}
              className="rounded-sm after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] group-hover:underline group-hover:decoration-border-strong focus-visible:outline-none focus-visible:after:ring-[3px] focus-visible:after:ring-ring"
            >
              {project.title}
            </Link>
          </Heading>
          <p className="text-body measure mt-3 text-muted-foreground">
            {project.summary}
          </p>
          <ul className="text-small mt-5 flex flex-wrap gap-x-5 gap-y-1.5">
            {project.scope.slice(0, 4).map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-4">
          <ArchitecturePreview
            layers={project.architecture}
            className="hidden lg:flex"
          />
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            Read the case study
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </span>
        </div>
      </div>
    </li>
  );
}
