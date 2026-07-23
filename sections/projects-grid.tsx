"use client";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data";
import { cn, withBasePath } from "@/lib/utils";

export function ProjectsGrid() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Projects
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected work
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            Production mobile applications spanning fintech, real-time bidding,
            health AI, and consumer platforms.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} featured />
          </Reveal>
        ))}
      </div>

      {otherProjects.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}

      <Reveal delay={0.2} className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link href={withBasePath("/projects")}>
            View all projects
            <ArrowRight />
          </Link>
        </Button>
      </Reveal>
    </Section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative">
        <EmptyPlaceholder
          variant="project"
          label={project.title}
          className={cn(
            "aspect-[16/9] rounded-none border-0 bg-gradient-to-br",
            project.bannerGradient,
          )}
        />
        {featured && (
          <Badge
            variant="default"
            className="absolute right-3 top-3 gap-1 shadow-sm"
          >
            <Star className="size-3" />
            Featured
          </Badge>
        )}
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="muted">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="muted">+{project.tech.length - 4}</Badge>
          )}
        </div>

        <Button asChild variant="ghost" size="sm" className="w-full">
          <Link href={withBasePath(`/projects/${project.slug}`)}>
            View details
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
