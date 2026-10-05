import { site } from "@/content/site";
import type { Faq, SectionCopy } from "@/types/content";

export const faqHeading: SectionCopy = {
  title: "Everything you need to know",
  qualifier: "before we talk.",
  lede: "Short answers to what people usually ask first.",
};

/**
 * Answers built from facts already on the site are filled in; the rest are
 * `null` and preview only in development.
 */
export const faqs: Faq[] = [
  {
    // From the services and contact pages.
    question: "What kinds of projects do you take on?",
    answer:
      "Business software where correctness matters: accounting and fintech systems, AI applications, automation, and the backend services underneath them. A new system, a rebuild, or a hard problem inside an existing one.",
  },
  {
    // Backed by the accounting platform case study.
    question: "Can you work on a system we already have?",
    answer:
      "Yes. Some of our work is backend engineering and integrations on an existing platform, done inside its conventions and its review process.",
    link: { label: "Read that case study", href: "/work/accounting-platform-services" },
  },
  {
    question: "Where is your team?",
    answer: `Our office is in ${site.address.district}, ${site.address.locality}, on East Africa Time (UTC+3).`,
  },
  // TODO(nemaa): how engagements are priced (fixed scope, time and materials, retainer).
  { question: "How do you price a project?", answer: null },
  // TODO(nemaa): a typical range, and what drives it.
  { question: "How long does a typical project take?", answer: null },
  // TODO(nemaa): who owns the code and IP at the end of an engagement.
  { question: "Who owns the code you write for us?", answer: null },
  // TODO(nemaa): whether you sign NDAs, and when.
  { question: "Will you sign an NDA before we share details?", answer: null },
  // TODO(nemaa): support, maintenance, and handover after launch.
  { question: "What happens after launch?", answer: null },
  {
    // From the contact page.
    question: "How do we get started?",
    answer: `Send a message through the contact page or write to ${site.email}. We reply with a clear view of how we would approach it, and whether we are the right fit.`,
    link: { label: "Start a project", href: "/contact?type=project" },
  },
];

export const faqIsReady = (faq: Faq) => faq.answer !== null;
