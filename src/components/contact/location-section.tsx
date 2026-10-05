import { Container } from "@/components/layout/container";
import { LocationMap } from "@/components/contact/location-map";
import { SectionHeading } from "@/components/shared/section-heading";
import { locationHeading } from "@/content/location";

/** The office chapter: heading and map. Used on the home and contact pages. */
export function LocationSection() {
  return (
    <Container className="py-10 lg:py-14">
      <SectionHeading size="lg" {...locationHeading} />
      <div className="mt-8">
        <LocationMap />
      </div>
    </Container>
  );
}
