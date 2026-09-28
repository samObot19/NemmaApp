"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { announcement } from "@/content/site";

const storageKey = (id: string) => `nemaa:announcement:${id}:dismissed`;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function isDismissed() {
  if (!announcement) return true;
  try {
    return sessionStorage.getItem(storageKey(announcement.id)) === "1";
  } catch {
    return false;
  }
}

function dismiss() {
  if (!announcement) return;
  try {
    sessionStorage.setItem(storageKey(announcement.id), "1");
  } catch {
    // Storage unavailable; the bar simply returns on the next load.
  }
  listeners.forEach((listener) => listener());
}

/** One-line notice above the navbar, dismissible for the browser session. */
export function AnnouncementBar() {
  // Server render assumes not dismissed; the client corrects after hydration.
  const dismissed = useSyncExternalStore(subscribe, isDismissed, () => false);

  if (!announcement || dismissed) return null;

  return (
    <div className="border-b border-border bg-accent text-sm text-foreground">
      <div className="mx-auto flex w-full max-w-[75rem] items-center justify-between gap-4 px-6 lg:px-8">
        <p className="flex min-h-11 flex-wrap items-center gap-x-3 py-2">
          <span>{announcement.text}</span>
          <Link
            href={announcement.href}
            className="link font-medium"
          >
            {announcement.label}
          </Link>
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="-mr-2 size-9 shrink-0 hover:bg-brand-soft"
          onClick={dismiss}
          aria-label="Dismiss notice"
        >
          <X />
        </Button>
      </div>
    </div>
  );
}
