"use client";
import { AnimatedCounter } from "@/components/animations/counter";
import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import { achievements } from "@/lib/data";

export function AchievementsGrid() {
  return (
    <Section id="achievements">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Achievements
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Impact by the numbers
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            Measurable outcomes from architecture modernization, performance
            optimization, and product delivery.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <Reveal key={achievement.id} delay={index * 0.05}>
            <div className="glass flex h-full flex-col rounded-xl p-6">
              <p className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                <AnimatedCounter
                  value={achievement.value}
                  prefix={achievement.prefix}
                  suffix={achievement.suffix}
                />
              </p>
              <p className="mt-2 font-medium text-foreground">
                {achievement.label}
              </p>
              {achievement.description && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
