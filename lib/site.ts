import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Vishal V. Shegaonkar",
  title: "Senior Mobile Engineer",
  tagline: "Android • Kotlin • React Native",
  description:
    "10+ years shipping high-performance Android and React Native products across fintech, mobility, health, and real-time systems — with architecture that scales and metrics that matter.",
  url: "https://vishal-s-dev.github.io/portfolio",
  ogImage: "/og-image.svg",
  resumePath: "/resume/Vishal_Shegaonkar_Resume.pdf",
  contact: {
    email: "shegaonkarv@gmail.com",
    phone: "+91 9960895734",
    location: "Nashik, India",
    github: "https://github.com/Vishal-S-Dev",
    linkedin: "https://www.linkedin.com/in/vishal-shegaonkar",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Achievements", href: "/achievements" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
};
