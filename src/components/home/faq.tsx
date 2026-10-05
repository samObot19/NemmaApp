import Link from "next/link";
import { Plus } from "lucide-react";

import { Container } from "@/components/layout/container";
import { NeedsInput } from "@/components/shared/needs-input";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqHeading, faqIsReady, faqs } from "@/content/faq";
import { site } from "@/content/site";
import { publishable } from "@/lib/placeholders";

/**
 * Questions as native disclosure rows beside the title: no client
 * JavaScript, keyboard and find-in-page for free. The shared `name` keeps
 * one answer open at a time, so the chapter stays close to one screen.
 */
export function Faq() {
  const items = publishable(faqs, faqIsReady);

  return (
    <Container as="div" className="py-10 lg:py-12">
      <SectionHeading size="lg" {...faqHeading}>
        <div className="border-t border-border">
          {items.map((faq) => (
            <details key={faq.question} name="faq" className="group border-b border-border">
              <summary className="text-body flex min-h-12 cursor-pointer list-none items-center justify-between gap-6 py-2.5 font-medium [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <div className="pb-5">
                {faq.answer !== null ? (
                  <p className="text-body measure text-muted-foreground">{faq.answer}</p>
                ) : (
                  <NeedsInput />
                )}
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="link text-small mt-3 inline-flex min-h-6 items-center font-medium"
                  >
                    {faq.link.label}
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Not covered here? Write to{" "}
          <a
            href={`mailto:${site.email}`}
            className="link inline-flex min-h-6 items-center font-medium"
          >
            {site.email}
          </a>
        </p>
      </SectionHeading>
    </Container>
  );
}
