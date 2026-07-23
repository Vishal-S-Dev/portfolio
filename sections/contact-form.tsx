"use client";

import * as React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.contact.location,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: siteConfig.contact.linkedin,
    external: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "GitHub Profile",
    href: siteConfig.contact.github,
    external: true,
  },
] as const;

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`,
    );
    const subject = encodeURIComponent(form.subject);
    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section id="contact">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in touch
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            Have a project in mind or want to discuss mobile engineering? Send a
            message and I&apos;ll get back to you.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal delay={0.16} className="lg:col-span-3">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>
                Fill out the form below to open your email client
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send />
                  Send message
                </Button>

                {submitted && (
                  <p
                    role="status"
                    className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent"
                  >
                    Opening your email client… If it didn&apos;t open, email me
                    directly at {siteConfig.contact.email}.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-2">
          <div className="space-y-4">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50">
                    <Icon className="size-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              );

              return (
                <div key={item.label} className="glass rounded-xl p-4">
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target={"external" in item ? "_blank" : undefined}
                      rel={
                        "external" in item ? "noopener noreferrer" : undefined
                      }
                      className={cn(
                        "block transition-opacity hover:opacity-80",
                      )}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
