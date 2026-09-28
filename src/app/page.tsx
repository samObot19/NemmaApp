import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { ServicePanels } from "@/components/home/service-panels";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBand } from "@/components/home/trust-band";
import { WorkPreview } from "@/components/home/work-preview";
import { CtaBand } from "@/components/shared/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <ServicePanels />
      <WorkPreview />
      <Testimonials />
      <HowWeWork />
      <CtaBand />
    </>
  );
}
