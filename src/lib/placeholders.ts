/**
 * Content waiting on real input from Nemaa (`NeedsInput` values that are
 * still `null`) previews in `next dev`, marked as such, and never reaches a
 * production build.
 */
export const showPlaceholders = process.env.NODE_ENV === "development";

/** Every item in development; only the ready ones in production. */
export function publishable<T>(items: T[], isReady: (item: T) => boolean): T[] {
  return showPlaceholders ? items : items.filter(isReady);
}
