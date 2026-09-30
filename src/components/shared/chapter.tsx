import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

/**
 * One idea per screen. A chapter fills the viewport below the header,
 * centres its content, and eases it in the first time it is scrolled to.
 * Longer content simply grows past the fold.
 */
export function Chapter({
  id,
  label,
  children,
  className,
  reveal = true,
}: {
  id: string;
  /** Short name shown in the chapter navigation. */
  label: string;
  children: React.ReactNode;
  className?: string;
  reveal?: boolean;
}) {
  return (
    <section
      id={id}
      data-chapter={label}
      className={cn("chapter flex flex-col justify-center", className)}
    >
      {reveal ? <Reveal>{children}</Reveal> : children}
    </section>
  );
}
