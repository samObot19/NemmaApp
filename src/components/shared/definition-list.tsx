import { cn } from "@/lib/utils";

/**
 * Term on the left, definition on the right, rows separated by hairlines.
 * The site's replacement for the icon-card grid.
 */
export function DefinitionList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <dl className={cn("divide-y divide-border", className)}>{children}</dl>;
}

export function DefinitionRow({
  term,
  children,
  id,
  className,
}: {
  term: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "grid gap-4 py-8 scroll-mt-24 lg:grid-cols-12 lg:gap-8 lg:py-10",
        className,
      )}
    >
      <dt className="lg:col-span-4">{term}</dt>
      <dd className="lg:col-span-8">{children}</dd>
    </div>
  );
}
