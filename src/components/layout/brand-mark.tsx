import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * PLACEHOLDER MARK.
 *
 * Nemaa does not have an official logo yet. This is a temporary geometric "N"
 * so the site has a consistent mark in the navbar, footer, and favicon.
 * When the official logo arrives, replace the SVG in `BrandMark` (and
 * `src/app/icon.svg`) and nothing else needs to change.
 */
export function BrandMark({
  className,
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      <rect x="3" y="3" width="6" height="26" rx="1" fill="currentColor" />
      <rect x="23" y="3" width="6" height="26" rx="1" fill="currentColor" />
      <path d="M3 3h6l20 21v5h-6L3 8V3z" fill="var(--brand)" />
    </svg>
  );
}

export function Logo({
  className,
  markSize = 24,
}: {
  className?: string;
  markSize?: number;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-sm text-foreground",
        className,
      )}
      aria-label={`${site.name} home`}
    >
      <BrandMark size={markSize} />
      <span className="text-[1.0625rem] font-semibold tracking-[-0.01em]">
        {site.shortName}
      </span>
    </Link>
  );
}
