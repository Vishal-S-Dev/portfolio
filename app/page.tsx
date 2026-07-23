import type { Metadata } from "next";

import { HomeContent } from "@/app/_components/home-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return <HomeContent />;
}
