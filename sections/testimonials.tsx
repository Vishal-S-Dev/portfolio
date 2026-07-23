"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Section id="testimonials" className="surface-gradient">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Testimonials
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What colleagues say
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </Button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.16}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="glass min-w-0 flex-[0_0_100%] rounded-xl p-6 sm:flex-[0_0_85%] lg:flex-[0_0_70%]"
              >
                <Quote className="mb-4 size-8 text-accent/40" aria-hidden />
                <blockquote className="text-lg text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex flex-wrap items-center gap-3">
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  {testimonial.isPlaceholder && (
                    <Badge variant="muted">Placeholder</Badge>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "size-2 rounded-full transition-colors",
                index === selectedIndex ? "bg-accent" : "bg-border",
              )}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Testimonials are placeholders — replace with real endorsements when
          available.
        </p>
      </Reveal>
    </Section>
  );
}
