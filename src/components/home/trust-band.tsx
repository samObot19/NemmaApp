import Image from "next/image";

import { Container } from "@/components/layout/container";
import { clients } from "@/content/social-proof";

/** Client logos. Renders nothing until `clients` has verified entries. */
export function TrustBand() {
  if (clients.length === 0) return null;

  return (
    <Container as="div" className="pb-16 lg:pb-24" aria-labelledby="trust-heading">
      <div className="border-t border-border pt-6">
        <h2 id="trust-heading" className="text-sm text-muted-foreground">
          Businesses we have built for
        </h2>
        <ul className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <li key={client.name} className="flex h-8 items-center">
              {client.href ? (
                <a href={client.href} className="inline-flex items-center" rel="noreferrer">
                  <Image src={client.src} alt={client.name} width={client.width} height={32} className="h-8 w-auto opacity-80 transition-opacity hover:opacity-100" />
                </a>
              ) : (
                <Image src={client.src} alt={client.name} width={client.width} height={32} className="h-8 w-auto opacity-80" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
