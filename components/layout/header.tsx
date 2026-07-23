"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/$/, "") || "/";
}

function isActiveLink(pathname: string, href: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(href);

  if (target === "/") {
    return current === "/";
  }

  return current === target || current.startsWith(`${target}/`);
}

interface NavLinkProps {
  href: string;
  label: string;
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}

function NavLink({ href, label, pathname, onNavigate, className }: NavLinkProps) {
  const active = isActiveLink(pathname, href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "relative px-1 py-1 text-[13px] font-medium tracking-tight transition-colors",
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-1 -bottom-0.5 h-px origin-left rounded-full bg-accent transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/75 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-2xl dark:shadow-[0_8px_30px_-18px_rgba(0,0,0,0.65)]"
          : "border-b border-transparent bg-background/40 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-700 to-teal-500 font-display text-[11px] font-bold tracking-wide text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.03] dark:from-teal-400 dark:to-teal-600 dark:text-teal-950">
            VS
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
            Vishal
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              pathname={pathname}
            />
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Let&apos;s talk</Link>
          </Button>
          <ThemeToggle />
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col border-l border-border/70 bg-card/95 p-6 shadow-2xl backdrop-blur-2xl outline-none">
                <div className="mb-8 flex items-center justify-between">
                  <Dialog.Title className="font-display text-lg font-semibold text-foreground">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="size-5" />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col gap-1">
                  {siteConfig.nav.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      pathname={pathname}
                      onNavigate={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-base hover:bg-muted"
                    />
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Let&apos;s talk
                    </Link>
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
