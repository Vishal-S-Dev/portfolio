"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

function TimelineNode({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[number];
  index: number;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Reveal delay={index * 0.08}>
      <div className="relative flex gap-6 pb-12 last:pb-0">
        {!isLast && (
          <div className="absolute left-[11px] top-8 h-[calc(100%-2rem)] w-px bg-border" />
        )}

        <div className="relative z-10 mt-1.5 shrink-0">
          <div
            className={cn(
              "size-[22px] rounded-full border-2 border-background",
              experience.current
                ? "bg-accent ring-4 ring-accent/20"
                : "bg-muted-foreground/40",
            )}
          />
        </div>

        <div className="min-w-0 flex-1 space-y-4">
          <div className="glass rounded-xl p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                    {experience.role}
                  </h3>
                  {experience.current && (
                    <Badge variant="accent">Current</Badge>
                  )}
                </div>
                <p className="font-medium text-accent">{experience.company}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span>{experience.duration}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              {experience.summary}
            </p>

            {experience.metrics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.metrics.map((metric) => (
                  <Badge key={metric.label} variant="secondary">
                    {metric.value} {metric.label}
                  </Badge>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              aria-expanded={expanded}
            >
              {expanded ? "Hide" : "View"} responsibilities
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  expanded && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {experience.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ExperienceTimeline() {
  return (
    <Section id="experience">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Experience
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Career journey
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            A decade of shipping production mobile applications across fintech,
            real-time systems, and consumer platforms.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-3xl">
        {experiences.map((experience, index) => (
          <TimelineNode
            key={experience.id}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
