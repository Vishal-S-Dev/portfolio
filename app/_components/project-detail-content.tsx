"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Smartphone } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Reveal } from "@/components/animations/reveal";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";
import { cn, withBasePath } from "@/lib/utils";

const linkButtonClass =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-200/60 bg-white/80 px-4 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/80 dark:text-zinc-50 dark:hover:bg-zinc-800/80";

function DetailSection({
  title,
  items,
  ordered = false,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  if (items.length === 0) return null;

  const ListTag = ordered ? "ol" : "ul";

  return (
    <Reveal>
      <section className="space-y-4">
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <ListTag
          className={cn(
            "space-y-2.5 text-muted-foreground",
            ordered && "list-decimal pl-5",
          )}
        >
          {items.map((item) => (
            <li
              key={item}
              className={cn(
                !ordered && "flex gap-3",
                ordered && "pl-1 marker:text-accent",
              )}
            >
              {!ordered && (
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              )}
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ListTag>
      </section>
    </Reveal>
  );
}

export function ProjectDetailContent({ project }: { project: Project }) {
  const { links } = project;

  return (
    <Container className="py-16 md:py-24">
      <Reveal>
        <Link
          href={withBasePath("/projects")}
          className="mb-8 inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100/80 dark:text-zinc-50 dark:hover:bg-zinc-800/80"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>
      </Reveal>

      <div className="space-y-10">
        <Reveal delay={0.05}>
          <EmptyPlaceholder
            variant="project"
            label={project.title}
            className={cn(
              "aspect-[21/9] rounded-xl bg-gradient-to-br",
              project.bannerGradient,
            )}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.featured && <Badge variant="default">Featured</Badge>}
              {project.year && <Badge variant="muted">{project.year}</Badge>}
              <Badge variant="outline" className="capitalize">
                {project.category.replace("-", " ")}
              </Badge>
            </div>
            <h1 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-pretty text-lg text-muted-foreground">
              {project.longDescription}
            </p>
          </header>
        </Reveal>

        {project.metrics && project.metrics.length > 0 && (
          <Reveal delay={0.12}>
            <div className="flex flex-wrap gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-border px-4 py-3"
                >
                  <p className="text-lg font-bold text-accent">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {metric.label}
                    {metric.description && (
                      <span className="block text-xs opacity-80">
                        {metric.description}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={0.14}>
          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <DetailSection title="Challenges" items={project.challenges} />
          <DetailSection title="Architecture" items={project.architecture} />
          <DetailSection
            title="Responsibilities"
            items={project.responsibilities}
          />
          <DetailSection title="Features" items={project.features} />
        </div>

        <DetailSection title="Achievements" items={project.achievements} />

        {(links.demo || links.github || links.playStore || links.appStore) && (
          <Reveal delay={0.2}>
            <section className="glass rounded-xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Links
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {links.demo && (
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkButtonClass}
                  >
                    <Globe className="size-4" />
                    Live demo
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkButtonClass}
                  >
                    <FaGithub className="size-4" />
                    Source code
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
                {links.playStore && (
                  <a
                    href={links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkButtonClass}
                  >
                    <Smartphone className="size-4" />
                    Google Play
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
                {links.appStore && (
                  <a
                    href={links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkButtonClass}
                  >
                    <Smartphone className="size-4" />
                    App Store
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
            </section>
          </Reveal>
        )}
      </div>
    </Container>
  );
}
