import { ChapterNav } from "@/components/shared/chapter-nav";

export type ChapterSpec = { id: string; label: string };

/** Chapter navigation for a page. Pair with `Chapter` sections that use the same ids. */
export function PageChapters({ chapters }: { chapters: ChapterSpec[] }) {
  return <ChapterNav chapters={chapters} />;
}
