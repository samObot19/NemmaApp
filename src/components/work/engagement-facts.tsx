import { projectStatusLabel } from "@/content/projects";
import type { Project } from "@/types/content";

/**
 * The engagement at a glance: role, scope, status. Only facts that are
 * true of the work; no figures unless they have been verified and
 * recorded in `outcome`.
 */
export function EngagementFacts({ project }: { project: Project }) {
  return (
    <dl className="grid border-t border-border md:grid-cols-3">
      <Cell term="Our role">
        <p className="text-small font-medium">{project.role}</p>
      </Cell>
      <Cell term="Scope">
        <ul className="text-small flex flex-col gap-1">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Cell>
      <Cell term="Status">
        <p className="text-small font-medium">{projectStatusLabel[project.status]}</p>
        <p className="text-small mt-1 text-muted-foreground">{project.category}</p>
      </Cell>
    </dl>
  );
}

function Cell({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border py-5 last:border-b-0 md:px-6 md:[&:not(:nth-child(3n))]:border-r md:[&:nth-child(3n+1)]:pl-0 md:[&:nth-child(3n)]:pr-0 md:[&:nth-last-child(-n+3)]:border-b-0">
      <dt className="text-label">{term}</dt>
      <dd className="mt-2">{children}</dd>
    </div>
  );
}
