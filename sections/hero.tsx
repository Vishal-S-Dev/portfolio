"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import {
  SiAndroid,
  SiFirebase,
  SiKotlin,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { AnimatedCounter } from "@/components/animations/counter";
import { TypingText } from "@/components/animations/typing-text";
import { Reveal } from "@/components/animations/reveal";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { achievements } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn, withBasePath } from "@/lib/utils";

const ROLES = [
  "Senior Mobile Engineer",
  "Android Architect",
  "Kotlin Specialist",
  "React Native Lead",
] as const;

const FLOATING_ICONS = [
  { Icon: SiKotlin, className: "left-[8%] top-[18%]", delay: "0s" },
  { Icon: SiAndroid, className: "right-[12%] top-[22%]", delay: "0.8s" },
  { Icon: SiReact, className: "left-[14%] bottom-[28%]", delay: "1.6s" },
  { Icon: SiFirebase, className: "right-[10%] bottom-[32%]", delay: "2.4s" },
  { Icon: SiTypescript, className: "right-[28%] top-[12%]", delay: "3.2s" },
] as const;

const heroStats = achievements.slice(0, 4);

function RotatingRoles() {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-accent">
      <TypingText
        key={ROLES[roleIndex]}
        text={ROLES[roleIndex]}
        speed={40}
        loop={false}
        cursor
      />
    </span>
  );
}

export function Hero() {
  const resumePath = withBasePath(
    siteConfig.resumePath ?? "/resume/Vishal_Shegaonkar_Resume.pdf",
  );

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden surface-gradient">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                {siteConfig.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-lg text-muted-foreground sm:text-xl">
                {siteConfig.title}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="min-h-[1.75rem] text-base font-medium text-foreground sm:text-lg">
                <RotatingRoles />
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-xl text-pretty text-muted-foreground">
                {siteConfig.description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={resumePath} download>
                    <Download />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={withBasePath("/projects")}>
                    View Projects
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href={withBasePath("/contact")}>
                    <Mail />
                    Contact
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.id} className="space-y-1">
                    <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                      <AnimatedCounter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} direction="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              {FLOATING_ICONS.map(({ Icon, className, delay }) => (
                <div
                  key={className}
                  className={cn(
                    "absolute z-10 flex size-11 items-center justify-center rounded-xl glass text-accent shadow-sm",
                    "animate-float",
                    className,
                  )}
                  style={{ animationDelay: delay }}
                >
                  <Icon className="size-5" aria-hidden />
                </div>
              ))}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <EmptyPlaceholder
                  variant="profile"
                  className="aspect-square max-w-sm rounded-2xl border-border shadow-lg lg:ml-auto"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
