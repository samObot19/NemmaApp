"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * After client-side navigation, move focus to the main content region so
 * keyboard and screen-reader users start at the new page, not the navbar.
 * The initial page load is left alone.
 */
export function RouteFocus() {
  const pathname = usePathname();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    const main = document.getElementById("main");
    if (main) {
      main.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
