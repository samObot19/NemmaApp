import type { ArchitectureLayer } from "@/types/content";

/**
 * Layered architecture view: one row per layer, nodes as boxes.
 * Crisp geometry only; it is a diagram, not an illustration.
 */
export function ArchitectureDiagram({
  layers,
  title,
}: {
  layers: ArchitectureLayer[];
  title: string;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      <figcaption className="text-mono-sm border-b border-border px-5 py-3 text-muted-foreground">
        {title}
      </figcaption>
      <ol className="divide-y divide-border">
        {layers.map((layer) => (
          <li
            key={layer.label}
            className="grid gap-3 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:py-5"
          >
            <p className="text-sm font-medium text-muted-foreground sm:pt-2">
              {layer.label}
            </p>
            <ul className="flex flex-wrap gap-2">
              {layer.nodes.map((node) => (
                <li
                  key={node}
                  className="rounded-sm border border-border-strong bg-background px-3 py-2 text-sm font-medium"
                >
                  {node}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </figure>
  );
}
