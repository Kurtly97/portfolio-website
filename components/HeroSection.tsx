import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { sectionPadX } from "@/lib/layout";

type HeroSectionProps = {
  classNames?: string;
};

export function HeroSection({ classNames }: HeroSectionProps): ReactNode {
  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "bg-neutral-lightest",
        sectionPadX,
        "pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-[100px] lg:pt-[120px]",
        classNames,
      )}
    >
      <div
        className={cn(
          "@container flex w-full max-w-[720px] flex-col",
          "gap-5 sm:gap-6",
        )}
      >
        <p className="font-text text-regular font-semibold text-neutral-darker">
          Kurt Lee Gayao
        </p>

        <h1
          id="hero-heading"
          className={cn(
            "flex w-full min-w-0 flex-col gap-1",
            "text-[24px] leading-[1.15]",
            "md:text-[clamp(2.25rem,8vw,4rem)] md:leading-[1.05]",
            "tracking-[-0.04em] md:tracking-[-1.5px]",
          )}
        >
          <span
            className={cn(
              "font-heading font-bold text-balance text-neutral-darker",
              "md:whitespace-nowrap",
            )}
          >
            Most designers hand off.
          </span>
          <span
            className={cn(
              "font-accent font-bold italic text-balance text-accent",
              "md:whitespace-nowrap",
            )}
          >
            I follow through.
          </span>
        </h1>

        <p className="max-w-[600px] text-pretty font-text text-small font-medium leading-normal text-neutral-darkest sm:text-large">
          UI/UX Designer · Marketing Strategist · 6 years, concept to
          completion.
        </p>

        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Button href="#work" variant="solid" classNames="w-full sm:w-auto">
            View Work
          </Button>
          <Button
            href="#contact"
            variant="link"
            classNames="underline w-full justify-center sm:w-auto sm:justify-start"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
