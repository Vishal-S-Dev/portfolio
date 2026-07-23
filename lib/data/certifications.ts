import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "google-associate-android",
    name: "Associate Android Developer",
    issuer: "Google",
    year: "2019",
    credentialUrl: "#",
    isPlaceholder: true,
  },
  {
    id: "kotlin-certified",
    name: "Kotlin Developer Certification",
    issuer: "JetBrains",
    year: "2020",
    credentialUrl: "#",
    isPlaceholder: true,
  },
  {
    id: "firebase-fundamentals",
    name: "Firebase Fundamentals",
    issuer: "Google Cloud",
    year: "2021",
    credentialUrl: "#",
    isPlaceholder: true,
  },
  {
    id: "android-architecture",
    name: "Android Architecture Components",
    issuer: "Google Developers",
    year: "2022",
    isPlaceholder: true,
  },
  {
    id: "azure-fundamentals",
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2023",
    credentialUrl: "#",
    isPlaceholder: true,
  },
];

export function getCertificationById(id: string): Certification | undefined {
  return certifications.find((cert) => cert.id === id);
}
