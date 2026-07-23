"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/lib/data";
import { withBasePath } from "@/lib/utils";

export function AboutPreview() {
  return (
    <Section id="about-preview">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building mobile products that scale
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-pretty text-lg text-muted-foreground">
            {aboutData.summary}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-wrap justify-center gap-2">
            {aboutData.domains.map((domain) => (
              <Badge key={domain} variant="accent">
                {domain}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Button asChild variant="outline">
            <Link href={withBasePath("/about")}>
              Learn more about me
              <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
