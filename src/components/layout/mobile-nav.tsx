"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandMark } from "@/components/layout/brand-mark";
import { NavLink } from "@/components/layout/nav-link";
import { services } from "@/content/services";
import { navigation, site } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-sm gap-0 border-l border-border bg-background p-0 data-closed:duration-150"
      >
        <div className="flex h-16 items-center border-b border-border px-6">
          <SheetTitle className="inline-flex items-center gap-2.5 text-[1.0625rem] font-semibold">
            <BrandMark size={22} />
            {site.shortName}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation
          </SheetDescription>
        </div>
        <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
          {navigation.map((item) => (
            <div key={item.href} className="border-b border-border">
              <NavLink
                href={item.href}
                onNavigate={close}
                className="min-h-12 text-lg after:hidden"
              >
                {item.label}
              </NavLink>
              {item.href === "/services" && (
                <ul className="flex flex-col pb-3">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services#${service.slug}`}
                        onClick={close}
                        className="flex min-h-11 items-center pl-4 text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto px-6 pb-8">
          <Button asChild size="lg" className="w-full">
            <Link href="/contact?type=project" onClick={close}>
              Start a project
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
