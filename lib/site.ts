import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Vishal V. Shegaonkar",
  title: "Senior Mobile Engineer",
  tagline: "Android • Kotlin • React Native",
  description:
    "Senior Mobile Engineer with 10+ years building high-performance Android and React Native applications across fintech, mobility, health, and real-time systems.",
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
