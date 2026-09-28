"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

/**
 * Navigation link with the current page marked by colour and a hairline.
 * Callers set the height: the desktop navbar fills its 64px bar so the
 * target is generous and the underline sits on the header's bottom rule.
 */
export function NavLink({
  href,
  children,
  className,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "relative inline-flex items-center rounded-sm text-[0.9375rem] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground active:text-foreground",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-brand after:opacity-0 after:transition-opacity",
        active && "text-foreground after:opacity-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
