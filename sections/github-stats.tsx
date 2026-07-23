"use client";
import { FaGithub } from "react-icons/fa6";

import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const STAT_PLACEHOLDERS = [
  { label: "Public Repos", value: "—" },
  { label: "Stars", value: "—" },
  { label: "Contributions", value: "—" },
  { label: "Followers", value: "—" },
] as const;

export function GithubStats() {
  return (
    <Section id="github" className="surface-gradient">
      <div className="mb-12 space-y-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            GitHub
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Open source activity
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-muted-foreground">
            GitHub stats and contribution graph — connect your username to
            display live data.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.16}>
          <Card className="glass">
            <CardHeader>
              <div className="flex items-center gap-2">
                <FaGithub className="size-5 text-accent" />
                <CardTitle>Profile stats</CardTitle>
              </div>
              <CardDescription>
                Connect GitHub username to fetch live statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {STAT_PLACEHOLDERS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border p-4"
                  >
                    <div className="skeleton mb-2 h-8 w-16 rounded" />
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.2}>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Contribution graph</CardTitle>
              <CardDescription>
                Placeholder for GitHub contribution activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Array.from({ length: 7 }).map((_, row) => (
                  <div key={row} className="flex gap-1.5">
                    {Array.from({ length: 26 }).map((_, col) => {
                      const opacity =
                        0.3 + ((row * 26 + col) % 5) * 0.1;
                      return (
                        <div
                          key={col}
                          className="skeleton size-3 rounded-sm"
                          style={{ opacity }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Set{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  GITHUB_USERNAME
                </code>{" "}
                to enable live GitHub integration.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
