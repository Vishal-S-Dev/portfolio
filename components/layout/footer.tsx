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
        "border-t border-zinc-200/60 bg-white/80 dark:border-zinc-800/60 dark:bg-zinc-900/80",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {name}
            </p>
            <p className="max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
              {siteConfig.title} · {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-200/60 text-zinc-600 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600 dark:border-zinc-800/60 dark:text-zinc-400 dark:hover:border-teal-800 dark:hover:bg-teal-950/50 dark:hover:text-teal-400"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
