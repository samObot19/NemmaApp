import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SystemDiagram } from "@/components/home/system-diagram";

export function Hero() {
  return (
    <Container as="div" className="pt-12 pb-10 sm:pt-16 lg:pt-20 lg:pb-12">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <h1 className="text-display max-w-[15ch] lg:col-span-9">
          Software engineering
          <span className="block text-foreground/70">
            for the systems a business runs on.
          </span>
        </h1>
        <p className="text-lede measure lg:col-span-7">
          Nemaa designs and builds accounting and fintech systems, AI
          applications, automation, and the backend infrastructure behind
          them. Built to be correct, maintainable, and operated for years.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-12">
          <Button asChild size="lg">
            <Link href="/contact?type=project">Start a project</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/work">See our work</Link>
          </Button>
        </div>
      </div>

      <div className="relative mt-14 lg:mt-20">
        {/* Light source behind the console: an offset, blurred teal wash. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
        />
        <div className="relative">
          <SystemDiagram />
        </div>
      </div>

      <a
        href="#services"
        className="text-label mx-auto mt-12 flex w-fit flex-col items-center gap-2 rounded-sm transition-colors hover:text-foreground lg:mt-16"
      >
        <span aria-hidden="true" className="block h-8 w-px bg-border-strong" />
        Scroll
      </a>
    </Container>
  );
}
