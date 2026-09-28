import type { ServiceSlug } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * A miniature of the kind of interface each service produces: a browser,
 * a ledger, an extraction, a terminal, a workflow. Crisp HTML geometry with
 * illustrative values, never a screenshot and never a claim. Decorative:
 * the panel's text carries the meaning.
 */
export function ServiceScene({
  slug,
  className,
}: {
  slug: ServiceSlug;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "text-mono-sm select-none overflow-hidden rounded-lg border border-border bg-background text-xs text-muted-foreground",
        className,
      )}
    >
      {scenes[slug]}
    </div>
  );
}

const Row = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex items-center gap-3 border-b border-border px-3 py-1.5 last:border-b-0", className)}>
    {children}
  </div>
);

const Bar = ({ w, strong }: { w: string; strong?: boolean }) => (
  <span className={cn("block h-1.5 rounded-full", strong ? "bg-foreground/50" : "bg-foreground/20", w)} />
);

const scenes: Record<ServiceSlug, React.ReactNode> = {
  "software-engineering": (
    <div>
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-foreground/20" />
        <span className="size-2 rounded-full bg-foreground/20" />
        <span className="size-2 rounded-full bg-foreground/20" />
        <span className="ml-3 h-4 flex-1 rounded-sm bg-foreground/5" />
      </div>
      <div className="grid grid-cols-[5.5rem_1fr]">
        <div className="flex flex-col gap-2 border-r border-border p-3">
          <Bar w="w-12" strong />
          <Bar w="w-9" />
          <Bar w="w-10" />
          <Bar w="w-8" />
        </div>
        <div>
          <Row><span className="w-12 text-foreground">Invoice</span><span className="flex-1">INV-0142</span><span className="rounded-[3px] border border-border px-1 text-foreground">Paid</span></Row>
          <Row><span className="w-12 text-foreground">Invoice</span><span className="flex-1">INV-0143</span><span className="rounded-[3px] border border-border px-1">Due</span></Row>
          <Row><span className="w-12 text-foreground">Invoice</span><span className="flex-1">INV-0144</span><span className="rounded-[3px] border border-border px-1">Draft</span></Row>
        </div>
      </div>
    </div>
  ),
  "fintech-accounting": (
    <div>
      <Row className="text-foreground"><span className="flex-1">Account</span><span className="w-14 text-right">Debit</span><span className="w-14 text-right">Credit</span></Row>
      <Row><span className="flex-1">1200 Receivables</span><span className="w-14 text-right">1,250.00</span><span className="w-14 text-right">—</span></Row>
      <Row><span className="flex-1">4000 Revenue</span><span className="w-14 text-right">—</span><span className="w-14 text-right">1,250.00</span></Row>
      <Row className="bg-card text-foreground"><span className="flex-1 flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" />Balanced</span><span className="w-14 text-right">1,250.00</span><span className="w-14 text-right">1,250.00</span></Row>
    </div>
  ),
  "ai-systems": (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 p-3">
      <div className="flex flex-col gap-2 rounded-md border border-border p-2.5">
        <Bar w="w-10" strong />
        <Bar w="w-full" />
        <Bar w="w-11/12" />
        <Bar w="w-2/3" />
        <Bar w="w-5/6" />
      </div>
      <span className="text-foreground/50">→</span>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between gap-2"><span>vendor</span><span className="text-foreground">Acme Ltd</span></div>
        <div className="flex justify-between gap-2"><span>total</span><span className="text-foreground">4,180.00</span></div>
        <div className="flex justify-between gap-2"><span>due</span><span className="text-foreground">30 days</span></div>
        <div className="flex justify-between gap-2"><span>confidence</span><span className="flex items-center gap-1.5 text-foreground"><span className="size-1.5 rounded-full bg-brand" />high</span></div>
      </div>
    </div>
  ),
  "backend-api": (
    <div className="p-3 leading-5">
      <p><span className="text-foreground/50">$</span> <span className="text-foreground">deploy api</span> --env production</p>
      <p>migrations   3 applied</p>
      <p>health       GET /health → 200 OK</p>
      <p>queue        workers ready</p>
      <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" /><span className="text-foreground">live</span></p>
    </div>
  ),
  automation: (
    <div className="p-3">
      <ol className="flex flex-col gap-2">
        {[
          ["Invoice received", "trigger"],
          ["Extract and match", "done"],
          ["Post to ledger", "done"],
          ["Manager approval", "waiting"],
        ].map(([step, state], i, arr) => (
          <li key={step} className="grid grid-cols-[0.75rem_1fr_auto] items-center gap-2">
            <span className="relative flex justify-center">
              <span className={cn("size-1.5 rounded-full", state === "waiting" ? "border border-border-strong" : "bg-brand")} />
              {i < arr.length - 1 && <span className="absolute top-2.5 h-3 w-px bg-border-strong" />}
            </span>
            <span className="text-foreground">{step}</span>
            <span className="rounded-[3px] border border-border px-1">{state}</span>
          </li>
        ))}
      </ol>
    </div>
  ),
};
