import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Landmark,
  Layers,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceScene } from "@/components/services/service-scene";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import type { ServiceSlug } from "@/types/content";

const icons: Record<ServiceSlug, LucideIcon> = {
  "software-engineering": Layers,
  "fintech-accounting": Landmark,
  "ai-systems": Bot,
  "backend-api": Server,
  automation: Workflow,
};

/**
 * The five service areas as raised panels that show a miniature of what
 * each one produces. The first panel is wider so the grid has a lead.
 * Each panel is one link.
 */
export function ServicePanels() {
  return (
    <Container as="section" className="section pt-0 lg:pt-0">
      <SectionHeading
        title="What we build"
        qualifier="Five areas, one system."
        lede="Most systems we build touch a ledger, an API, and a workflow that used to be manual. Take one service or all five; they are designed to work together."
        action={
          <Button asChild variant="link">
            <Link href="/services">All services in detail</Link>
          </Button>
        }
      />
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {services.map((service, index) => {
          const lead = index === 0;
          const Icon = icons[service.slug];
          return (
            <li
              key={service.slug}
              className={cn(
                "panel group relative flex flex-col p-6 transition-colors hover:border-border-strong hover:bg-popover focus-within:border-border-strong lg:p-7",
                lead ? "md:col-span-2 lg:col-span-4" : "lg:col-span-2",
              )}
            >
              <div className={cn("flex flex-1 flex-col", lead && "lg:grid lg:grid-cols-2 lg:gap-8")}>
                <div className="flex flex-col">
                  <h3 className="text-h3 flex items-center gap-2.5">
                    <Icon
                      className="size-5 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Link
                      href={`/services#${service.slug}`}
                      className="rounded-sm after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] focus-visible:outline-none focus-visible:after:ring-[3px] focus-visible:after:ring-ring"
                    >
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-small measure mt-3 text-muted-foreground">
                    {service.summary}
                  </p>
                  {lead && (
                    <ul className="text-small mt-5 flex flex-col gap-1.5">
                      {service.capabilities.slice(0, 4).map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <ServiceScene
                  slug={service.slug}
                  className={cn("mt-6", lead ? "lg:mt-0 lg:self-center" : "mt-auto")}
                />
              </div>
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
              >
                About this service
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </span>
            </li>
          );
        })}
      </ul>
      <p className="text-lede mt-8">
        <span className="text-foreground">Use one or all five.</span>{" "}
        Separate services, designed and built to run as one system.
      </p>
    </Container>
  );
}
