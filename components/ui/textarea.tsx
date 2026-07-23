import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-zinc-200/60 bg-white/80 px-3 py-2 text-sm text-zinc-900 shadow-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800/60 dark:bg-zinc-900/80 dark:text-zinc-50 dark:placeholder:text-zinc-400",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
