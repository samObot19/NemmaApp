"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Right-edge chapter markers for the home page. Watches which chapter is in
 * view and enables gentle snapping while the page is mounted.
 */
export function ChapterNav({
  chapters,
}: {
  chapters: { id: string; label: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("chapters");

    const nodes = [...document.querySelectorAll<HTMLElement>("[data-chapter]")];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive((visible.target as HTMLElement).id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    nodes.forEach((n) => observer.observe(n));

    return () => {
      observer.disconnect();
      root.classList.remove("chapters");
    };
  }, []);

  if (chapters.length === 0) return null;

  return (
    <nav
      aria-label="Chapters"
      className="fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ol className="flex flex-col gap-3">
        {chapters.map((chapter) => {
          const current = chapter.id === active;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={current ? "true" : undefined}
                className="group flex min-h-6 items-center justify-end gap-3 rounded-sm"
              >
                <span className="text-label pointer-events-none translate-x-1 opacity-0 transition-[opacity,transform] duration-150 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
                  {chapter.label}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "block size-2 rounded-full border border-border-strong transition-colors duration-150",
                    current ? "border-brand bg-brand" : "bg-transparent group-hover:bg-border-strong",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
