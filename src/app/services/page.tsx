import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/shared/cta-band";
import { DefinitionList } from "@/components/shared/definition-list";
import { PageHeader } from "@/components/shared/page-header";
import { ServiceRow } from "@/components/services/service-row";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Software engineering, fintech and accounting software, AI systems, backend and API engineering, and automation. What Nemaa builds and how.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        lede="Five areas of engineering, usually combined on one system. Each one below lists what we actually build, so you can see where your project fits."
      />
      <Container as="section" className="pb-16 lg:pb-24">
        <DefinitionList className="border-t border-border">
          {services.map((service) => (
            <ServiceRow key={service.slug} service={service} headingLevel="h2" />
          ))}
        </DefinitionList>
      </Container>
      <CtaBand
        title="Not sure which of these you need?"
        body="Describe the problem. We will tell you what we would build, and what we would leave out."
      />
    </>
  );
}
