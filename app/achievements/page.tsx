import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";
import { AchievementsGrid } from "@/sections/achievements-grid";
import { GithubStats } from "@/sections/github-stats";

export const metadata: Metadata = {
  title: "Achievements",
  description: `Career milestones and open-source contributions by ${siteConfig.name} — crash reductions, scale metrics, mentoring impact, and GitHub activity.`,
};

export default function AchievementsPage() {
  return (
    <>
      <Container className="pb-4 pt-16 md:pb-8 md:pt-24">
        <PageHeader
          eyebrow="Achievements"
          title="Impact & milestones"
          description="Measurable outcomes from a decade of shipping production mobile applications."
        />
      </Container>
      <AchievementsGrid />
      <GithubStats />
    </>
  );
}
