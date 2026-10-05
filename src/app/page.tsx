import { Chapter } from "@/components/shared/chapter";
import { ChapterNav } from "@/components/shared/chapter-nav";
import { LocationSection } from "@/components/contact/location-section";
import { Collaboration } from "@/components/home/collaboration";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { Industries } from "@/components/home/industries";
import { Numbers } from "@/components/home/numbers";
import { ServiceChapters } from "@/components/home/service-chapters";
import { Technology } from "@/components/home/technology";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBand } from "@/components/home/trust-band";
import { WhyNemaa } from "@/components/home/why-nemaa";
import { WorkPreview } from "@/components/home/work-preview";
import { CtaBand } from "@/components/shared/cta-band";
import { statIsReady, stats } from "@/content/numbers";
import { services } from "@/content/services";
import { testimonials } from "@/content/social-proof";
import { publishable } from "@/lib/placeholders";

// Chapters that wait for real content: the dot and the screen share one flag,
// so the navigation never points at an empty screen.
const showTestimonials = testimonials.length > 0;
const showNumbers = publishable(stats, statIsReady).length > 0;

const chapters = [
  { id: "intro", label: "Intro" },
  { id: "services", label: "What we build" },
  ...services.map((service) => ({
    id: `service-${service.slug}`,
    label: service.name,
  })),
  { id: "work", label: "Selected work" },
  ...(showTestimonials ? [{ id: "testimonials", label: "What clients say" }] : []),
  { id: "process", label: "How we work" },
  { id: "why", label: "Why Nemaa" },
  { id: "industries", label: "Industries" },
  ...(showNumbers ? [{ id: "numbers", label: "By the numbers" }] : []),
  { id: "technology", label: "Technology" },
  { id: "collaboration", label: "Working together" },
  { id: "faq", label: "FAQ" },
  { id: "location", label: "Where we are" },
  { id: "contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <ChapterNav chapters={chapters} />
      <Chapter id="intro" label="Intro" reveal={false}>
        <Hero />
        <TrustBand />
      </Chapter>
      <ServiceChapters />
      <Chapter id="work" label="Selected work">
        <WorkPreview />
      </Chapter>
      {showTestimonials && (
        <Chapter id="testimonials" label="What clients say">
          <Testimonials />
        </Chapter>
      )}
      <Chapter id="process" label="How we work">
        <HowWeWork />
      </Chapter>
      <Chapter id="why" label="Why Nemaa">
        <WhyNemaa />
      </Chapter>
      <Chapter id="industries" label="Industries">
        <Industries />
      </Chapter>
      {showNumbers && (
        <Chapter id="numbers" label="By the numbers">
          <Numbers />
        </Chapter>
      )}
      <Chapter id="technology" label="Technology">
        <Technology />
      </Chapter>
      <Chapter id="collaboration" label="Working together">
        <Collaboration />
      </Chapter>
      <Chapter id="faq" label="FAQ">
        <Faq />
      </Chapter>
      <Chapter id="location" label="Where we are">
        <LocationSection />
      </Chapter>
      <Chapter id="contact" label="Contact" className="justify-stretch" reveal={false}>
        <CtaBand fill />
      </Chapter>
    </>
  );
}
