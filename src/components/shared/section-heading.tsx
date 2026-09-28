import { cn } from "@/lib/utils";

/**
 * The shared heading row: a hairline on top, heading left, optional lede
 * right. Every section on the site opens this way so pages read as one
 * document.
 */
export function SectionHeading({
  title,
  qualifier,
  lede,
  as: Heading = "h2",
  className,
  action,
}: {
  title: string;
  /** Second line of the title, set in the muted tone. */
  qualifier?: string;
  lede?: string;
  as?: "h1" | "h2";
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 border-t border-border pt-6 lg:grid-cols-12 lg:gap-8",
        className,
      )}
    >
      <Heading className="text-h2 lg:col-span-5">
        {title}
        {qualifier && (
          <span className="block text-muted-foreground">{qualifier}</span>
        )}
      </Heading>
      {(lede || action) && (
        <div className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7">
          {lede && <p className="text-lede measure">{lede}</p>}
          {action && <div>{action}</div>}
        </div>
      )}
    </div>
  );
}
