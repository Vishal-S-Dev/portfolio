import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type IconComponent = LucideIcon | IconType;

export interface NavItem {
  label: string;
  href: string;
  icon?: IconComponent;
  external?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  ogImage?: string;
  contact: ContactInfo;
  nav: NavItem[];
  resumePath?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  duration: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  metrics: Metric[];
  technologies: string[];
  current?: boolean;
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectLink {
  demo?: string;
  github?: string;
  playStore?: string;
  appStore?: string;
}

export type ProjectCategory =
  | "fintech"
  | "health"
  | "entertainment"
  | "mobility"
  | "real-time"
  | "sports"
  | "wellness"
  | "enterprise";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: ProjectCategory;
  featured: boolean;
  bannerGradient: string;
  links: ProjectLink;
  challenges: string[];
  architecture: string[];
  responsibilities: string[];
  features: string[];
  achievements: string[];
  metrics?: Metric[];
  year?: string;
  company?: string;
}

export interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
  years?: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  icon?: IconComponent;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  location: string;
  year: string;
  description?: string;
}

export interface Language {
  name: string;
  proficiency: "native" | "fluent" | "professional" | "conversational";
}

export interface AboutData {
  summary: string;
  yearsOfExperience: number;
  domains: string[];
  careerJourney: string;
  education: Education[];
  languages: Language[];
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  isPlaceholder?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export type TechRadarRing = "adopt" | "trial" | "assess" | "hold";

export interface TechRadarItem {
  id: string;
  name: string;
  ring: TechRadarRing;
  quadrant: "languages" | "frameworks" | "platforms" | "tools";
  description: string;
}

export interface TechRadarData {
  adopt: TechRadarItem[];
  trial: TechRadarItem[];
  assess: TechRadarItem[];
  hold: TechRadarItem[];
}

export interface AnimationVariant {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

export interface StaggerVariant {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

export interface AnimationVariants {
  fadeIn: AnimationVariant;
  slideUp: AnimationVariant;
  scaleIn: AnimationVariant;
  staggerContainer: StaggerVariant;
  staggerItem: AnimationVariant;
}
