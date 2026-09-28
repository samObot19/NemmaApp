import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { TagList } from "@/components/shared/tag";
import { technologyGroups } from "@/content/technologies";

export function Capabilities() {
  return (
    <Container as="section" className="section pt-0 lg:pt-0">
      <SectionHeading
        title="Engineering capabilities"
        lede="The tools we use are chosen for the job. This is what we reach for, and where."
      />
      <div className="mt-4 divide-y divide-border">
        {technologyGroups.map((group) => (
          <div
            key={group.area}
            className="grid gap-3 py-6 lg:grid-cols-12 lg:gap-8 lg:py-7"
          >
            <h3 className="text-base font-semibold lg:col-span-3">
              {group.area}
            </h3>
            <p className="text-small text-muted-foreground lg:col-span-4">
              {group.description}
            </p>
            <TagList items={group.items} className="lg:col-span-5" />
          </div>
        ))}
      </div>
    </Container>
  );
}
