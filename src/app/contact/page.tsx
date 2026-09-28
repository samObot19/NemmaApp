import type { Metadata } from "next";
import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationMap } from "@/components/contact/location-map";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageHeader } from "@/components/shared/page-header";
import { site } from "@/content/site";
import { inquiryTypes } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project, ask about working together, or introduce yourself. Contact Nemma Technology.",
  path: "/contact",
});

const inquiryNotes: Record<(typeof inquiryTypes)[number]["value"], string> = {
  project:
    "You need software designed or built: a new system, a rebuild, or a hard problem inside an existing one.",
  partnership:
    "You want to work with Nemma as a partner, a vendor, or on a shared product.",
  careers:
    "You are an engineer and want to tell us about yourself and what you have built.",
  general: "Anything else, including press and speaking.",
};

function ContactFormSkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-hidden="true">
      <div className="grid gap-6 sm:grid-cols-2">
        <Skeleton className="h-11" />
        <Skeleton className="h-11" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Skeleton className="h-11" />
        <Skeleton className="h-11" />
      </div>
      <Skeleton className="h-40" />
      <Skeleton className="h-12 w-40" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        lede="Tell us what you are working on. We reply with a clear view of how we would approach it, and whether we are the right fit."
      />
      <Container as="section" className="pb-16 lg:pb-24">
        <div className="grid gap-12 border-t border-border pt-10 lg:grid-cols-12 lg:gap-8">
          <aside className="order-2 lg:order-1 lg:col-span-4">
            <dl className="divide-y divide-border">
              {inquiryTypes.map((type) => (
                <div key={type.value} className="py-4 first:pt-0">
                  <dt className="text-sm font-semibold">{type.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {inquiryNotes[type.value]}
                  </dd>
                </div>
              ))}
            </dl>
            <Separator className="mt-8" />
            <div className="flex flex-col gap-5 pt-6 text-sm">
              <div>
                <p className="text-muted-foreground">Prefer email?</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link mt-1 inline-flex min-h-6 items-center font-medium"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Visit us</p>
                {site.address.lines.map((line) => (
                  <p key={line} className="mt-1 first-of-type:mt-1">
                    {line}
                  </p>
                ))}
                <a
                  href="#location"
                  className="link mt-1 inline-flex min-h-6 items-center font-medium"
                >
                  See the map
                </a>
              </div>
            </div>
          </aside>
          <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
            <Suspense fallback={<ContactFormSkeleton />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
      <Container as="section" id="location" className="scroll-mt-24 pb-16 lg:pb-24">
        <SectionHeading
          title="Where we are"
          lede="Our office is in Bole, Addis Ababa. If you would rather talk in person, say so in your message and we will arrange a time."
        />
        <div className="mt-8">
          <LocationMap />
        </div>
      </Container>
    </>
  );
}
