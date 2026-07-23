"use client";
import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const levelStyles: Record<
  NonNullable<(typeof skillCategories)[number]["skills"][number]["level"]>,
  string
> = {
  beginner: "bg-muted text-muted-foreground",
  intermediate: "bg-accent/10 text-accent",
  advanced: "bg-accent/20 text-accent",
  expert: "bg-accent/30 text-accent",
};

export function SkillsGrid() {
  return (
    <Section id="skills" className="surface-gradient">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Skills
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical expertise
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            Deep experience across native Android, cross-platform development,
            architecture, and production tooling.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.05}>
            <Card className="glass h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{category.title}</CardTitle>
                {category.description && (
                  <CardDescription>{category.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <Badge
                        variant="outline"
                        className={cn(
                          "border-border font-normal",
                          skill.level && levelStyles[skill.level],
                        )}
                      >
                        {skill.name}
                        {skill.years !== undefined && (
                          <span className="ml-1 opacity-60">
                            · {skill.years}y
                          </span>
                        )}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
