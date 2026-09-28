import type { ArchitectureLayer } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * A compact, non-interactive version of the case-study architecture
 * figure, used as the visual on project panels. Decorative: the panel's
 * text already names the system.
 */
export function ArchitecturePreview({
  layers,
  className,
}: {
  layers: ArchitectureLayer[];
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex flex-col gap-2 rounded-lg border border-border bg-background p-3",
        className,
      )}
    >
      {layers.map((layer) => (
        <div key={layer.label} className="grid grid-cols-[6.5rem_1fr] gap-2">
          <span className="text-mono-sm pt-0.5 text-xs leading-4 text-muted-foreground">
            {layer.label}
          </span>
          <span className="flex flex-wrap gap-1.5">
            {layer.nodes.map((node) => (
              <span
                key={node}
                className="rounded-[4px] border border-border-strong bg-card px-1.5 py-0.5 text-xs leading-4 font-medium"
              >
                {node}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
