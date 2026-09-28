import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/brand-mark";
import { services } from "@/content/services";
import { footerGroups, site } from "@/content/site";
import { mapLinkUrl } from "@/lib/location";

const linkClass =
  "text-small inline-flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground sm:min-h-8";

export function Footer() {
  const groups = [
    {
      heading: "Services",
      items: services.map((service) => ({
        label: service.name,
        href: `/services#${service.slug}`,
      })),
    },
    ...footerGroups,
  ];

  return (
    <footer className="border-t border-border">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo markSize={20} />
            <p className="text-small mt-4 max-w-sm text-muted-foreground">
              {site.description}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link text-small mt-5 inline-flex min-h-11 items-center font-medium sm:min-h-6"
            >
              {site.email}
            </a>
            <address className="text-small mt-3 not-italic text-muted-foreground">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-foreground sm:min-h-6"
              >
                Open in Google Maps
              </a>
            </address>
          </div>
          {groups.map((group, index) => (
            <div
              key={group.heading}
              className={index === 0 ? "lg:col-span-4" : "lg:col-span-2"}
            >
              <h2 className="text-sm font-semibold">{group.heading}</h2>
              <ul className="mt-3 flex flex-col gap-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="mt-12" />
        <div className="flex flex-col gap-3 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Accounting, fintech, AI, and automation software.</p>
        </div>
      </Container>
    </footer>
  );
}
