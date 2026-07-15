import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/data/caseStudies";
import { cn } from "@/lib/cn";
import { sectionPadX } from "@/lib/layout";

type CaseStudyHeroProps = {
  study: CaseStudy;
  classNames?: string;
};

export function CaseStudyHero({
  study,
  classNames,
}: CaseStudyHeroProps): ReactNode {
  const challengeHost = study.challengeUrl
    ? (() => {
        try {
          return new URL(study.challengeUrl).hostname.replace(/^www\./, "");
        } catch {
          return study.challengeUrl;
        }
      })()
    : null;

  return (
    <header
      className={cn(
        "flex flex-col gap-6 bg-white",
        sectionPadX,
        "pb-6 pt-28 sm:pt-32 lg:pt-[120px]",
        classNames,
      )}
    >
      <div className="flex max-w-[900px] flex-col gap-6">
        <h1
          className={cn(
            "font-heading font-bold tracking-[-1.5px] text-neutral-darker",
            "text-[clamp(2.25rem,6vw,4rem)] leading-none text-balance",
          )}
        >
          {study.title}
        </h1>

        <p className="font-text text-regular font-semibold text-accent">
          {study.category}
        </p>

        <p className="whitespace-pre-line font-text text-[1.05rem] font-medium leading-relaxed text-neutral-darker sm:text-large">
          {study.overview}
        </p>

        {study.scope ? (
          study.scope.includes("\n") ? (
            <div className="font-text text-regular font-semibold text-neutral-darker">
              <p>Scope:</p>
              <ul className="list-disc ps-6">
                {study.scope.split("\n").map((item) => (
                  <li key={item}>
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="font-text text-regular font-semibold text-neutral-darker">
              Scope: {study.scope}
            </p>
          )
        ) : null}

        {study.tools || study.challengeUrl ? (
          <div className="flex flex-col gap-0 font-text text-regular font-semibold text-neutral-darker">
            {study.tools ? <p>Tools: {study.tools}</p> : null}
            {study.challengeUrl && challengeHost ? (
              <p>
                More on the challenge:{" "}
                <a
                  href={study.challengeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "underline underline-offset-2",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
                  )}
                >
                  {challengeHost}
                </a>
              </p>
            ) : null}
          </div>
        ) : null}

        {study.year ? (
          <p className="font-text text-regular font-semibold text-neutral-darker">
            Year: {study.year}
          </p>
        ) : null}

        {study.websiteUrl ? (
          <Button
            href={study.websiteUrl}
            variant="solid"
            external
            classNames="w-full sm:w-fit"
          >
            Visit Website
          </Button>
        ) : null}
      </div>
    </header>
  );
}
