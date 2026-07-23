import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "nextyou",
    title: "NextYou",
    description:
      "AI-powered health companion delivering personalized wellness insights through React Native and OpenAI integration.",
    longDescription:
      "NextYou is a cross-platform health application that leverages AI to provide personalized fitness recommendations, nutrition guidance, and habit tracking. Built with React Native for iOS and Android parity, the app connects to a Node.js backend orchestrating OpenAI API calls for intelligent health coaching conversations and adaptive workout plans.",
    tech: [
      "React Native",
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "Firebase",
      "REST APIs",
      "AsyncStorage",
    ],
    category: "health",
    featured: true,
    bannerGradient: "from-emerald-500 via-teal-500 to-cyan-600",
    links: {
      demo: "#",
      github: "https://github.com/shegaonkarv",
    },
    challenges: [
      "Designing conversational AI flows that feel natural while maintaining medical disclaimer boundaries",
      "Balancing OpenAI API costs with responsive real-time chat experiences on mobile networks",
      "Synchronizing health metrics across devices with conflict-free offline data merging",
    ],
    architecture: [
      "React Native frontend with modular feature-based folder structure",
      "Node.js API gateway handling authentication, rate limiting, and OpenAI prompt orchestration",
      "Firebase for push notifications, analytics, and remote configuration",
      "Local SQLite cache for offline health log persistence",
    ],
    responsibilities: [
      "Architected full-stack mobile application from UI components through backend API design",
      "Integrated OpenAI APIs with context-aware prompt engineering for personalized health advice",
      "Built cross-platform navigation and state management for seamless iOS/Android experience",
      "Implemented secure token-based authentication and encrypted health data storage",
    ],
    features: [
      "AI health coach with contextual conversation memory",
      "Personalized workout and nutrition plan generation",
      "Daily habit tracking with streak gamification",
      "Health metrics dashboard with trend visualization",
      "Push notification reminders for medication and exercise",
    ],
    achievements: [
      "Delivered MVP across iOS and Android from single React Native codebase",
      "Reduced AI response latency by 40% through prompt caching and streaming responses",
      "Achieved 4.5+ star equivalent internal beta feedback score across 50 testers",
    ],
    metrics: [
      { label: "Platforms", value: "2", description: "iOS & Android from one codebase" },
      { label: "AI Latency", value: "40%", description: "Reduction via streaming" },
    ],
    year: "2024",
  },
  {
    slug: "bidkart",
    title: "BidKart",
    description:
      "Real-time auction platform with XMPP-powered live bidding, wallet integration, and sub-second bid confirmation.",
    longDescription:
      "BidKart is a mobile-first auction marketplace where users participate in timed bidding events across product categories. The Android app uses XMPP protocol for real-time bid propagation, ensuring participants see live updates without polling overhead. MVVM architecture and comprehensive crash monitoring kept the platform stable through rapid feature iteration.",
    tech: [
      "Kotlin",
      "Java",
      "Android",
      "XMPP",
      "MVVM",
      "Retrofit",
      "Firebase Crashlytics",
    ],
    category: "real-time",
    featured: true,
    bannerGradient: "from-orange-500 via-red-500 to-rose-600",
    links: {
      playStore: "#",
      github: "https://github.com/shegaonkarv",
    },
    challenges: [
      "Maintaining XMPP connection stability during network handoffs and background app states",
      "Preventing race conditions when multiple users bid on the same item simultaneously",
      "Designing wallet transaction flows that remain consistent under partial network failures",
    ],
    architecture: [
      "MVVM with LiveData/ViewModel for reactive UI updates during live auctions",
      "XMPP client layer with automatic reconnection and message queue persistence",
      "Repository pattern abstracting REST APIs and real-time messaging behind unified interfaces",
      "Firebase Crashlytics integration for proactive stability monitoring",
    ],
    responsibilities: [
      "Engineered core real-time bidding engine with XMPP message handling",
      "Built auction UI with countdown timers, bid history, and winner notification flows",
      "Owned Play Store release pipeline across 15+ production deployments",
      "Implemented payment wallet and checkout integration for winning bids",
    ],
    features: [
      "Live auction rooms with real-time bid updates",
      "Automated bid increment and proxy bidding support",
      "In-app wallet with secure payment gateway integration",
      "Push notifications for outbid alerts and auction endings",
      "Bid history and transaction receipt management",
    ],
    achievements: [
      "Sustained 98% crash-free session rate across 15+ production releases",
      "Delivered sub-second bid confirmation under peak concurrent load",
      "Established MVVM architecture patterns adopted team-wide for new modules",
    ],
    metrics: [
      { label: "Releases", value: "15+", description: "Production deployments" },
      { label: "Crash-free", value: "98%", description: "Session stability rate" },
    ],
    year: "2020",
    company: "BidKart",
  },
  {
    slug: "predcred",
    title: "PredCred",
    description:
      "Sports prediction platform scaling to 500K+ downloads with live scoring, leaderboards, and engagement-driven growth.",
    longDescription:
      "PredCred enables sports enthusiasts to predict match outcomes across cricket and football, competing on global leaderboards for rewards. The Android app integrates with Node.js backend services for live score feeds, Firebase for push-driven re-engagement, and gamification mechanics that drove a 35% increase in daily active users.",
    tech: [
      "Java",
      "Kotlin",
      "Android",
      "Firebase",
      "Node.js",
      "REST APIs",
      "FCM",
    ],
    category: "sports",
    featured: true,
    bannerGradient: "from-violet-500 via-purple-500 to-indigo-600",
    links: {
      playStore: "#",
    },
    challenges: [
      "Handling 10K+ concurrent prediction submissions during live IPL and World Cup matches",
      "Designing leaderboard algorithms that remain fair across time zones and partial participation",
      "Optimizing Firebase push campaigns to maximize re-engagement without notification fatigue",
    ],
    architecture: [
      "Modular Android app with separate feature modules for predictions, scores, and profiles",
      "Node.js microservices for match data ingestion, scoring, and leaderboard computation",
      "Firebase Cloud Messaging with segmented audience targeting for live match alerts",
      "Firebase Remote Config for feature flags and A/B test parameter management",
    ],
    responsibilities: [
      "Led Android client development for prediction workflows and live score displays",
      "Built Firebase integration for analytics, messaging, and remote configuration",
      "Contributed Node.js backend services for prediction validation and leaderboard updates",
      "Designed push notification strategies driving measurable DAU growth",
    ],
    features: [
      "Pre-match and live prediction submission with deadline enforcement",
      "Real-time score updates and match status tracking",
      "Global and friend-group leaderboards with weekly resets",
      "Achievement badges and prediction streak rewards",
      "Social sharing of prediction results and rankings",
    ],
    achievements: [
      "Scaled app to 500K+ downloads on Google Play Store",
      "Increased daily active users by 35% through targeted engagement campaigns",
      "Built real-time scoring pipeline reducing data delay from minutes to seconds",
    ],
    metrics: [
      { label: "Downloads", value: "500K+", description: "Google Play Store" },
      { label: "DAU Growth", value: "35%", description: "Engagement optimization" },
    ],
    year: "2019",
    company: "PredCred",
  },
  {
    slug: "entertainment-app",
    title: "Entertainment App",
    description:
      "Feature-rich Android streaming platform with content discovery, personalized recommendations, and offline playback.",
    longDescription:
      "A consumer entertainment application delivering video and audio content with intelligent discovery algorithms, user watchlists, and adaptive streaming quality. Built with modern Android architecture patterns, the app supports offline downloads, Chromecast casting, and personalized home feeds driven by viewing history analytics.",
    tech: [
      "Kotlin",
      "Android Jetpack",
      "ExoPlayer",
      "Room",
      "Retrofit",
      "Firebase",
      "MVVM",
    ],
    category: "entertainment",
    featured: false,
    bannerGradient: "from-pink-500 via-fuchsia-500 to-purple-600",
    links: {
      playStore: "#",
    },
    challenges: [
      "Optimizing video buffering and adaptive bitrate streaming for varying network conditions",
      "Managing large offline download libraries within constrained device storage budgets",
      "Building recommendation engine integration without compromising scroll performance",
    ],
    architecture: [
      "Clean Architecture with domain, data, and presentation layer separation",
      "ExoPlayer media engine with custom caching and DRM support",
      "Room database for offline content metadata and download queue management",
      "Paging 3 library for infinite scroll content feeds with placeholder shimmer states",
    ],
    responsibilities: [
      "Developed content discovery and search modules with debounced query optimization",
      "Integrated ExoPlayer with custom controls, PiP mode, and casting support",
      "Built offline download manager with background scheduling and storage quota management",
      "Implemented analytics instrumentation for content engagement tracking",
    ],
    features: [
      "Personalized home feed with trending and recommended content",
      "Full-text search with recent history and voice input support",
      "Offline download with background queue management",
      "Chromecast and PiP mode for multitasking playback",
      "User profiles with watchlist, history, and parental controls",
    ],
    achievements: [
      "Reduced video startup time by 45% through preloading and cache warming strategies",
      "Achieved smooth 60fps scrolling on content feeds with 1000+ items via Paging 3",
      "Delivered offline playback supporting 50+ hours of cached content per user",
    ],
    metrics: [
      { label: "Startup Time", value: "45%", description: "Faster video playback" },
      { label: "Offline Hours", value: "50+", description: "Cached content per user" },
    ],
    year: "2021",
  },
  {
    slug: "evolv-me",
    title: "Evolv.Me",
    description:
      "Personal growth and wellness mobile product combining habit tracking, guided journaling, and progress analytics.",
    longDescription:
      "Evolv.Me helps users build sustainable self-improvement routines through structured habit tracking, reflective journaling prompts, and visual progress analytics. The app emphasizes mindful engagement with streak mechanics, milestone celebrations, and community accountability features designed to maintain long-term user retention.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Coroutines",
      "Flow",
      "Firebase",
      "Material 3",
    ],
    category: "wellness",
    featured: false,
    bannerGradient: "from-amber-500 via-yellow-500 to-lime-500",
    links: {
      playStore: "#",
      demo: "#",
    },
    challenges: [
      "Designing habit streak logic that handles timezone changes and missed-day forgiveness",
      "Creating journaling UX that encourages daily reflection without feeling burdensome",
      "Building progress visualizations that motivate without overwhelming casual users",
    ],
    architecture: [
      "Jetpack Compose UI with Material 3 design system and dynamic theming",
      "Room database with Flow-based reactive queries for real-time habit status updates",
      "WorkManager for scheduled reminder notifications and daily summary generation",
      "Modular feature architecture enabling independent wellness module development",
    ],
    responsibilities: [
      "Designed and implemented Compose-based UI with custom animations and transitions",
      "Built habit tracking engine with flexible scheduling and streak calculation logic",
      "Created data visualization components for weekly and monthly progress reports",
      "Integrated Firebase Analytics for retention cohort analysis and feature adoption tracking",
    ],
    features: [
      "Customizable habit tracker with flexible recurrence rules",
      "Guided journaling with mood tagging and reflection prompts",
      "Progress dashboards with charts and milestone achievements",
      "Smart reminders with snooze and adaptive scheduling",
      "Export and backup of personal growth data",
    ],
    achievements: [
      "Increased 30-day retention by 28% through streak gamification and milestone rewards",
      "Delivered fully Compose-based UI reducing screen development time by 35%",
      "Built offline-first architecture ensuring uninterrupted tracking without connectivity",
    ],
    metrics: [
      { label: "30-Day Retention", value: "28%", description: "Improvement via gamification" },
      { label: "Dev Velocity", value: "35%", description: "Faster with Compose UI" },
    ],
    year: "2023",
  },
  {
    slug: "goglitter",
    title: "GoGlitter",
    description:
      "Fintech mobile application with bank-grade RSA/AES encryption for ICICI Bank payment and transaction workflows.",
    longDescription:
      "GoGlitter is a secure fintech application enabling digital payments, fund transfers, and transaction management for ICICI Bank integration. The app implements multi-layer encryption using RSA key exchange and AES payload encryption, meeting stringent banking compliance requirements while delivering a frictionless mobile payment experience.",
    tech: [
      "Kotlin",
      "Android",
      "RSA/AES Encryption",
      "Retrofit",
      "Room",
      "Biometric Auth",
      "MVVM",
    ],
    category: "fintech",
    featured: true,
    bannerGradient: "from-blue-600 via-indigo-600 to-violet-700",
    links: {
      playStore: "#",
    },
    challenges: [
      "Implementing RSA/AES hybrid encryption without degrading transaction submission latency",
      "Meeting ICICI Bank security audit requirements for key storage and certificate pinning",
      "Designing transaction retry logic that prevents duplicate payments under network failures",
    ],
    architecture: [
      "MVVM with sealed class UI states for transaction lifecycle management",
      "Android Keystore integration for secure RSA private key storage",
      "Certificate pinning on all banking API endpoints with rotation support",
      "Room-based transaction queue with idempotency keys for offline retry safety",
    ],
    responsibilities: [
      "Architected end-to-end encryption layer for all banking API communications",
      "Built payment flow UI with biometric authentication and transaction confirmation",
      "Implemented secure key exchange protocol compliant with ICICI Bank specifications",
      "Conducted security review and penetration testing remediation for production release",
    ],
    features: [
      "Secure fund transfers with multi-factor authentication",
      "Transaction history with encrypted local storage",
      "Biometric login with fallback PIN authentication",
      "Real-time payment status tracking and receipt generation",
      "Beneficiary management with encrypted contact storage",
    ],
    achievements: [
      "Passed ICICI Bank security compliance audit on first submission",
      "Processed 99.9% of transactions under 2-second end-to-end latency",
      "Zero security incidents across production deployment lifecycle",
    ],
    metrics: [
      { label: "Transaction Success", value: "99.9%", description: "Under 2s latency" },
      { label: "Security Incidents", value: "0", description: "Production lifecycle" },
    ],
    year: "2022",
    company: "4Fox Solutions",
  },
  {
    slug: "mobicrew",
    title: "MobiCrew",
    description:
      "Mobility booking platform with Google Maps integration, real-time tracking, and Firebase-powered notifications.",
    longDescription:
      "MobiCrew is a ride and mobility booking application connecting passengers with service providers through real-time location tracking, route optimization, and seamless booking workflows. Google Maps SDK powers live tracking and ETA calculations, while Firebase handles push notifications, driver-passenger matching, and trip history synchronization.",
    tech: [
      "Kotlin",
      "Google Maps SDK",
      "Firebase",
      "Geolocation",
      "Retrofit",
      "Coroutines",
      "Room",
    ],
    category: "mobility",
    featured: false,
    bannerGradient: "from-sky-500 via-blue-500 to-indigo-600",
    links: {
      playStore: "#",
    },
    challenges: [
      "Maintaining accurate real-time location updates while minimizing battery consumption",
      "Handling map rendering performance with multiple active markers during peak booking hours",
      "Designing booking state machine covering cancellation, reassignment, and no-show scenarios",
    ],
    architecture: [
      "Google Maps SDK with custom marker clustering and route polyline rendering",
      "Firebase Realtime Database for live driver location streaming",
      "Foreground service for continuous GPS tracking during active trips",
      "Repository pattern combining REST booking APIs with Firebase location subscriptions",
    ],
    responsibilities: [
      "Integrated Google Maps with custom UI overlays for booking and tracking screens",
      "Built real-time location pipeline using Firebase with battery-optimized update intervals",
      "Developed booking flow from search through payment confirmation and trip completion",
      "Implemented push notification system for driver assignment and trip status updates",
    ],
    features: [
      "Interactive map-based booking with pickup and drop-off pin selection",
      "Real-time driver tracking with live ETA updates",
      "In-app chat between passenger and driver during active trips",
      "Trip history with route replay and fare breakdown",
      "Multiple payment methods including wallet and card integration",
    ],
    achievements: [
      "Reduced average booking completion time by 30% through streamlined map UX",
      "Achieved sub-5-meter location accuracy during active trips with optimized GPS polling",
      "Delivered 99.5% successful booking match rate during peak demand periods",
    ],
    metrics: [
      { label: "Booking Speed", value: "30%", description: "Faster completion flow" },
      { label: "Match Rate", value: "99.5%", description: "Peak demand periods" },
    ],
    year: "2021",
    company: "4Fox Solutions",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(
  category: Project["category"],
): Project[] {
  return projects.filter((project) => project.category === category);
}
