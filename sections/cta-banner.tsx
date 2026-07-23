"use client";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 surface-gradient" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <Container className="relative">
        <Reveal>
          <div className="glass mx-auto max-w-3xl rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Let&apos;s collaborate
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something exceptional
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether you need an Android architect, Kotlin migration lead, or
              React Native engineer — I&apos;m ready to help ship your next
              mobile product.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href={withBasePath("/contact")}>
                  <Mail />
                  Start a conversation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={withBasePath("/projects")}>
                  View my work
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
