import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Openings } from "@/components/careers/openings";
import { CheckList } from "@/components/shared/check-list";
import { CtaBand } from "@/components/shared/cta-band";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { culture, typesOfWork, whatToExpect } from "@/content/careers";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Engineering at Nemaa Technology: the culture, the kind of work, what to expect, and how to introduce yourself.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Build software that businesses rely on."
        lede="Nemaa is a small engineering team working on accounting, fintech, AI, and automation systems. We are interested in engineers who like owning a problem end to end and care about what happens after launch."
      />

      <Container as="section" className="pb-16 lg:pb-24">
        <SectionHeading title="Open positions" />
        <Openings />
      </Container>

      <Container as="section" className="pb-16 lg:pb-24">
        <SectionHeading
          title="Engineering culture"
          lede="What it is like to work here, in the terms we would use to each other."
        />
        <HairlineGrid items={culture} columns={2} className="mt-4" />
      </Container>

      <Container as="section" className="pb-16 lg:pb-24">
        <SectionHeading title="The work" />
        <div className="mt-4 grid gap-10 border-t border-border py-8 lg:grid-cols-12 lg:py-10">
          <div className="lg:col-span-6">
            <h3 className="text-base font-semibold">Types of work</h3>
            <CheckList items={typesOfWork} className="mt-4" />
          </div>
          <div className="lg:col-span-6">
            <h3 className="text-base font-semibold">What you can expect</h3>
            <CheckList items={whatToExpect} className="mt-4" />
          </div>
        </div>
      </Container>

      <CtaBand
        title="Want to build with us?"
        body="Send a short introduction and something you have built. We read every message."
        primary={{ label: "Introduce yourself", href: "/contact?type=careers" }}
        secondary={{ label: "About Nemaa", href: "/about" }}
      />
    </>
  );
}
