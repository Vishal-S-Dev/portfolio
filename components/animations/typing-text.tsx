"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  cursor?: boolean;
}

export function TypingText({
  text,
  className,
  speed = 45,
  delay = 0,
  loop = false,
  cursor = true,
}: TypingTextProps) {
  const [displayed, setDisplayed] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let charIndex = 0;

    const startTyping = () => {
      setDisplayed("");
      setIsComplete(false);
      charIndex = 0;

      intervalId = setInterval(() => {
        charIndex += 1;
        setDisplayed(text.slice(0, charIndex));

        if (charIndex >= text.length) {
          clearInterval(intervalId);
          setIsComplete(true);

          if (loop) {
            timeoutId = setTimeout(startTyping, 1800);
          }
        }
      }, speed);
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, loop]);

  return (
    <span className={cn("inline", className)}>
      {displayed}
      {cursor && (
        <span
          aria-hidden
          className={cn(
            "ml-0.5 inline-block w-[2px] translate-y-px bg-teal-600 dark:bg-teal-400",
            isComplete && !loop ? "opacity-0" : "animate-pulse",
          )}
          style={{ height: "1em" }}
        />
      )}
    </span>
  );
}
