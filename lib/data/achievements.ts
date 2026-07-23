import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "years-experience",
    label: "Years Experience",
    value: 10,
    suffix: "+",
    description: "Building production mobile applications across diverse industries",
  },
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    value: 15,
    suffix: "+",
    description: "Delivered from concept through Play Store deployment",
  },
  {
    id: "downloads",
    label: "Downloads",
    value: 500,
    suffix: "K+",
    description: "Combined reach across published consumer applications",
  },
  {
    id: "releases",
    label: "Releases",
    value: 100,
    suffix: "+",
    description: "Production deployments shipped across career",
  },
  {
    id: "crash-reduction",
    label: "Crash Reduction",
    value: 30,
    suffix: "%",
    description: "Achieved through Kotlin migration and architecture overhaul",
  },
  {
    id: "faster-builds",
    label: "Faster Builds",
    value: 40,
    suffix: "%",
    description: "Modular Clean Architecture and Gradle optimization",
  },
  {
    id: "anr-reduction",
    label: "ANR Reduction",
    value: 25,
    suffix: "%",
    description: "Coroutines and Flow replacing legacy threading patterns",
  },
  {
    id: "dau-growth",
    label: "DAU Growth",
    value: 35,
    suffix: "%",
    description: "Engagement optimization through Firebase-driven campaigns",
  },
  {
    id: "crash-free",
    label: "Crash-free Sessions",
    value: 98,
    suffix: "%",
    description: "Sustained stability on real-time bidding platform",
  },
];

export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find((achievement) => achievement.id === id);
}
