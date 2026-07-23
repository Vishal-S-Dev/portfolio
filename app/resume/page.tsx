import type { Metadata } from "next";

import { ResumeContent } from "@/app/_components/resume-content";
import { aboutData } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name} — Senior Mobile Engineer with ${aboutData.yearsOfExperience}+ years of Android and React Native experience. Download PDF or view online.`,
};

export default function ResumePage() {
  return <ResumeContent />;
}
