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
        "relative text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400",
        active
          ? "text-teal-600 dark:text-teal-400"
          : "text-zinc-600 dark:text-zinc-400",
        className,
      )}
    >
      {label}
      {active && (
        <span
          aria-hidden
          className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal-600 dark:bg-teal-400"
        />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-900/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-zinc-900 transition-colors hover:text-teal-600 dark:text-zinc-50 dark:hover:text-teal-400"
        >
          Vishal
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex"
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
          <ThemeToggle />
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col border-l border-zinc-200/60 bg-white/95 p-6 shadow-xl backdrop-blur-xl transition-transform duration-300 data-[state=closed]:translate-x-full data-[state=open]:translate-x-0 dark:border-zinc-800/60 dark:bg-zinc-900/95">
                <div className="mb-8 flex items-center justify-between">
                  <Dialog.Title className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="size-5" />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col gap-4">
                  {siteConfig.nav.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      pathname={pathname}
                      onNavigate={() => setMobileOpen(false)}
                      className="py-1 text-base"
                    />
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
