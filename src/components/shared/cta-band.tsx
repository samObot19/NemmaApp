import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

/** The closing call to action: the second of the site's two dark bands. */
export function CtaBand({
  title = "Have a system to build?",
  body = "Tell us what you are trying to do. We will reply with a clear view of how we would approach it.",
  primary = { label: "Start a project", href: "/contact?type=project" },
  secondary = { label: "See our work", href: "/work" },
  fill = false,
}: {
  /** Fill the available height (used as the home page's last chapter). */
  fill?: boolean;
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className={fill ? "relative flex flex-1 flex-col overflow-hidden border-t border-border bg-card" : "relative overflow-hidden border-t border-border bg-card"}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-brand/10 blur-3xl"
      />
      <Container className={fill ? "section relative flex flex-1 flex-col justify-center" : "section relative"}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="text-h1">{title}</h2>
            <p className="text-lede mt-4 measure">{body}</p>
            <p className="mt-6 text-sm text-muted-foreground">
              Or write to{" "}
              <a
                href={`mailto:${site.email}`}
                className="link inline-flex min-h-6 items-center font-medium"
              >
                {site.email}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button asChild size="lg">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
