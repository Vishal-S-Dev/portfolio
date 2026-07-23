"use client";
import { ExternalLink, Smartphone } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFeaturedProjects } from "@/lib/data";

const PLACEHOLDER_APPS = [
  { title: "PredCred", category: "Sports", downloads: "500K+" },
  { title: "BidKart", category: "Real-time", downloads: "50K+" },
  { title: "GoGlitter", category: "Fintech", downloads: "100K+" },
  { title: "MobiCrew", category: "Mobility", downloads: "25K+" },
] as const;

export function PlayStore() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <Section id="play-store">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Play Store
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Published applications
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            Gallery of apps shipped to Google Play Store. Connect Play Console
            for live listing data.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <Card className="group overflow-hidden">
              <EmptyPlaceholder
                variant="project"
                label={project.title}
                className={`aspect-square rounded-none border-0 bg-gradient-to-br ${project.bannerGradient}`}
              />
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <Smartphone className="size-4 shrink-0 text-muted-foreground" />
                </div>
                <CardDescription className="capitalize">
                  {project.category.replace("-", " ")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {project.links.playStore ? (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                  >
                    View on Play Store
                    <ExternalLink className="size-3.5" />
                  </a>
                ) : (
                  <Badge variant="muted">Play Store link pending</Badge>
                )}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <div className="glass rounded-xl p-6">
          <p className="mb-4 text-sm font-medium text-foreground">
            Additional published apps (placeholder)
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PLACEHOLDER_APPS.map((app) => (
              <div
                key={app.title}
                className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {app.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {app.category}
                  </p>
                </div>
                <Badge variant="accent">{app.downloads}</Badge>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
