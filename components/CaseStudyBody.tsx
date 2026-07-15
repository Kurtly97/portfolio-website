import type { ReactNode } from "react";
import Image from "next/image";
import type { CaseStudySection } from "@/data/caseStudies";
import { cn } from "@/lib/cn";
import { sectionPadX } from "@/lib/layout";

type CaseStudyBodyProps = {
  sections: CaseStudySection[];
  title: string;
  classNames?: string;
};

export function CaseStudyBody({
  sections,
  title,
  classNames,
}: CaseStudyBodyProps): ReactNode {
  if (sections.length === 0) {
    return null;
  }

  const totalImages = sections.reduce(
    (count, section) => count + section.images.length,
    0,
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-6 bg-white pb-16 sm:pb-20 lg:pb-[100px]",
        sectionPadX,
        classNames,
      )}
    >
      {sections.map((section, sectionIndex) => {
        const imagesBefore = sections
          .slice(0, sectionIndex)
          .reduce((sum, current) => sum + current.images.length, 0);

        return (
          <section
            key={section.heading ?? `section-${sectionIndex}`}
            className="flex flex-col gap-6"
            aria-labelledby={
              section.heading ? `case-study-section-${sectionIndex}` : undefined
            }
          >
            {section.heading ? (
              <h2
                id={`case-study-section-${sectionIndex}`}
                className={cn(
                  "max-w-[900px] font-heading font-bold text-neutral-darker",
                  "text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-balance",
                )}
              >
                {section.heading}
              </h2>
            ) : null}

            {section.body ? (
              <p
                className={cn(
                  "max-w-[900px] whitespace-pre-line font-text text-small font-normal",
                  "leading-relaxed text-neutral-darker sm:text-large",
                )}
              >
                {section.body}
              </p>
            ) : null}

            {section.images.map((src, imageOffset) => {
              const absoluteIndex = imagesBefore + imageOffset + 1;

              return (
                <figure
                  key={src}
                  className="relative aspect-[16/9] w-full overflow-hidden border border-black/25"
                >
                  <Image
                    src={src}
                    alt={`${title} gallery image ${absoluteIndex} of ${totalImages}`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover"
                    priority={absoluteIndex === 1}
                  />
                </figure>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}
