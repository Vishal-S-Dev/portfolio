"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: PageHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "space-y-4",
        isCenter && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-sm font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="max-w-2xl text-pretty text-lg text-zinc-500 dark:text-zinc-400"
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
