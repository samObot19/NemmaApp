import { cn } from "@/lib/utils";

/**
 * Development-only marker for a value Nemaa still has to supply. Production
 * builds filter these items out before they render (see `publishable`).
 */
export function NeedsInput({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-mono-sm inline-flex w-fit items-center rounded-sm border border-dashed border-border-strong px-1.5 py-0.5 text-muted-foreground",
        className,
      )}
    >
      Needs input
    </span>
  );
}
