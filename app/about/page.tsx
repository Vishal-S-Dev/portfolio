import type { Metadata } from "next";

import { AboutContent } from "@/app/_components/about-content";
import { aboutData } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — ${aboutData.yearsOfExperience}+ years building Android and React Native applications across fintech, mobility, and real-time systems.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
