import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { technologyGroups, technologyHeading } from "@/content/technology";

/** Tools grouped by what they build: the work leads, the tools follow. */
export function Technology() {
  const groups = technologyGroups.map((group) => ({
    title: group.area,
    body: group.description,
    tools: group.items,
  }));

  return (
    <Container as="div" className="py-10 lg:py-14">
      <SectionHeading size="lg" {...technologyHeading} />
      <HairlineGrid
        items={groups}
        columns={3}
        className="mt-4"
        renderMeta={(group) => (
          <ul className="flex flex-wrap gap-2" aria-label={`${group.title} tools`}>
            {group.tools.map((tool) => (
              <li key={tool}>
                <Badge variant="outline">{tool}</Badge>
              </li>
            ))}
          </ul>
        )}
      />
    </Container>
  );
}
