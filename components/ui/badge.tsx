import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-teal-600 text-white dark:bg-teal-500 dark:text-zinc-950",
        secondary:
          "border-transparent bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
        outline:
          "border-zinc-200/60 text-zinc-900 dark:border-zinc-800/60 dark:text-zinc-50",
        muted:
          "border-transparent bg-zinc-100/80 text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400",
        accent:
          "border-teal-200/60 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/50 dark:text-teal-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
