import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();
  const { contact, name } = siteConfig;

  const socialLinks = [
    {
      label: "GitHub",
      href: contact.github,
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: contact.linkedin,
      icon: FaLinkedin,
    },
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer
      className={cn(
        "border-t border-border/70 bg-card/50 backdrop-blur-sm",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-700 to-teal-500 font-display text-[11px] font-bold text-white dark:from-teal-400 dark:to-teal-600 dark:text-teal-950">
                VS
              </span>
              <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                {name}
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.title}. Building reliable Android & React Native
              products with clean architecture and measurable impact.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-xl border border-border/70 text-muted-foreground transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8 opacity-70" />

        <div className="flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {name}
          </p>
          <p className="text-xs">Crafted with Next.js · Deployed on GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
}
