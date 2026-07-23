import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "android",
    title: "Android",
    description: "Native Android development with modern tooling and platform APIs",
    skills: [
      { name: "Android SDK", level: "expert", years: 10 },
      { name: "Material Design", level: "expert", years: 8 },
      { name: "Android Architecture Components", level: "expert", years: 7 },
      { name: "Gradle & Build Systems", level: "advanced", years: 8 },
      { name: "Google Play Console", level: "advanced", years: 8 },
      { name: "ProGuard/R8", level: "advanced", years: 6 },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    description: "Primary and secondary programming languages for mobile and backend development",
    skills: [
      { name: "Kotlin", level: "expert", years: 7 },
      { name: "Java", level: "expert", years: 10 },
      { name: "TypeScript", level: "advanced", years: 3 },
      { name: "JavaScript", level: "advanced", years: 6 },
      { name: "Python", level: "intermediate", years: 2 },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Software design patterns and architectural principles for scalable mobile apps",
    skills: [
      { name: "MVVM", level: "expert", years: 8 },
      { name: "Clean Architecture", level: "expert", years: 6 },
      { name: "SOLID Principles", level: "expert", years: 8 },
      { name: "Microservices", level: "advanced", years: 4 },
      { name: "Repository Pattern", level: "expert", years: 7 },
      { name: "Modular Architecture", level: "advanced", years: 5 },
    ],
  },
  {
    id: "jetpack-compose",
    title: "Jetpack & Compose",
    description: "Modern Android UI toolkit and Jetpack libraries for production applications",
    skills: [
      { name: "Jetpack Compose", level: "advanced", years: 3 },
      { name: "Navigation Component", level: "expert", years: 6 },
      { name: "ViewModel & LiveData", level: "expert", years: 8 },
      { name: "Paging 3", level: "advanced", years: 4 },
      { name: "WorkManager", level: "advanced", years: 5 },
      { name: "DataStore", level: "advanced", years: 3 },
      { name: "Hilt/Dagger", level: "advanced", years: 5 },
    ],
  },
  {
    id: "async",
    title: "Async & Concurrency",
    description: "Asynchronous programming patterns for responsive mobile experiences",
    skills: [
      { name: "Kotlin Coroutines", level: "expert", years: 5 },
      { name: "Flow", level: "expert", years: 4 },
      { name: "RxJava", level: "advanced", years: 5 },
      { name: "Structured Concurrency", level: "advanced", years: 4 },
      { name: "Background Services", level: "advanced", years: 7 },
    ],
  },
  {
    id: "data",
    title: "Data & Networking",
    description: "Persistence, caching, and API integration for offline-first mobile apps",
    skills: [
      { name: "Room Database", level: "expert", years: 6 },
      { name: "Retrofit", level: "expert", years: 8 },
      { name: "OkHttp", level: "expert", years: 8 },
      { name: "Firebase (Auth, FCM, Analytics)", level: "expert", years: 7 },
      { name: "SQLite", level: "expert", years: 10 },
      { name: "GraphQL", level: "intermediate", years: 2 },
      { name: "REST APIs", level: "expert", years: 10 },
    ],
  },
  {
    id: "maps",
    title: "Maps & Location",
    description: "Geospatial features and location-based services for mobility applications",
    skills: [
      { name: "Google Maps SDK", level: "expert", years: 6 },
      { name: "Mapbox", level: "advanced", years: 3 },
      { name: "Geolocation & GPS", level: "expert", years: 7 },
      { name: "Geofencing", level: "advanced", years: 4 },
      { name: "Route Optimization", level: "advanced", years: 4 },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Integrating AI capabilities into mobile applications",
    skills: [
      { name: "OpenAI API Integration", level: "advanced", years: 2 },
      { name: "Prompt Engineering", level: "advanced", years: 2 },
      { name: "ML Kit", level: "intermediate", years: 2 },
      { name: "On-device Inference", level: "intermediate", years: 1 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server-side development and API design for full-stack mobile products",
    skills: [
      { name: "Node.js", level: "advanced", years: 5 },
      { name: "Spring Boot", level: "intermediate", years: 3 },
      { name: "REST API Design", level: "expert", years: 8 },
      { name: "Express.js", level: "advanced", years: 4 },
      { name: "MongoDB", level: "intermediate", years: 3 },
      { name: "PostgreSQL", level: "intermediate", years: 2 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    description: "CI/CD pipelines, containerization, and development workflow automation",
    skills: [
      { name: "Git", level: "expert", years: 10 },
      { name: "Docker", level: "advanced", years: 3 },
      { name: "Azure DevOps", level: "advanced", years: 4 },
      { name: "CI/CD Pipelines", level: "advanced", years: 5 },
      { name: "GitHub Actions", level: "advanced", years: 3 },
      { name: "Fastlane", level: "intermediate", years: 3 },
      { name: "Jenkins", level: "intermediate", years: 4 },
    ],
  },
  {
    id: "payments",
    title: "Payments & Security",
    description: "Secure payment integration and encryption for fintech applications",
    skills: [
      { name: "RSA/AES Encryption", level: "expert", years: 4 },
      { name: "Payment Gateway Integration", level: "advanced", years: 5 },
      { name: "Biometric Authentication", level: "advanced", years: 5 },
      { name: "Certificate Pinning", level: "advanced", years: 4 },
      { name: "Android Keystore", level: "advanced", years: 5 },
      { name: "PCI Compliance Patterns", level: "intermediate", years: 3 },
    ],
  },
  {
    id: "cross-platform",
    title: "Cross-Platform",
    description: "Multi-platform mobile development frameworks",
    skills: [
      { name: "React Native", level: "advanced", years: 3 },
      { name: "Expo", level: "intermediate", years: 2 },
      { name: "XMPP/Real-time Protocols", level: "advanced", years: 4 },
    ],
  },
];

export function getSkillCategoryById(id: string): SkillCategory | undefined {
  return skillCategories.find((category) => category.id === id);
}

export function getAllSkills(): string[] {
  return skillCategories.flatMap((category) =>
    category.skills.map((skill) => skill.name),
  );
}
