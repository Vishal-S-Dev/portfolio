"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { PlayStore } from "@/sections/play-store";
import { ProjectsGrid } from "@/sections/projects-grid";

export function ProjectsContent() {
  return (
    <>
      <Container className="pb-4 pt-16 md:pb-8 md:pt-24">
        <PageHeader
          eyebrow="Projects"
          title="All projects"
          description="Production mobile applications spanning fintech, real-time bidding, health AI, and consumer platforms."
        />
      </Container>
      <ProjectsGrid />
      <PlayStore />
    </>
  );
}
