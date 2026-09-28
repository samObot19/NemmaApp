import { cn } from "@/lib/utils";

/**
 * One topic per screen. A chapter fills the viewport below the header and
 * centres its content; longer content simply grows past the fold.
 */
export function Chapter({
  id,
  label,
  children,
  className,
}: {
  id: string;
  /** Short name shown in the chapter navigation. */
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-chapter={label}
      className={cn("chapter flex flex-col justify-center", className)}
    >
      {children}
    </section>
  );
}
