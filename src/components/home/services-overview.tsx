import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { DefinitionList } from "@/components/shared/definition-list";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceRow } from "@/components/services/service-row";
import { services } from "@/content/services";

export function ServicesOverview() {
  return (
    <Container as="section" className="section pt-0 lg:pt-0">
      <SectionHeading
        title="What we build"
        lede="Five areas of work, usually combined. Most systems we build touch a ledger, an API, and a workflow that used to be manual."
        action={
          <Button asChild variant="link">
            <Link href="/services">All services in detail</Link>
          </Button>
        }
      />
      <DefinitionList className="mt-4">
        {services.map((service) => (
          <ServiceRow key={service.slug} service={service} />
        ))}
      </DefinitionList>
    </Container>
  );
}
