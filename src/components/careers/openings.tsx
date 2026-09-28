import Link from "next/link";
import { Button } from "@/components/ui/button";
import { openings } from "@/content/careers";
import { site } from "@/content/site";

export function Openings() {
  if (openings.length === 0) {
    return (
      <div className="mt-4 grid gap-6 border-t border-border py-10 lg:grid-cols-12 lg:py-12">
        <div className="lg:col-span-7">
          <h3 className="text-h3">We&rsquo;re always interested in meeting strong engineers.</h3>
          <p className="text-body measure mt-3 text-muted-foreground">
            There are no advertised roles right now. If you build backend
            services, web applications, or AI systems and want to work on
            software that businesses rely on, introduce yourself. Tell us what
            you have built and what you would like to build next.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end lg:self-start">
          <Button asChild size="lg">
            <Link href="/contact?type=careers">Introduce yourself</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${site.email}`}>Email us</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <ul className="mt-4 divide-y divide-border border-t border-border">
      {openings.map((job) => (
        <li key={job.title}>
          <Link
            href={job.href}
            className="grid gap-2 py-6 transition-colors hover:bg-card lg:grid-cols-12 lg:gap-8"
          >
            <h3 className="text-h3 lg:col-span-6">{job.title}</h3>
            <p className="text-sm text-muted-foreground lg:col-span-6">
              {job.team}, {job.location}, {job.type}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
