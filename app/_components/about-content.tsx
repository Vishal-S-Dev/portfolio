"use client";

import Link from "next/link";
import { ArrowRight, FileText, GraduationCap, Languages } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutData } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { withBasePath } from "@/lib/utils";
import { Certifications } from "@/sections/certifications";
import type { Language } from "@/types";

const proficiencyLabels: Record<Language["proficiency"], string> = {
  native: "Native",
  fluent: "Fluent",
  professional: "Professional",
  conversational: "Conversational",
};

export function AboutContent() {
  return (
    <>
      <Container className="pb-8 pt-16 md:pb-12 md:pt-24">
        <PageHeader
          eyebrow="About"
          title={`Hi, I'm ${siteConfig.name.split(" ").slice(0, 2).join(" ")}`}
          description={siteConfig.tagline}
        />

        <div className="mt-12 space-y-16">
          <Reveal>
            <div className="glass rounded-xl p-6 sm:p-8">
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutData.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="rounded-lg border border-border bg-background/60 px-4 py-3">
                  <p className="text-2xl font-bold text-accent">
                    {aboutData.yearsOfExperience}+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years of experience
                  </p>
                </div>
                <Link
                  href={withBasePath("/resume")}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
                >
                  <FileText className="size-4" />
                  View resume
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Domains
              </h2>
              <div className="flex flex-wrap gap-2">
                {aboutData.domains.map((domain) => (
                  <Badge key={domain} variant="accent">
                    {domain}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Career journey
              </h2>
              <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                {aboutData.careerJourney}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-5 text-accent" />
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Education
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {aboutData.education.map((edu) => (
                  <Card key={edu.degree} className="glass h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription>
                        {edu.institution} · {edu.university}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        {edu.location} · {edu.year}
                      </p>
                      {edu.description && (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {edu.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Languages className="size-5 text-accent" />
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Languages
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {aboutData.languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5"
                  >
                    <span className="font-medium text-foreground">
                      {language.name}
                    </span>
                    <Badge variant="muted">
                      {proficiencyLabels[language.proficiency]}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Highlights
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {aboutData.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>

      <Certifications />
    </>
  );
}
