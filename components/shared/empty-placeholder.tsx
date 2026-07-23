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
    gradient: "from-teal-500/25 via-cyan-500/10 to-transparent",
  },
  project: {
    icon: ImageIcon,
    label: "Project banner",
    gradient: "from-teal-600/30 via-emerald-500/12 to-transparent",
  },
  company: {
    icon: Building2,
    label: "Company logo",
    gradient: "from-zinc-500/20 via-teal-500/10 to-transparent",
  },
  generic: {
    icon: ImageIcon,
    label: "Image placeholder",
    gradient: "from-zinc-400/20 via-teal-500/10 to-transparent",
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
        "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br transition-transform duration-300 hover:scale-[1.01]",
        config.gradient,
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-2.5 text-muted-foreground">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-border/70 bg-card/80 shadow-sm backdrop-blur-sm">
          <Icon className="size-5 text-accent" />
        </div>
        <span className="text-[11px] font-medium tracking-[0.14em] uppercase">
          {displayLabel}
        </span>
      </div>
    </div>
  );
}
