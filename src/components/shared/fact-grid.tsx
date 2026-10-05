import { cn } from "@/lib/utils";

/**
 * Facts set in ruled cells: a label over its value, cells separated by
 * hairlines with no backgrounds. The first cell in each row sits on the
 * container edge, the last row carries no bottom rule, and a partial last
 * row ends without a stray side rule. `gridColumns` picks the column count
 * for a varying list.
 */
export function FactGrid({
  columns,
  children,
  className,
}: {
  columns: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid border-t border-border",
        (columns === 2 || columns === 4) &&
          "sm:grid-cols-2 sm:[&>div]:px-6 sm:[&>div:nth-child(2n+1):not(:last-child)]:border-r sm:[&>div:nth-child(2n+1)]:pl-0 sm:[&>div:nth-child(2n)]:pr-0 sm:[&>div:nth-child(2n+1):nth-last-child(-n+2)]:border-b-0 sm:[&>div:nth-child(2n+1):nth-last-child(-n+2)~div]:border-b-0",
        columns === 3 &&
          "md:grid-cols-3 md:[&>div]:px-6 md:[&>div:not(:nth-child(3n)):not(:last-child)]:border-r md:[&>div:nth-child(3n+1)]:pl-0 md:[&>div:nth-child(3n)]:pr-0 md:[&>div:nth-child(3n+1):nth-last-child(-n+3)]:border-b-0 md:[&>div:nth-child(3n+1):nth-last-child(-n+3)~div]:border-b-0",
        // Four columns build on the two-column tablet layout above.
        columns === 4 &&
          "lg:grid-cols-4 lg:[&>div:not(:nth-child(4n)):not(:last-child)]:border-r lg:[&>div:nth-child(4n+2)]:pr-6 lg:[&>div:nth-child(4n+3)]:pl-6 lg:[&>div:nth-child(4n+1):nth-last-child(-n+4)]:border-b-0 lg:[&>div:nth-child(4n+1):nth-last-child(-n+4)~div]:border-b-0",
        className,
      )}
    >
      {children}
    </dl>
  );
}

export function FactCell({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border py-5 last:border-b-0">
      <dt className="text-label">{term}</dt>
      <dd className="mt-2">{children}</dd>
    </div>
  );
}
