import type { Metadata } from "next";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
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
        lede="Systems we have designed and built for businesses that depend on them. Where work is confidential, the case study describes the engineering problem and leaves out client names and figures."
      />
      <Container as="section" className="pb-16 lg:pb-24">
        <SectionHeading
          title="Case studies"
          lede="Each entry records our role, what was delivered, the stack, and the architecture. Ask for a walkthrough and we will go through the code and decisions on a call."
          action={
            <Button asChild variant="link">
              <Link href="/contact?type=project">Request a walkthrough</Link>
            </Button>
          }
        />
        <ul className="mt-10 flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              headingLevel="h2"
              size="lg"
            />
          ))}
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
