import { Container } from "@/components/layout/container";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { howWeWork } from "@/content/about";

/** A real sequence, so the steps are numbered. */
export function HowWeWork() {
  return (
    <Container as="div" className="py-10 lg:py-14">
      <SectionHeading
        title="How we work"
        size="lg"
        qualifier="Three steps, every engagement."
        lede="The same three steps on every engagement, whatever the stack."
      />
      <HairlineGrid items={howWeWork} columns={3} numbered className="mt-4" />
    </Container>
  );
}
