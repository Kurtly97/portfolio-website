import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SkillsList } from "@/components/SkillsList";
import { cn } from "@/lib/cn";
import { sectionPad } from "@/lib/layout";

type AboutSectionProps = {
  classNames?: string;
};

export function AboutSection({ classNames }: AboutSectionProps): ReactNode {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={cn("flex flex-col gap-8 bg-neutral-lightest sm:gap-10", sectionPad, classNames)}
    >
      <div className="flex flex-col gap-5 sm:gap-6">
        <h2
          id="about-heading"
          className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-neutral-darker"
        >
          About
        </h2>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="relative size-24 shrink-0 overflow-hidden rounded-full sm:size-[138px]">
            <Image
              src="/about/portrait.jpg"
              alt="Portrait of Kurt Lee Gayao"
              fill
              sizes="(max-width: 640px) 96px, 138px"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="flex min-w-0 flex-col">
            <p className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-balance text-neutral-darker">
              Kurt Lee Gayao
            </p>
            <p className="font-text text-regular font-semibold text-accent">
              Designer who builds
            </p>
          </div>
        </div>

        <p className="max-w-[741px] whitespace-pre-line text-pretty font-text text-[1.05rem] font-medium leading-relaxed text-neutral-darker sm:text-large">
          {`I'm a designer who also builds. For the past 6 years at IOL Inc., I've led design, brand, and web where I handle everything from the first sketch to the live site.

No handoff needed, because I do both sides. That means fewer gaps, faster turnaround, and one person who speaks both design and dev fluently. Open to full-time and contract roles in design, marketing, or both.`}
        </p>

        <Button
          href="https://www.linkedin.com/in/kurtlee1397/"
          variant="outline"
          external
          classNames="w-full sm:w-fit"
        >
          View LinkedIn
        </Button>
      </div>

      <SkillsList />
    </section>
  );
}
