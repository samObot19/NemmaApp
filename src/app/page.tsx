import { Chapter } from "@/components/shared/chapter";
import { ChapterNav } from "@/components/shared/chapter-nav";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { ServiceChapters } from "@/components/home/service-chapters";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBand } from "@/components/home/trust-band";
import { WorkPreview } from "@/components/home/work-preview";
import { CtaBand } from "@/components/shared/cta-band";
import { services } from "@/content/services";

const chapters = [
  { id: "intro", label: "Intro" },
  { id: "services", label: "What we build" },
  ...services.map((service) => ({
    id: `service-${service.slug}`,
    label: service.name,
  })),
  { id: "work", label: "Selected work" },
  { id: "process", label: "How we work" },
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
        <Testimonials />
      </Chapter>
      <Chapter id="process" label="How we work">
        <HowWeWork />
      </Chapter>
      <Chapter id="contact" label="Contact" className="justify-stretch" reveal={false}>
        <CtaBand fill />
      </Chapter>
    </>
  );
}
