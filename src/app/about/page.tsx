import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { HowWeWork } from "@/components/home/how-we-work";
import { Chapter } from "@/components/shared/chapter";
import { CtaBand } from "@/components/shared/cta-band";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { PageChapters } from "@/components/shared/page-chapters";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { philosophy } from "@/content/about";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Nemaa Technology is a software development company. What we build, how we think about engineering, and how we work with clients.",
  path: "/about",
});

const chapters = [
  { id: "intro", label: "About" },
  { id: "what-we-do", label: "What we do" },
  { id: "philosophy", label: "Engineering philosophy" },
  { id: "process", label: "How we work" },
  { id: "contact", label: "Contact" },
];

export default function AboutPage() {
  return (
    <>
      <PageChapters chapters={chapters} />
      <Chapter id="intro" label="About" reveal={false}>
        <PageHeader
          title="A software company that builds the systems businesses depend on."
          lede="Nemaa Technology designs and builds software for businesses: accounting and fintech systems, AI applications, automation, and the backend services underneath. We take on work where correctness and maintainability matter more than speed of demo."
        />
      </Chapter>

      <Chapter id="what-we-do" label="What we do">
        <Container className="py-10 lg:py-14">
          <SectionHeading
            title="What we do"
            size="lg"
            lede="Most of our work sits at the meeting point of a business process, a financial record, and a system that has to keep running."
          />
          <div className="mt-4 grid gap-8 py-8 lg:grid-cols-12 lg:py-10">
            <div className="flex flex-col gap-4 lg:col-span-7">
              <p className="text-body measure text-muted-foreground">
                We build for businesses that need software to be right: ledgers
                that balance, payroll that runs on schedule, audit trails that hold
                up, integrations that do not silently drop records. That shapes
                how we work. We model the domain carefully, lean on database
                guarantees, and write down decisions so the next engineer can
                follow them.
              </p>
              <p className="text-body measure text-muted-foreground">
                We also build with language models where they earn their place:
                reading documents, answering questions over internal data, and
                automating steps that used to need a person. Always with
                evaluation around them, and never in the path of a number that
                has to be exact.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="text-sm font-semibold">Areas of work</h3>
              <ul className="mt-3 divide-y divide-border">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-small flex min-h-11 items-center py-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Chapter>

      <Chapter id="philosophy" label="Engineering philosophy">
        <Container className="py-10 lg:py-14">
          <SectionHeading
            title="Engineering philosophy"
            size="lg"
            lede="Six commitments that show up in every codebase we ship."
          />
          <HairlineGrid items={philosophy} columns={3} className="mt-6" />
        </Container>
      </Chapter>

      <Chapter id="process" label="How we work">
        <HowWeWork />
      </Chapter>

      <Chapter id="contact" label="Contact" className="justify-stretch" reveal={false}>
        <CtaBand fill secondary={{ label: "Careers at Nemaa", href: "/careers" }} />
      </Chapter>
    </>
  );
}
