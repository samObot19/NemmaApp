/**
 * Social proof, kept out of the site until it is real.
 *
 * Both lists are empty on purpose. The "Trusted by" band and the
 * testimonials section render nothing while they are empty, so nothing
 * on the site claims a client or a quote that Nemaa has not confirmed.
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

/**
 * A client quote, exactly as the person approved it. When the list has
 * entries, the home page gains a "What clients say" chapter after the work.
 * Two or four entries fill the two-column grid.
 */
export interface Testimonial {
  /** Verbatim, as approved by the person quoted. Never paraphrased. */
  quote: string;
  name: string;
  role: string;
  /** The company name as they want it shown. */
  company: string;
  /**
   * ISO date of the written permission (an email is fine) to publish the
   * quote with this name and company. Never rendered; it records that
   * permission exists.
   */
  permissionOn: string;
  /**
   * Case study this quote is about. Case studies are anonymous, so only set
   * this if the client has also agreed to be named on that case study.
   */
  projectSlug?: string;
}

export const clients: ClientLogo[] = [];

export const testimonials: Testimonial[] = [];
