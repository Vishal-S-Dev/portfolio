import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for mobile engineering opportunities, collaborations, or technical discussions. Based in ${siteConfig.contact.location}.`,
};

export default function ContactPage() {
  return (
    <>
      <Container className="pb-4 pt-16 md:pb-8 md:pt-24">
        <PageHeader
          eyebrow="Contact"
          title="Let's connect"
          description={`Open to senior mobile engineering roles, consulting, and interesting product collaborations. Reach out at ${siteConfig.contact.email}.`}
        />
      </Container>
      <ContactForm />
    </>
  );
}
