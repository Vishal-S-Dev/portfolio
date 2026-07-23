import * as React from "react";

import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
}

export function Section({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
