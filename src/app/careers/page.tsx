import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Openings } from "@/components/careers/openings";
import { Chapter } from "@/components/shared/chapter";
import { CheckList } from "@/components/shared/check-list";
import { CtaBand } from "@/components/shared/cta-band";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { PageChapters } from "@/components/shared/page-chapters";
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

const chapters = [
  { id: "intro", label: "Careers" },
  { id: "openings", label: "Open positions" },
  { id: "culture", label: "Engineering culture" },
  { id: "the-work", label: "The work" },
  { id: "contact", label: "Contact" },
];

export default function CareersPage() {
  return (
    <>
      <PageChapters chapters={chapters} />
      <Chapter id="intro" label="Careers" reveal={false}>
        <PageHeader
          title="Build software that businesses rely on."
          lede="Nemaa is a small engineering team working on accounting, fintech, AI, and automation systems. We are interested in engineers who like owning a problem end to end and care about what happens after launch."
        />
      </Chapter>

      <Chapter id="openings" label="Open positions">
        <Container className="py-10 lg:py-14">
          <SectionHeading title="Open positions" size="lg" />
          <Openings />
        </Container>
      </Chapter>

      <Chapter id="culture" label="Engineering culture">
        <Container className="py-10 lg:py-14">
          <SectionHeading
            title="Engineering culture"
            size="lg"
            lede="What it is like to work here, in the terms we would use to each other."
          />
          <HairlineGrid items={culture} columns={2} className="mt-6" />
        </Container>
      </Chapter>

      <Chapter id="the-work" label="The work">
        <Container className="py-10 lg:py-14">
          <SectionHeading title="The work" size="lg" />
          <div className="mt-6 grid gap-10 border-t border-border py-8 lg:grid-cols-12 lg:py-10">
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
      </Chapter>

      <Chapter id="contact" label="Contact" className="justify-stretch" reveal={false}>
        <CtaBand
          fill
          title="Want to build with us?"
          body="Send a short introduction and something you have built. We read every message."
          primary={{ label: "Introduce yourself", href: "/contact?type=careers" }}
          secondary={{ label: "About Nemaa", href: "/about" }}
        />
      </Chapter>
    </>
  );
}
