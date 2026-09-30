import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Container } from "@/components/layout/container";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { Logo } from "@/components/layout/brand-mark";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopNav />
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden lg:inline-flex">
              <Link href="/contact?type=project">Start a project</Link>
            </Button>
            <MobileNav />
          </div>
        </Container>
      </header>
    </>
  );
}
