import type { AboutData } from "@/types";

export const aboutData: AboutData = {
  summary:
    "Senior Mobile Engineer with over a decade of experience architecting and shipping high-performance Android and React Native applications. I specialize in transforming legacy codebases into modern, scalable architectures — driving measurable improvements in stability, build velocity, and user engagement. From bank-grade fintech encryption to real-time bidding systems and AI-powered health platforms, I bring deep technical expertise paired with a track record of mentoring teams and delivering products that scale.",
  yearsOfExperience: 10,
  domains: [
    "Fintech",
    "Mobility",
    "Health & AI",
    "Real-time Systems",
    "DevOps",
    "Entertainment",
    "Sports & Gaming",
  ],
  careerJourney:
    "My journey began at EMSYS, where I cut my teeth on enterprise Android development and REST API integrations — learning to own features end-to-end from requirements through deployment. At PredCred, I helped scale a sports prediction platform to 500K+ downloads, discovering the power of Firebase-driven growth and Node.js backend collaboration. BidKart sharpened my real-time systems expertise with XMPP-powered live bidding at scale. Since joining 4Fox Solutions in 2020, I've led architecture modernization initiatives — migrating codebases to Kotlin, implementing Clean Architecture, and delivering secure fintech solutions for ICICI Bank. Today, I continue pushing boundaries with React Native, AI integrations, and Jetpack Compose while mentoring the next generation of mobile engineers.",
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "MET Institute of Engineering",
      university: "Pune University",
      location: "Nashik, India",
      year: "2012",
      description:
        "Graduate program focused on software engineering, data structures, database management, and object-oriented design principles.",
    },
  ],
  languages: [
    { name: "English", proficiency: "professional" },
    { name: "Marathi", proficiency: "native" },
    { name: "Hindi", proficiency: "fluent" },
  ],
  highlights: [
    "Led Kotlin migration reducing crash rates by 30% across production applications",
    "Architected Clean Architecture/MVVM restructuring cutting build times by 40%",
    "Scaled mobile products to 500K+ downloads with measurable engagement growth",
    "Implemented bank-grade RSA/AES encryption for ICICI Bank fintech workflows",
    "Mentored 3 junior engineers to independent feature ownership",
    "Shipped 100+ production releases maintaining 98% crash-free session rates",
    "Built real-time XMPP bidding systems and AI-powered health applications",
  ],
};
