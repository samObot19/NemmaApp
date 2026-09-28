import type { ServiceSlug } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * One crisp geometric diagram per service: boxes, lines, and dots that
 * sketch the shape of the system, never an illustration. Decorative, so
 * hidden from assistive technology; the row's text carries the meaning.
 */
export function ServiceGlyph({
  slug,
  className,
}: {
  slug: ServiceSlug;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 96"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-40 text-border-strong", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {glyphs[slug]}
    </svg>
  );
}

const brand = "var(--brand)";

const glyphs: Record<ServiceSlug, React.ReactNode> = {
  // Browser window, API, database: the shape of a product.
  "software-engineering": (
    <>
      <rect x="10" y="10" width="76" height="52" rx="4" />
      <path d="M10 22h76" />
      <circle cx="17" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="23" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <path d="M20 34h36M20 44h48M20 54h28" />
      <rect x="108" y="18" width="42" height="18" rx="3" stroke={brand} />
      <path d="M86 27h22" stroke={brand} />
      <ellipse cx="129" cy="62" rx="16" ry="5" />
      <path d="M113 62v16c0 2.8 7.2 5 16 5s16-2.2 16-5V62" />
      <path d="M129 36v21" stroke={brand} />
    </>
  ),
  // A ledger: debit and credit columns that balance.
  "fintech-accounting": (
    <>
      <path d="M12 18h136" />
      <path d="M12 34h64M12 50h58M12 66h70" />
      <path d="M104 34h12M104 50h20M104 66h16" />
      <path d="M126 34h22M134 50h14M130 66h18" stroke={brand} />
      <path d="M12 80h136" />
      <path d="M96 22v62" strokeDasharray="2 4" />
      <rect x="104" y="86" width="44" height="6" rx="1" fill={brand} stroke="none" />
      <rect x="12" y="86" width="44" height="6" rx="1" fill="currentColor" stroke="none" />
    </>
  ),
  // Documents into retrieval into a model into an answer.
  "ai-systems": (
    <>
      <rect x="10" y="20" width="26" height="34" rx="3" />
      <path d="M16 30h14M16 38h14M16 46h9" />
      <path d="M36 37h16" />
      <rect x="52" y="24" width="8" height="8" rx="1" fill="currentColor" stroke="none" />
      <rect x="62" y="24" width="8" height="8" rx="1" fill="currentColor" stroke="none" />
      <rect x="52" y="34" width="8" height="8" rx="1" fill={brand} stroke="none" />
      <rect x="62" y="34" width="8" height="8" rx="1" fill="currentColor" stroke="none" />
      <rect x="52" y="44" width="8" height="8" rx="1" fill="currentColor" stroke="none" />
      <rect x="62" y="44" width="8" height="8" rx="1" fill={brand} stroke="none" />
      <path d="M70 37h16" />
      <circle cx="102" cy="37" r="14" stroke={brand} />
      <circle cx="102" cy="37" r="4" fill={brand} stroke="none" />
      <path d="M116 37h12" />
      <rect x="128" y="26" width="24" height="22" rx="3" />
      <path d="M134 34h12M134 40h8" />
      <path d="M102 51v20h-40" strokeDasharray="2 4" />
    </>
  ),
  // Services, a queue, a cache, and the store underneath.
  "backend-api": (
    <>
      <rect x="10" y="12" width="40" height="18" rx="3" />
      <rect x="10" y="38" width="40" height="18" rx="3" />
      <rect x="10" y="64" width="40" height="18" rx="3" />
      <path d="M50 21h20v52H50M70 47h14" />
      <rect x="84" y="41" width="8" height="12" rx="1" fill="currentColor" stroke="none" />
      <rect x="95" y="41" width="8" height="12" rx="1" fill="currentColor" stroke="none" />
      <rect x="106" y="41" width="8" height="12" rx="1" fill={brand} stroke="none" />
      <path d="M114 47h12" />
      <rect x="126" y="12" width="24" height="18" rx="3" stroke={brand} />
      <path d="M126 21h-8v26h8" />
      <ellipse cx="138" cy="66" rx="12" ry="4" />
      <path d="M126 66v12c0 2.2 5.4 4 12 4s12-1.8 12-4V66M138 47v15" />
    </>
  ),
  // A trigger, ordered steps, and a decision that branches.
  automation: (
    <>
      <circle cx="18" cy="48" r="8" stroke={brand} />
      <circle cx="18" cy="48" r="2.5" fill={brand} stroke="none" />
      <path d="M26 48h14" />
      <rect x="40" y="39" width="26" height="18" rx="3" />
      <path d="M66 48h14" />
      <rect x="80" y="39" width="26" height="18" rx="3" />
      <path d="M106 48h10" />
      <path d="M116 48l10-10 10 10-10 10z" stroke={brand} />
      <path d="M126 38V22h20M126 58v16h20" />
      <path d="M143 18l4 4-4 4M143 70l4 4-4 4" />
      <path d="M46 48h14M86 48h14" strokeDasharray="2 3" />
    </>
  ),
};
