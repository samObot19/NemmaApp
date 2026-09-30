import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Chapter } from "@/components/shared/chapter";
import { CtaBand } from "@/components/shared/cta-band";
import { PageChapters } from "@/components/shared/page-chapters";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectRow } from "@/components/work/project-row";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies of systems Nemaa has designed and built: accounting and audit platforms, backend services, and internal automation.",
  path: "/work",
});

const chapters = [
  { id: "intro", label: "Work" },
  ...projects.map((project) => ({ id: project.slug, label: project.category })),
  { id: "contact", label: "Contact" },
];

export default function WorkPage() {
  return (
    <>
      <PageChapters chapters={chapters} />
      <Chapter id="intro" label="Work" reveal={false}>
        <PageHeader
          title="Work"
          lede="Systems we have designed and built for businesses that depend on them. Where work is confidential, the case study describes the engineering problem and leaves out client names and figures."
        >
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-small measure text-muted-foreground">
              Each entry records our role, what was delivered, and the architecture. Ask for a walkthrough and we will go through the code and decisions on a call.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact?type=project">Request a walkthrough</Link>
            </Button>
          </div>
        </PageHeader>
      </Chapter>
      {projects.map((project, index) => (
        <Chapter key={project.slug} id={project.slug} label={project.category}>
          <Container className="py-10 lg:py-14">
            <p className="text-mono-sm mb-4 text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </p>
            <ul>
              <ProjectRow project={project} headingLevel="h2" size="lg" />
            </ul>
          </Container>
        </Chapter>
      ))}
      <Chapter id="contact" label="Contact" className="justify-stretch" reveal={false}>
        <CtaBand fill />
      </Chapter>
    </>
  );
}
