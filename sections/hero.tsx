"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import {
  SiAndroid,
  SiFirebase,
  SiKotlin,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { AnimatedCounter } from "@/components/animations/counter";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { achievements } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn, withBasePath } from "@/lib/utils";

const ROLES = [
  "Android Architect",
  "Kotlin Specialist",
  "React Native Lead",
  "Mobile Platform Engineer",
] as const;

const FLOATING_ICONS = [
  { Icon: SiKotlin, className: "left-[2%] top-[16%]", delay: "0s", label: "Kotlin" },
  { Icon: SiAndroid, className: "right-[4%] top-[20%]", delay: "0.7s", label: "Android" },
  { Icon: SiReact, className: "left-[0%] bottom-[26%]", delay: "1.4s", label: "React Native" },
  { Icon: SiFirebase, className: "right-[2%] bottom-[30%]", delay: "2.1s", label: "Firebase" },
  { Icon: SiTypescript, className: "right-[22%] top-[6%]", delay: "2.8s", label: "TypeScript" },
] as const;

const heroStats = achievements.slice(0, 4);

function RotatingRoles() {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex h-[1.35em] min-w-[16ch] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[roleIndex]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 text-accent"
        >
          {ROLES[roleIndex]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible" aria-hidden>
        Mobile Platform Engineer
      </span>
    </span>
  );
}

function ProfilePortrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] lg:ml-auto lg:mr-2">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--ring)_22%,transparent),transparent_50%)] blur-2xl"
      />
      <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-accent/30 via-transparent to-ring/20 p-px">
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.7rem] border border-border/60 bg-card/80 p-7 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.7)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklab, var(--border) 70%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--border) 70%, transparent) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
            }}
          />
          <div className="relative flex items-start justify-between">
            <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
              Available
            </span>
            <span className="text-xs text-muted-foreground">Nashik · IN</span>
          </div>

          <div className="relative flex flex-1 flex-col items-center justify-center gap-5 py-6">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/40 to-ring/30 blur-md"
              />
              <div className="relative flex size-36 items-center justify-center rounded-full border border-white/50 bg-gradient-to-br from-teal-700 to-teal-500 shadow-lg dark:border-white/10 dark:from-teal-400 dark:to-teal-600 sm:size-40">
                <span className="font-display text-5xl font-bold tracking-tight text-white dark:text-teal-950">
                  VS
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-semibold tracking-tight text-foreground">
                Vishal V. Shegaonkar
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Senior Mobile Engineer
              </p>
            </div>
          </div>

          <div className="relative flex flex-wrap justify-center gap-2">
            {["Kotlin", "Compose", "RN", "Clean Arch"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const resumePath = withBasePath(
    siteConfig.resumePath ?? "/resume/Vishal_Shegaonkar_Resume.pdf",
  );

  return (
    <section className="relative min-h-[calc(100svh-4.25rem)] overflow-hidden surface-gradient">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.28]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <Container className="relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-center py-20 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="space-y-8">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs">
                {siteConfig.tagline}
              </p>
            </Reveal>

            <div className="space-y-4">
              <Reveal delay={0.06}>
                <h1 className="font-display text-balance text-[2.65rem] font-bold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                  {siteConfig.name}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  {siteConfig.title}
                  <span className="mx-2 text-border">·</span>
                  <RotatingRoles />
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <p className="max-w-[34rem] text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                {siteConfig.description}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button asChild size="lg" className="shadow-lg shadow-teal-700/15 dark:shadow-teal-400/10">
                  <a href={resumePath} download>
                    <Download />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="sm:px-4">
                  <Link href="/contact">
                    <Mail />
                    Contact
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="grid grid-cols-2 gap-y-6 border-t border-border/80 pt-8 sm:grid-cols-4 sm:gap-0">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.id}
                    className={cn(
                      "space-y-1 sm:px-4",
                      index > 0 && "sm:border-l sm:border-border/80",
                      index === 0 && "sm:pl-0",
                    )}
                  >
                    <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
                      <AnimatedCounter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="text-xs leading-snug text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} direction="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              {FLOATING_ICONS.map(({ Icon, className, delay, label }) => (
                <motion.div
                  key={label}
                  className={cn(
                    "absolute z-10 flex size-12 items-center justify-center rounded-2xl glass text-accent shadow-[0_10px_30px_-12px_rgba(15,23,42,0.35)]",
                    "animate-float",
                    className,
                  )}
                  style={{ animationDelay: delay }}
                  whileHover={{ scale: 1.08 }}
                  title={label}
                  aria-label={label}
                >
                  <Icon className="size-5" aria-hidden />
                </motion.div>
              ))}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ProfilePortrait />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
