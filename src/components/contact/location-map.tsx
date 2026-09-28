import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { addressText, mapEmbedUrl, mapLinkUrl } from "@/lib/location";

/**
 * Office map. The iframe is lazy-loaded so it costs nothing until the
 * visitor scrolls to it; the address and link beside it work without it.
 */
export function LocationMap() {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      <iframe
        src={mapEmbedUrl}
        title={`Map showing the ${site.shortName} office at ${addressText}`}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="block aspect-[16/9] w-full border-0 sm:aspect-[16/7]"
      />
      <figcaption className="flex flex-col gap-3 border-t border-border p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
          <div className="text-small">
            {site.address.lines.map((line, index) => (
              <p key={line} className={index === 0 ? "font-medium" : "text-muted-foreground"}>
                {line}
              </p>
            ))}
          </div>
        </div>
        <Button asChild variant="outline" size="sm">
          <a href={mapLinkUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </Button>
      </figcaption>
    </figure>
  );
}
