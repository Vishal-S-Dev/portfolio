import type { TechRadarData, TechRadarItem } from "@/types";

const techRadarItems: TechRadarItem[] = [
  // Adopt
  {
    id: "kotlin",
    name: "Kotlin",
    ring: "adopt",
    quadrant: "languages",
    description:
      "Primary language for all new Android development. Coroutines, Flow, and null safety deliver measurable stability gains.",
  },
  {
    id: "jetpack-compose",
    name: "Jetpack Compose",
    ring: "adopt",
    quadrant: "frameworks",
    description:
      "Modern declarative UI toolkit adopted for new screens and greenfield modules. Accelerates development and simplifies state management.",
  },
  {
    id: "coroutines-flow",
    name: "Coroutines & Flow",
    ring: "adopt",
    quadrant: "frameworks",
    description:
      "Standard async pattern replacing RxJava and callback chains. Structured concurrency eliminates ANR-prone threading bugs.",
  },
  {
    id: "clean-architecture",
    name: "Clean Architecture",
    ring: "adopt",
    quadrant: "frameworks",
    description:
      "Layered architecture with clear separation of concerns. Enables modular builds, testability, and team parallelization.",
  },
  {
    id: "room",
    name: "Room Database",
    ring: "adopt",
    quadrant: "platforms",
    description:
      "Go-to persistence layer for offline-first mobile apps. Type-safe queries with Flow integration for reactive data layers.",
  },
  {
    id: "firebase",
    name: "Firebase",
    ring: "adopt",
    quadrant: "platforms",
    description:
      "Analytics, Crashlytics, FCM, and Remote Config for production apps. Proven engagement and stability tooling.",
  },
  {
    id: "git-cicd",
    name: "Git & CI/CD",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Azure DevOps and GitHub Actions pipelines for automated builds, testing, and Play Store deployments.",
  },

  // Trial
  {
    id: "react-native",
    name: "React Native",
    ring: "trial",
    quadrant: "frameworks",
    description:
      "Evaluated for cross-platform products requiring iOS/Android parity. Successfully delivered NextYou health app from shared codebase.",
  },
  {
    id: "openai-api",
    name: "OpenAI API",
    ring: "trial",
    quadrant: "tools",
    description:
      "Integrating AI capabilities into mobile products. Prompt engineering and streaming responses for conversational health coaching.",
  },
  {
    id: "kmm",
    name: "Kotlin Multiplatform",
    ring: "trial",
    quadrant: "frameworks",
    description:
      "Exploring shared business logic between Android and iOS. Assessing maturity for production fintech and mobility use cases.",
  },
  {
    id: "compose-multiplatform",
    name: "Compose Multiplatform",
    ring: "trial",
    quadrant: "frameworks",
    description:
      "Investigating shared UI layer across Android, iOS, and Desktop. Monitoring ecosystem maturity and library support.",
  },

  // Assess
  {
    id: "flutter",
    name: "Flutter",
    ring: "assess",
    quadrant: "frameworks",
    description:
      "Evaluating Dart/Flutter for potential greenfield projects. Assessing widget ecosystem, performance, and team ramp-up cost.",
  },
  {
    id: "mapbox",
    name: "Mapbox",
    ring: "assess",
    quadrant: "platforms",
    description:
      "Alternative to Google Maps SDK for custom styling and offline map tiles. Assessing cost and feature parity for mobility apps.",
  },
  {
    id: "graphql",
    name: "GraphQL",
    ring: "assess",
    quadrant: "tools",
    description:
      "Monitoring GraphQL adoption for mobile API consumption. Evaluating Apollo Client and query optimization patterns.",
  },
  {
    id: "wear-os",
    name: "Wear OS",
    ring: "assess",
    quadrant: "platforms",
    description:
      "Assessing smartwatch companion apps for health and fitness products. Evaluating Compose for Wear and health sensor APIs.",
  },

  // Hold
  {
    id: "java-android",
    name: "Java (Android)",
    ring: "hold",
    quadrant: "languages",
    description:
      "Legacy codebase maintenance only. All new development uses Kotlin. Migration in progress for remaining Java modules.",
  },
  {
    id: "rxjava",
    name: "RxJava",
    ring: "hold",
    quadrant: "frameworks",
    description:
      "Being phased out in favor of Coroutines and Flow. Existing RxJava modules maintained but not extended.",
  },
  {
    id: "xml-layouts",
    name: "XML Layouts",
    ring: "hold",
    quadrant: "frameworks",
    description:
      "Legacy View-based UI maintained for existing screens. New features built exclusively with Jetpack Compose.",
  },
  {
    id: "eclipse-adt",
    name: "Eclipse ADT",
    ring: "hold",
    quadrant: "tools",
    description:
      "Fully deprecated. Android Studio is the sole IDE for all mobile development workflows.",
  },
];

function groupByRing(ring: TechRadarItem["ring"]): TechRadarItem[] {
  return techRadarItems.filter((item) => item.ring === ring);
}

export const techRadar: TechRadarData = {
  adopt: groupByRing("adopt"),
  trial: groupByRing("trial"),
  assess: groupByRing("assess"),
  hold: groupByRing("hold"),
};

export { techRadarItems };

export function getTechRadarItemById(id: string): TechRadarItem | undefined {
  return techRadarItems.find((item) => item.id === id);
}

export function getTechRadarByQuadrant(
  quadrant: TechRadarItem["quadrant"],
): TechRadarItem[] {
  return techRadarItems.filter((item) => item.quadrant === quadrant);
}
