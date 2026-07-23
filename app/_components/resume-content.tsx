"use client";

import Link from "next/link";
import { Download, Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  aboutData,
  experiences,
  getAllSkills,
  skillCategories,
} from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { withBasePath } from "@/lib/utils";

const RESUME_PDF_PATH = withBasePath("/resume/Vishal_Shegaonkar_Resume.pdf");

export function ResumeContent() {
  const allSkills = getAllSkills();

  return (
    <Container className="py-16 md:py-24">
      <div className="print:hidden">
        <PageHeader
          eyebrow="Resume"
          title="Professional resume"
          description="Download a PDF copy or browse the formatted version below. Optimized for printing."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={RESUME_PDF_PATH}
            download
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-8 text-base font-medium text-white shadow-sm hover:bg-teal-700 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
          >
            <Download className="size-4" />
            Download resume (PDF)
          </a>
          <Link
            href={withBasePath("/contact")}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200/60 bg-white/80 px-8 text-base font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/80 dark:text-zinc-50 dark:hover:bg-zinc-800/80"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <article
        id="resume-document"
        className="resume-document mt-12 rounded-xl border border-border bg-background p-8 shadow-sm print:mt-0 print:rounded-none print:border-0 print:p-0 print:shadow-none sm:p-10 md:p-12"
      >
        <header className="space-y-3 border-b border-border pb-6 print:pb-4">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="text-lg font-medium text-accent">{siteConfig.title}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent print:text-foreground"
            >
              <Mail className="size-3.5 print:hidden" />
              {siteConfig.contact.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="size-3.5 print:hidden" />
              {siteConfig.contact.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 print:hidden" />
              {siteConfig.contact.location}
            </span>
          </div>
        </header>

        <section className="py-6 print:py-4">
          <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
            Summary
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {aboutData.summary}
          </p>
        </section>

        <Separator className="print:bg-border" />

        <section className="py-6 print:py-4">
          <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
            Experience
          </h2>
          <div className="mt-4 space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {exp.role}
                      {exp.current && (
                        <Badge variant="accent" className="ml-2 print:hidden">
                          Current
                        </Badge>
                      )}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.summary}
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {exp.responsibilities.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent print:bg-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.slice(0, 8).map((tech) => (
                      <Badge
                        key={tech}
                        variant="muted"
                        className="text-xs print:border print:border-border print:bg-transparent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator className="print:bg-border" />

        <section className="py-6 print:py-4">
          <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
            Education
          </h2>
          <div className="mt-4 space-y-4">
            {aboutData.education.map((edu) => (
              <div key={edu.degree}>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.institution}, {edu.university} · {edu.year}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="print:bg-border" />

        <section className="py-6 print:py-4">
          <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
            Skills
          </h2>
          <div className="mt-4 space-y-4">
            {skillCategories.map((category) => (
              <div key={category.id}>
                <h3 className="text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.skills.map((s) => s.name).join(" · ")}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground print:hidden">
            {allSkills.length} skills across {skillCategories.length} categories
          </p>
        </section>

        <Separator className="print:bg-border" />

        <section className="py-6 print:py-4">
          <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
            Languages
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {aboutData.languages
              .map(
                (lang) =>
                  `${lang.name} (${lang.proficiency.charAt(0).toUpperCase()}${lang.proficiency.slice(1)})`,
              )
              .join(" · ")}
          </p>
        </section>

        <footer className="border-t border-border pt-6 text-sm text-muted-foreground print:pt-4">
          <p>
            PDF version:{" "}
            <a href={RESUME_PDF_PATH} className="text-accent hover:underline">
              Vishal_Shegaonkar_Resume.pdf
            </a>
          </p>
        </footer>
      </article>
    </Container>
  );
}
