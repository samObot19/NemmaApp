import Link from "next/link";

import { Container } from "@/components/layout/container";
import { FactCell, FactGrid } from "@/components/shared/fact-grid";
import { HairlineGrid } from "@/components/shared/hairline-grid";
import { NeedsInput } from "@/components/shared/needs-input";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  collaborationHeading,
  engagementModelIsReady,
  engagementModels,
  workingNormIsReady,
  workingNorms,
} from "@/content/collaboration";
import { gridColumns } from "@/lib/grid";
import { publishable } from "@/lib/placeholders";

/**
 * The collaboration model: how Nemaa fits around a client's team. The
 * delivery steps stay in `HowWeWork`.
 */
export function Collaboration() {
  const models = publishable(engagementModels, engagementModelIsReady);
  const norms = publishable(workingNorms, workingNormIsReady);

  return (
    <Container as="div" className="py-10 lg:py-14">
      <SectionHeading size="lg" {...collaborationHeading} />
      <HairlineGrid
        items={models}
        columns={gridColumns(models.length, 3)}
        className="mt-4"
        renderMeta={(model) =>
          (!model.confirmed || model.projectSlug) && (
            <div className="flex flex-col gap-3">
              {!model.confirmed && <NeedsInput />}
              {model.projectSlug && (
                <Link
                  href={`/work/${model.projectSlug}`}
                  className="link text-small inline-flex min-h-6 w-fit items-center font-medium"
                >
                  Read the case study
                </Link>
              )}
            </div>
          )
        }
      />
      {norms.length > 0 && (
        <FactGrid columns={gridColumns(norms.length, 4)} className="mt-8">
          {norms.map((norm) => (
            <FactCell key={norm.term} term={norm.term}>
              {norm.value !== null ? (
                <p className="text-small font-medium">{norm.value}</p>
              ) : (
                <NeedsInput />
              )}
            </FactCell>
          ))}
        </FactGrid>
      )}
    </Container>
  );
}
