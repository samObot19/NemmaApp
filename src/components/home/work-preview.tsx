import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectRow } from "@/components/work/project-row";
import { projects } from "@/content/projects";

export function WorkPreview() {
  return (
    <Container as="section" className="section pt-0 lg:pt-0">
      <SectionHeading
        title="Selected work"
        lede="Two of the systems we have designed and built. Each case study covers the problem, the approach, and the engineering behind it."
        action={
          <Button asChild variant="link">
            <Link href="/work">All case studies</Link>
          </Button>
        }
      />
      <ul className="mt-4 divide-y divide-border">
        {projects.slice(0, 2).map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>
    </Container>
  );
}
