import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Chapter } from "@/components/shared/chapter";
import { ServiceScene } from "@/components/services/service-scene";
import { services } from "@/content/services";

/**
 * "What we build" as a run of screens: one overview, then one screen per
 * service with its miniature. The overview links down to each service.
 */
export function ServiceChapters() {
  return (
    <>
      <Chapter id="services" label="What we build">
        <Container className="py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-h1">
                What we build
                <span className="block text-muted-foreground">
                  Five areas, one system.
                </span>
              </h2>
              <p className="text-lede measure mt-6">
                Most systems we build touch a ledger, an API, and a workflow
                that used to be manual. Take one service or all five; they are
                designed to work together.
              </p>
            </div>
            <ol className="flex flex-col lg:col-span-6 lg:col-start-7">
              {services.map((service, index) => (
                <li key={service.slug} className="border-t border-border last:border-b">
                  <a
                    href={`#service-${service.slug}`}
                    className="group flex min-h-16 items-center gap-6 py-4 transition-colors hover:text-foreground"
                  >
                    <span className="text-mono-sm w-8 shrink-0 text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-h3 flex-1">{service.name}</span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Chapter>

      {services.map((service, index) => (
        <Chapter
          key={service.slug}
          id={`service-${service.slug}`}
          label={service.name}
        >
          <Container className="py-10 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-mono-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </p>
                <h2 className="text-h1 mt-4">{service.name}</h2>
                <p className="text-lede measure mt-5">{service.summary}</p>
                <ul className="text-small mt-7 flex flex-col gap-2">
                  {service.capabilities.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-8">
                  <Link href={`/services#${service.slug}`}>About this service</Link>
                </Button>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <ServiceScene
                  slug={service.slug}
                  className="rounded-xl bg-card text-[0.9375rem] leading-6 shadow-panel [&_.text-mono-sm]:text-[0.9375rem] [&_p]:leading-7"
                />
              </div>
            </div>
          </Container>
        </Chapter>
      ))}
    </>
  );
}
