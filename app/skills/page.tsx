import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";
import { SkillsGrid } from "@/sections/skills-grid";
import { TechLogos } from "@/sections/tech-logos";
import { TechRadar } from "@/sections/tech-radar";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical skills of ${siteConfig.name} — Android, Kotlin, React Native, Clean Architecture, Jetpack Compose, and production mobile tooling.`,
};

export default function SkillsPage() {
  return (
    <>
      <Container className="pb-4 pt-16 md:pb-8 md:pt-24">
        <PageHeader
          eyebrow="Skills"
          title="Technical expertise"
          description="Deep experience across native Android, cross-platform development, architecture patterns, and production tooling."
        />
      </Container>
      <SkillsGrid />
      <TechRadar />
      <TechLogos />
    </>
  );
}
