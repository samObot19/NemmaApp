/**
 * Social proof, kept out of the site until it is real.
 *
 * Both lists are empty on purpose. The "Trusted by" band and the
 * testimonials section render nothing while they are empty, so nothing
 * on the site claims a client or a quote that Nemma has not confirmed.
 * Add entries here (with permission from the people quoted) and the
 * sections appear automatically.
 */

export interface ClientLogo {
  name: string;
  /** Path under /public, e.g. "/clients/acme.svg". Monochrome works best. */
  src: string;
  /** Rendered width in px at 32px height. */
  width: number;
  href?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const clients: ClientLogo[] = [];

export const testimonials: Testimonial[] = [];
