import { FactCell, FactGrid } from "@/components/shared/fact-grid";
import { projectStatusLabel } from "@/content/projects";
import type { Project } from "@/types/content";

/**
 * The engagement at a glance: role, scope, status. Only facts that are
 * true of the work; no figures unless they have been verified and
 * recorded in `outcome`.
 */
export function EngagementFacts({ project }: { project: Project }) {
  return (
    <FactGrid columns={3}>
      <FactCell term="Our role">
        <p className="text-small font-medium">{project.role}</p>
      </FactCell>
      <FactCell term="Scope">
        <ul className="text-small flex flex-col gap-1">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </FactCell>
      <FactCell term="Status">
        <p className="text-small font-medium">{projectStatusLabel[project.status]}</p>
        <p className="text-small mt-1 text-muted-foreground">{project.category}</p>
      </FactCell>
    </FactGrid>
  );
}
