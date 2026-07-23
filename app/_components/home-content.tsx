"use client";

import { AboutPreview } from "@/sections/about-preview";
import { AchievementsGrid } from "@/sections/achievements-grid";
import { CtaBanner } from "@/sections/cta-banner";
import { ExperienceTimeline } from "@/sections/experience-timeline";
import { Hero } from "@/sections/hero";
import { ProjectsGrid } from "@/sections/projects-grid";
import { SkillsGrid } from "@/sections/skills-grid";
import { TechLogos } from "@/sections/tech-logos";
import { Testimonials } from "@/sections/testimonials";

export function HomeContent() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <TechLogos />
      <ExperienceTimeline />
      <ProjectsGrid />
      <SkillsGrid />
      <AchievementsGrid />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
