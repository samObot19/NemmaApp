import { Container } from "@/components/layout/container";
import { FactCell, FactGrid } from "@/components/shared/fact-grid";
import { NeedsInput } from "@/components/shared/needs-input";
import { SectionHeading } from "@/components/shared/section-heading";
import { numbersHeading, statIsReady, stats } from "@/content/numbers";
import { gridColumns } from "@/lib/grid";
import { publishable } from "@/lib/placeholders";

/**
 * Figures with their basis. The home page leaves this chapter out entirely
 * until at least one stat has both a value and a basis.
 */
export function Numbers() {
  const visible = publishable(stats, statIsReady);

  return (
    <Container as="div" className="py-10 lg:py-14">
      <SectionHeading size="lg" {...numbersHeading} />
      <FactGrid columns={gridColumns(visible.length, 3)} className="mt-4">
        {visible.map((stat) => (
          <FactCell key={stat.label} term={stat.label}>
            <p className={stat.value === null ? "text-h1 text-muted-foreground" : "text-h1 tabular-nums"}>
              {stat.value ?? "—"}
            </p>
            {stat.basis !== null && <p className="text-label mt-2">{stat.basis}</p>}
            {!statIsReady(stat) && <NeedsInput className="mt-2" />}
          </FactCell>
        ))}
      </FactGrid>
    </Container>
  );
}
