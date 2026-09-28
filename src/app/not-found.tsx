import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container as="section" className="section">
      <h1 className="text-h1">404: this page does not exist.</h1>
      <p className="text-lede mt-4 measure">
        The link may be out of date, or the address may have a typo. Try one of
        these instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">Go to the homepage</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/work">See our work</Link>
        </Button>
      </div>
    </Container>
  );
}
