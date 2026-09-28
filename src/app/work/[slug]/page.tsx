import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CheckList } from "@/components/shared/check-list";
import { CtaBand } from "@/components/shared/cta-band";
import { SectionHeading } from "@/components/shared/section-heading";
import { TagList } from "@/components/shared/tag";
import { ArchitectureDiagram } from "@/components/work/architecture-diagram";
import { ProjectRow } from "@/components/work/project-row";
import {
  getProject,
  getRelatedProjects,
  projects,
  projectStatusLabel,
} from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((text) => (
        <p key={text} className="text-body measure text-muted-foreground">
          {text}
        </p>
      ))}
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 border-t border-border py-10 lg:grid-cols-12 lg:gap-8 lg:py-12">
      <h2 className="text-h3 lg:col-span-4">{title}</h2>
      <div className="lg:col-span-8">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  return (
    <>
      <Container as="article" className="pt-16 pb-16 lg:pt-24 lg:pb-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="inline-flex min-h-6 items-center">
                <Link href="/work">Work</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.category}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="text-h1">{project.title}</h1>
            <p className="text-lede mt-6 measure">{project.overview}</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm lg:col-span-4 lg:col-start-9 lg:grid-cols-1 lg:border-l lg:border-border lg:pl-8">
            <div>
              <dt className="text-muted-foreground">Category</dt>
              <dd className="mt-1 font-medium">{project.category}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Status</dt>
              <dd className="mt-1 font-medium">
                {projectStatusLabel[project.status]}
              </dd>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <dt className="text-muted-foreground">Technologies</dt>
              <dd className="mt-2">
                <TagList items={project.technologies} />
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-16">
          <Block title="The challenge">
            <Prose paragraphs={project.challenge} />
          </Block>

          <Block title="Our approach">
            <ol className="flex flex-col gap-6">
              {project.approach.map((step, index) => (
                <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="text-mono-sm pt-1 text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body measure">{step}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Architecture">
            <ArchitectureDiagram
              layers={project.architecture}
              title={`${project.slug}.architecture`}
            />
            <h3 className="mt-8 text-base font-semibold">Engineering highlights</h3>
            <CheckList items={project.engineering} className="mt-4" />
          </Block>

          <Block title="Key capabilities">
            <CheckList items={project.capabilities} columns={2} />
          </Block>

          {project.outcome && project.outcome.length > 0 && (
            <Block title="Outcome">
              <Prose paragraphs={project.outcome} />
            </Block>
          )}
        </div>
      </Container>

      {related.length > 0 && (
        <Container as="section" className="pb-16 lg:pb-24">
          <SectionHeading
            title="Related work"
            action={
              <Button asChild variant="link">
                <Link href="/work">All case studies</Link>
              </Button>
            }
          />
          <ul className="mt-4 divide-y divide-border">
            {related.map((item) => (
              <ProjectRow key={item.slug} project={item} />
            ))}
          </ul>
        </Container>
      )}

      <CtaBand
        title="Building something similar?"
        body="We can talk through the problem and how we would approach it before any commitment."
      />
    </>
  );
}
