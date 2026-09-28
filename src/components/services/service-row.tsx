import Link from "next/link";

import { DefinitionRow } from "@/components/shared/definition-list";
import { TagList } from "@/components/shared/tag";
import { CheckList } from "@/components/shared/check-list";
import { ServiceGlyph } from "@/components/services/service-glyph";
import type { Service } from "@/types/content";

export function ServiceRow({
  service,
  detailed = false,
  headingLevel: Heading = "h3",
}: {
  service: Service;
  detailed?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <DefinitionRow
      id={service.slug}
      term={
        <div className="flex flex-col gap-5">
          <Heading className="text-h3">
            {detailed ? (
              service.name
            ) : (
              <Link href={`/services#${service.slug}`} className="hover:underline">
                {service.name}
              </Link>
            )}
          </Heading>
          <ServiceGlyph slug={service.slug} className="hidden lg:block" />
        </div>
      }
    >
      <p className="text-body measure text-muted-foreground">
        {detailed ? service.description : service.summary}
      </p>
      {detailed && (
        <CheckList items={service.capabilities} columns={2} className="mt-6" />
      )}
      <TagList items={service.technologies} className="mt-6" />
    </DefinitionRow>
  );
}
