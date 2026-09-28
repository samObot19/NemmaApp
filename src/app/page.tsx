import { Capabilities } from "@/components/home/capabilities";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBand } from "@/components/home/trust-band";
import { ServicesOverview } from "@/components/home/services-overview";
import { WorkPreview } from "@/components/home/work-preview";
import { CtaBand } from "@/components/shared/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <ServicesOverview />
      <WorkPreview />
      <Capabilities />
      <Testimonials />
      <HowWeWork />
      <CtaBand />
    </>
  );
}
