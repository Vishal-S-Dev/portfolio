import {
  SiAndroid,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiGradle,
  SiJetpackcompose,
  SiKotlin,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";

const TECH_LOGOS = [
  { Icon: SiKotlin, label: "Kotlin" },
  { Icon: SiAndroid, label: "Android" },
  { Icon: SiJetpackcompose, label: "Jetpack Compose" },
  { Icon: SiReact, label: "React Native" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiGradle, label: "Gradle" },
  { Icon: SiGooglecloud, label: "Google Cloud" },
  { Icon: SiGithub, label: "GitHub" },
] as const;

export function TechLogos() {
  const duplicated = [...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <Section id="tech-stack" className="overflow-hidden py-12 md:py-16">
      <Reveal className="mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Tech Stack
        </p>
      </Reveal>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee gap-8">
          {duplicated.map(({ Icon, label }, index) => (
            <div
              key={`${label}-${index}`}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-xl border border-border glass px-5 py-3",
              )}
              aria-hidden={index >= TECH_LOGOS.length}
            >
              <Icon className="size-6 text-accent" aria-hidden />
              <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
