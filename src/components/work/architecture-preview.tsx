import type { ArchitectureLayer } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * A compact, non-interactive version of the case-study architecture
 * figure, used as the visual on project rows. Decorative: the row's text
 * already names the system.
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
        "flex flex-col gap-1.5 rounded-lg border border-border bg-card p-3",
        className,
      )}
    >
      {layers.map((layer) => (
        <div key={layer.label} className="flex flex-wrap items-center gap-1.5">
          <span className="text-mono-sm w-14 shrink-0 truncate text-[0.6875rem] text-muted-foreground">
            {layer.label}
          </span>
          {layer.nodes.map((node) => (
            <span
              key={node}
              className="truncate rounded-[3px] border border-border-strong bg-background px-1.5 py-0.5 text-[0.6875rem] leading-4 font-medium"
            >
              {node}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
