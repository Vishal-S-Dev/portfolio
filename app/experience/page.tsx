import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";
import { ExperienceTimeline } from "@/sections/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience of ${siteConfig.name} — a decade of shipping production Android and React Native applications across fintech, real-time systems, and consumer platforms.`,
};

export default function ExperiencePage() {
  return (
    <>
      <Container className="pb-4 pt-16 md:pb-8 md:pt-24">
        <PageHeader
          eyebrow="Experience"
          title="Career timeline"
          description="Roles, responsibilities, and measurable impact across enterprise mobile engineering."
        />
      </Container>
      <ExperienceTimeline />
    </>
  );
}
