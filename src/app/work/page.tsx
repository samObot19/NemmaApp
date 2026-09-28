import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectRow } from "@/components/work/project-row";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies of systems Nemma has designed and built: accounting and audit platforms, backend services, and internal automation.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work"
        lede="Systems we have designed and built. Where work is confidential, the case study describes the engineering problem and leaves out names and figures."
      />
      <Container as="section" className="pb-16 lg:pb-24">
        <ul className="divide-y divide-border border-t border-border">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} headingLevel="h2" />
          ))}
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
