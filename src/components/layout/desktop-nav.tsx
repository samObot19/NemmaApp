"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavLink } from "@/components/layout/nav-link";
import { services } from "@/content/services";
import { navigation } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Desktop navigation. "Services" opens a panel listing the five service
 * areas; every other item is a plain link. Active state matches NavLink.
 */
export function DesktopNav() {
  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services");

  return (
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList className="gap-8">
        {navigation.map((item) =>
          item.href === "/services" ? (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuTrigger
                className={cn(servicesActive && "text-foreground after:opacity-100")}
              >
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 md:w-[40rem]">
                <ul className="grid grid-cols-2 gap-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/services#${service.slug}`}
                          className="flex flex-col items-start gap-1 rounded-sm p-3"
                        >
                          <span className="text-sm font-medium text-foreground">
                            {service.name}
                          </span>
                          <span className="text-sm leading-snug text-muted-foreground">
                            {service.summary}
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services"
                        className="flex min-h-11 items-center rounded-sm p-3 text-sm font-medium text-brand"
                      >
                        All services in detail
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.href}>
              <NavLink href={item.href} className="h-16">
                {item.label}
              </NavLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
