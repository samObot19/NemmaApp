"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArchitectureDiagram } from "@/components/work/architecture-diagram";
import { projectStatusLabel } from "@/content/projects";
import type { Project } from "@/types/content";

/**
 * Selected work as a tabbed showcase: pick a system, see its architecture
 * and what Nemaa delivered. Real case studies, no figures.
 */
export function WorkShowcase({ projects }: { projects: Project[] }) {
  const first = projects[0];
  if (!first) return null;

  return (
    <Tabs defaultValue={first.slug} className="gap-6">
      <TabsList className="h-auto flex-wrap justify-start gap-1 rounded-lg bg-transparent p-0">
        {projects.map((project) => (
          <TabsTrigger
            key={project.slug}
            value={project.slug}
            className="h-10 flex-none rounded-full border border-border bg-transparent px-4 text-sm text-muted-foreground data-active:border-border-strong data-active:bg-card data-active:text-foreground"
          >
            {project.category}
          </TabsTrigger>
        ))}
      </TabsList>
      {projects.map((project) => (
        <TabsContent key={project.slug} value={project.slug}>
          <article className="panel grid gap-8 p-6 lg:grid-cols-12 lg:p-8">
            <div className="flex flex-col lg:col-span-5">
              <p className="text-label">{projectStatusLabel[project.status]}</p>
              <h3 className="text-h3 mt-2">
                <Link href={`/work/${project.slug}`} className="link no-underline hover:underline">
                  {project.title}
                </Link>
              </h3>
              <p className="text-body measure mt-3 text-muted-foreground">
                {project.summary}
              </p>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-label">Our role</dt>
                  <dd className="text-small mt-1 font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-label">Delivered</dt>
                  <dd className="text-small mt-1">
                    <ul className="flex flex-col gap-1">
                      {project.scope.slice(0, 4).map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <div className="mt-auto pt-8">
                <Button asChild variant="outline">
                  <Link href={`/work/${project.slug}`}>Read the case study</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ArchitectureDiagram
                layers={project.architecture}
                title={`${project.slug}.architecture`}
              />
            </div>
          </article>
        </TabsContent>
      ))}
    </Tabs>
  );
}
