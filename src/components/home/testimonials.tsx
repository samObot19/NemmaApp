import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/content/social-proof";

/**
 * Client quotes. Renders nothing until `testimonials` has verified entries;
 * the home page adds its chapter only then.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Container as="div" className="py-10 lg:py-14">
      <SectionHeading
        title="What clients say"
        size="lg"
        lede="In their words, with their permission."
      />
      <ul className="mt-4 grid gap-px border-t border-border md:grid-cols-2">
        {testimonials.map((item) => (
          <li
            key={`${item.name}-${item.company}`}
            className="border-b border-border py-8 md:px-8 md:[&:nth-child(2n+1)]:border-r md:[&:nth-child(2n+1)]:pl-0 md:[&:nth-child(2n)]:pr-0 md:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <figure className="flex flex-col gap-5">
              <blockquote className="text-body measure">
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="text-muted-foreground">
                  , {item.role}, {item.company}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Container>
  );
}
