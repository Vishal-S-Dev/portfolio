"use client";
import { ExternalLink } from "lucide-react";

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
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <Section id="certifications">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Certifications
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Credentials & learning
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            Professional certifications validating expertise in Android, Kotlin,
            and cloud platforms.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Reveal key={cert.id} delay={index * 0.06}>
            <Card className="glass h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base leading-snug">
                    {cert.name}
                  </CardTitle>
                  {cert.isPlaceholder && (
                    <Badge variant="muted" className="shrink-0">
                      Placeholder
                    </Badge>
                  )}
                </div>
                <CardDescription>
                  {cert.issuer} · {cert.year}
                </CardDescription>
              </CardHeader>
              {cert.credentialUrl && (
                <CardContent>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    View credential
                    <ExternalLink className="size-3.5" />
                  </a>
                </CardContent>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
