import { cn } from "@/lib/utils";
import type { Principle } from "@/types/content";

/**
 * Short statements set in a ruled grid. Cells are separated by hairlines,
 * not boxed; the first cell in each row sits on the container edge, the
 * last row carries no bottom rule, and a partial last row ends without a
 * stray side rule. `gridColumns` picks the column count for a varying list.
 * `numbered` is only for genuine sequences. `renderMeta` adds a line under
 * an item's body, such as tags or a link to its evidence.
 */
export function HairlineGrid<T extends Principle>({
  items,
  columns,
  numbered = false,
  renderMeta,
  className,
}: {
  items: T[];
  columns: 2 | 3;
  numbered?: boolean;
  renderMeta?: (item: T) => React.ReactNode;
  className?: string;
}) {
  const List = numbered ? "ol" : "ul";
  return (
    <List
      className={cn(
        "grid border-t border-border",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "md:grid-cols-3",
        className,
      )}
    >
      {items.map((item, index) => {
        const meta = renderMeta?.(item);
        return (
          <li
            key={item.title}
            className={cn(
              "border-b border-border py-6 last:border-b-0",
              columns === 2 &&
                "sm:px-8 sm:[&:nth-child(2n+1):not(:last-child)]:border-r sm:[&:nth-child(2n+1)]:pl-0 sm:[&:nth-child(2n)]:pr-0 sm:[&:nth-child(2n+1):nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(2n+1):nth-last-child(-n+2)~li]:border-b-0",
              columns === 3 &&
                "md:px-8 md:[&:not(:nth-child(3n)):not(:last-child)]:border-r md:[&:nth-child(3n+1)]:pl-0 md:[&:nth-child(3n)]:pr-0 md:[&:nth-child(3n+1):nth-last-child(-n+3)]:border-b-0 md:[&:nth-child(3n+1):nth-last-child(-n+3)~li]:border-b-0",
            )}
          >
            {numbered && (
              <p className="text-mono-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
            )}
            <h3 className={cn("text-h3", numbered && "mt-3")}>{item.title}</h3>
            <p className="text-small measure mt-3 text-muted-foreground">
              {item.body}
            </p>
            {meta ? <div className="mt-4">{meta}</div> : null}
          </li>
        );
      })}
    </List>
  );
}
