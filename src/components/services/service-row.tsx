import { DefinitionRow } from "@/components/shared/definition-list";
import { CheckList } from "@/components/shared/check-list";
import { ServiceGlyph } from "@/components/services/service-glyph";
import type { Service } from "@/types/content";

export function ServiceRow({
  service,
  headingLevel: Heading = "h2",
}: {
  service: Service;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <DefinitionRow
      id={service.slug}
      term={
        <div className="flex flex-col gap-5">
          <Heading className="text-h3">{service.name}</Heading>
          <ServiceGlyph slug={service.slug} className="hidden text-foreground/40 md:block" />
        </div>
      }
    >
      <p className="text-body measure text-muted-foreground">
        {service.description}
      </p>
      <CheckList items={service.capabilities} columns={2} className="mt-6" />
    </DefinitionRow>
  );
}
