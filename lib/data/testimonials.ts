import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Vishal transformed our Android codebase from a fragile Java monolith into a modular Kotlin architecture. Crash rates dropped dramatically, and our team velocity increased noticeably. His mentorship helped our junior developers grow into confident contributors.",
    author: "Placeholder Name",
    role: "Engineering Manager",
    company: "4Fox Solutions",
    isPlaceholder: true,
  },
  {
    id: "testimonial-2",
    quote:
      "Working with Vishal on our real-time bidding platform was exceptional. He delivered a rock-solid XMPP integration that handled peak auction traffic flawlessly. His attention to stability metrics and proactive crash monitoring set a high bar for the team.",
    author: "Placeholder Name",
    role: "Product Lead",
    company: "BidKart",
    isPlaceholder: true,
  },
  {
    id: "testimonial-3",
    quote:
      "Vishal's full-stack mindset was invaluable on PredCred. He not only built a polished Android client but also contributed Node.js backend services that powered our live scoring pipeline. The 35% DAU growth speaks to the quality of his engagement features.",
    author: "Placeholder Name",
    role: "Co-founder & CTO",
    company: "PredCred",
    isPlaceholder: true,
  },
];

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((testimonial) => testimonial.id === id);
}
