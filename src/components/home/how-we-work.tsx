import { Container } from "@/components/layout/container";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { howWeWork } from "@/content/about";

/** A real sequence, so the steps are numbered. */
export function HowWeWork() {
  return (
    <Container as="section" className="section pt-0 lg:pt-0">
      <SectionHeading
        title="How we work"
        qualifier="Three steps, every engagement."
        lede="The same three steps on every engagement, whatever the stack."
      />
      <HairlineGrid items={howWeWork} columns={3} numbered className="mt-4" />
    </Container>
  );
}
