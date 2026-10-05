import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { industries, industriesHeading } from "@/content/industries";
import { getService } from "@/content/services";
import { gridColumns } from "@/lib/grid";

/** Each industry names the services it draws on and links its evidence. */
export function Industries() {
  return (
    <Container as="div" className="py-10 lg:py-14">
      <SectionHeading size="lg" {...industriesHeading} />
      <HairlineGrid
        items={industries}
        columns={gridColumns(industries.length, 3)}
        className="mt-4"
        renderMeta={(industry) => (
          <div className="flex flex-col gap-4">
            <ul className="flex flex-wrap gap-2" aria-label="Related services">
              {industry.services.map((slug) => (
                <li key={slug}>
                  <Badge asChild variant="outline">
                    <Link href={`/services#${slug}`}>{getService(slug)?.name ?? slug}</Link>
                  </Badge>
                </li>
              ))}
            </ul>
            {industry.projectSlug && (
              <Link
                href={`/work/${industry.projectSlug}`}
                className="link text-small inline-flex min-h-6 w-fit items-center font-medium"
              >
                Read the case study
              </Link>
            )}
          </div>
        )}
      />
    </Container>
  );
}
