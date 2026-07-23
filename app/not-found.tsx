import Link from "next/link";

import { Container } from "@/components/shared/container";
import { withBasePath } from "@/lib/utils";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="glass max-w-lg rounded-2xl p-10 sm:p-12">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-pretty text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={withBasePath("/")}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-teal-600 px-8 text-base font-medium text-white shadow-sm hover:bg-teal-700 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
          >
            Back to home
          </Link>
          <Link
            href={withBasePath("/projects")}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200/60 bg-white/80 px-8 text-base font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/80 dark:text-zinc-50 dark:hover:bg-zinc-800/80"
          >
            View projects
          </Link>
        </div>
      </div>
    </Container>
  );
}
