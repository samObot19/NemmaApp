import { Container } from "@/components/layout/container";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { reasons, whyHeading } from "@/content/why-nemaa";

export function WhyNemaa() {
  return (
    <Container as="div" className="py-10 lg:py-14">
      <SectionHeading size="lg" {...whyHeading} />
      <HairlineGrid items={reasons} columns={2} className="mt-4" />
    </Container>
  );
}
