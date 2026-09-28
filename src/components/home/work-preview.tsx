import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorkShowcase } from "@/components/home/work-showcase";
import { projects } from "@/content/projects";

export function WorkPreview() {
  return (
    <Container as="section" className="section pt-0 lg:pt-0">
      <SectionHeading
        title="Selected work"
        qualifier="Evidence, not adjectives."
        lede="Systems we have designed and built. Each case study records our role, what was delivered, and the architecture behind it."
        action={
          <Button asChild variant="link">
            <Link href="/work">All case studies</Link>
          </Button>
        }
      />
      <div className="mt-10">
        <WorkShowcase projects={projects} />
      </div>
    </Container>
  );
}
