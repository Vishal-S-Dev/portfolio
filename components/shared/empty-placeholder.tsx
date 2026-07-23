import * as React from "react";
import {
  Building2,
  ImageIcon,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type PlaceholderVariant = "profile" | "project" | "company" | "generic";

interface EmptyPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: PlaceholderVariant;
  label?: string;
  icon?: LucideIcon;
}

const variantConfig: Record<
  PlaceholderVariant,
  { icon: LucideIcon; label: string; gradient: string }
> = {
  profile: {
    icon: UserRound,
    label: "Profile photo",
    gradient: "from-teal-500/20 via-cyan-500/10 to-zinc-500/5",
  },
  project: {
    icon: ImageIcon,
    label: "Project banner",
    gradient: "from-teal-600/25 via-emerald-500/15 to-zinc-500/5",
  },
  company: {
    icon: Building2,
    label: "Company logo",
    gradient: "from-zinc-500/15 via-teal-500/10 to-zinc-500/5",
  },
  generic: {
    icon: ImageIcon,
    label: "Image placeholder",
    gradient: "from-zinc-400/15 via-teal-500/10 to-zinc-500/5",
  },
};

export function EmptyPlaceholder({
  variant = "generic",
  label,
  icon,
  className,
  ...props
}: EmptyPlaceholderProps) {
  const config = variantConfig[variant];
  const Icon = icon ?? config.icon;
  const displayLabel = label ?? config.label;

  return (
    <div
      role="img"
      aria-label={displayLabel}
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-200/60 bg-gradient-to-br dark:border-zinc-800/60",
        config.gradient,
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-2 text-zinc-500 dark:text-zinc-400">
        <div className="flex size-12 items-center justify-center rounded-full border border-zinc-200/60 bg-white/70 backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/70">
          <Icon className="size-5 text-teal-600 dark:text-teal-400" />
        </div>
        <span className="text-xs font-medium tracking-wide uppercase">
          {displayLabel}
        </span>
      </div>
    </div>
  );
}
