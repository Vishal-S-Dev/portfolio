import type { Metadata } from "next";

import { ProjectsContent } from "@/app/_components/projects-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected mobile projects by ${siteConfig.name} — fintech, real-time bidding, health AI, and consumer platforms built with Kotlin, Android, and React Native.`,
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
