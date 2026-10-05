import { site } from "@/content/site";
import type { SectionCopy } from "@/types/content";

/** The office chapter, shared by the home and contact pages. */
export const locationHeading: SectionCopy = {
  title: "Where we are",
  lede: `Our office is in ${site.address.district}, ${site.address.locality}. If you would rather talk in person, say so when you get in touch and we will arrange a time.`,
};
