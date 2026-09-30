import type { Metadata } from "next";

import { Chapter } from "@/components/shared/chapter";
import { CtaBand } from "@/components/shared/cta-band";
import { PageChapters } from "@/components/shared/page-chapters";
import { PageHeader } from "@/components/shared/page-header";
import { ServiceScreen } from "@/components/services/service-screen";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Software engineering, fintech and accounting software, AI systems, backend and API engineering, and automation. What Nemaa builds and how.",
  path: "/services",
});

const chapters = [
  { id: "intro", label: "Services" },
  ...services.map((service) => ({ id: service.slug, label: service.name })),
  { id: "contact", label: "Contact" },
];

export default function ServicesPage() {
  return (
    <>
      <PageChapters chapters={chapters} />
      <Chapter id="intro" label="Services" reveal={false}>
        <PageHeader
          title="Services"
          lede="Five areas of engineering, usually combined on one system. Each screen below lists what we actually build, so you can see where your project fits."
        >
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <li key={service.slug} className="border-t border-border last:border-b sm:pr-6 lg:border-r lg:last:border-r-0 lg:last:border-b-0 lg:[&:nth-child(n+2)]:pl-6">
                <a href={`#${service.slug}`} className="text-small flex min-h-14 items-center gap-3 py-3 font-medium transition-colors hover:text-foreground">
                  <span className="text-mono-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  {service.name}
                </a>
              </li>
            ))}
          </ol>
        </PageHeader>
      </Chapter>
      {services.map((service, index) => (
        <Chapter key={service.slug} id={service.slug} label={service.name}>
          <ServiceScreen service={service} index={index} total={services.length} />
        </Chapter>
      ))}
      <Chapter id="contact" label="Contact" className="justify-stretch" reveal={false}>
        <CtaBand
          fill
          title="Not sure which of these you need?"
          body="Describe the problem. We will tell you what we would build, and what we would leave out."
        />
      </Chapter>
    </>
  );
}
