import { site } from "@/content/site";

const query = encodeURIComponent(site.address.mapQuery);

/** Embedded map (no API key needed) and the matching "open in maps" link. */
export const mapEmbedUrl = `https://www.google.com/maps?q=${query}&z=16&output=embed`;
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
export const addressText = site.address.lines.join(", ");
