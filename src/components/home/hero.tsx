import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { SystemDiagram } from "@/components/home/system-diagram";
import { services } from "@/content/services";

export function Hero() {
  return (
    <Container as="section" className="pt-16 pb-16 lg:pt-24 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="min-w-0 lg:col-span-6">
          <h1 className="text-display max-w-[15ch]">
            Software engineering for the systems a business runs on.
          </h1>
          <p className="text-lede mt-6 measure">
            Nemma designs and builds accounting and fintech systems, AI
            applications, automation, and the backend infrastructure behind
            them. Built to be correct, maintainable, and operated for years.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact?type=project">
                Start a project
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/work">See our work</Link>
            </Button>
          </div>
          <Separator className="mt-10 hidden lg:block" />
          <ul className="mt-5 hidden flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground lg:flex">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex min-h-6 items-center py-0.5 transition-colors hover:text-foreground"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 lg:col-span-6 lg:pl-8">
          <SystemDiagram />
        </div>
      </div>
    </Container>
  );
}
