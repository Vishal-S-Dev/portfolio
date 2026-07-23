"use client";
import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { techRadar } from "@/lib/data";
import type { TechRadarRing } from "@/types";
import { cn } from "@/lib/utils";

const RING_CONFIG: Record<
  TechRadarRing,
  { title: string; description: string; accent: string }
> = {
  adopt: {
    title: "Adopt",
    description: "Production-ready standards",
    accent: "border-emerald-500/30 bg-emerald-500/5",
  },
  trial: {
    title: "Trial",
    description: "Actively evaluating",
    accent: "border-sky-500/30 bg-sky-500/5",
  },
  assess: {
    title: "Assess",
    description: "Monitoring closely",
    accent: "border-amber-500/30 bg-amber-500/5",
  },
  hold: {
    title: "Hold",
    description: "Phasing out",
    accent: "border-zinc-500/30 bg-zinc-500/5",
  },
};

const RINGS: TechRadarRing[] = ["adopt", "trial", "assess", "hold"];

export function TechRadar() {
  return (
    <Section id="tech-radar">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Tech Radar
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technology adoption
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            A snapshot of tools and frameworks I actively use, evaluate, or
            maintain for legacy support.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {RINGS.map((ring, columnIndex) => {
          const config = RING_CONFIG[ring];
          const items = techRadar[ring];

          return (
            <Reveal key={ring} delay={columnIndex * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-xl border p-5",
                  config.accent,
                )}
              >
                <div className="mb-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {config.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {config.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-lg border border-border bg-background/50 p-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">
                          {item.name}
                        </p>
                        <Badge variant="muted" className="text-[10px] uppercase">
                          {item.quadrant}
                        </Badge>
                      </div>
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
