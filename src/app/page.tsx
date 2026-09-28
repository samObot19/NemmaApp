import { Chapter } from "@/components/home/chapter";
import { ChapterNav } from "@/components/home/chapter-nav";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { ServicePanels } from "@/components/home/service-panels";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBand } from "@/components/home/trust-band";
import { WorkPreview } from "@/components/home/work-preview";
import { CtaBand } from "@/components/shared/cta-band";

const chapters = [
  { id: "intro", label: "Intro" },
  { id: "services", label: "What we build" },
  { id: "work", label: "Selected work" },
  { id: "process", label: "How we work" },
  { id: "contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <ChapterNav chapters={chapters} />
      <Chapter id={chapters[0].id} label={chapters[0].label}>
        <Hero />
        <TrustBand />
      </Chapter>
      <Chapter id="services" label="What we build">
        <ServicePanels />
      </Chapter>
      <Chapter id="work" label="Selected work">
        <WorkPreview />
        <Testimonials />
      </Chapter>
      <Chapter id="process" label="How we work">
        <HowWeWork />
      </Chapter>
      <Chapter id="contact" label="Contact" className="justify-stretch">
        <CtaBand fill />
      </Chapter>
    </>
  );
}
