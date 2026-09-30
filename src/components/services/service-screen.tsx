import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CheckList } from "@/components/shared/check-list";
import { ServiceScene } from "@/components/services/service-scene";
import type { Service } from "@/types/content";

/** One service as a full screen: the detailed version used on the services page. */
export function ServiceScreen({
  service,
  index,
  total,
}: {
  service: Service;
  index: number;
  total: number;
}) {
  return (
    <Container className="py-10 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-6">
          <p className="text-mono-sm text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <h2 className="text-h1 mt-4">{service.name}</h2>
          <p className="text-lede measure mt-5">{service.description}</p>
          <CheckList items={service.capabilities} columns={2} className="mt-7" />
          <Button asChild className="mt-8">
            <Link href={`/contact?type=project`}>Discuss this kind of work</Link>
          </Button>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <ServiceScene
            slug={service.slug}
            className="rounded-xl bg-card text-[0.9375rem] leading-6 shadow-panel [&_.text-mono-sm]:text-[0.9375rem] [&_p]:leading-7"
          />
        </div>
      </div>
    </Container>
  );
}
