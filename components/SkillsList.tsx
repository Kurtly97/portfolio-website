import type { ReactNode } from "react";
import Image from "next/image";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/cn";

type SkillsListProps = {
  classNames?: string;
};

export function SkillsList({ classNames }: SkillsListProps): ReactNode {
  return (
    <div className={cn("flex flex-col gap-4", classNames)}>
      {skillGroups.map((group) => (
        <div key={group.label} className="flex flex-col gap-2.5">
          <h3 className="font-text text-regular font-semibold text-neutral-darker">
            {group.label}
          </h3>
          <ul
            className={cn(
              "grid gap-x-4 gap-y-6",
              group.label === "Design"
                ? "grid-cols-3 sm:grid-cols-6 sm:max-w-[523px]"
                : "grid-cols-3 sm:max-w-[274px]",
            )}
          >
            {group.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex w-full max-w-[78px] flex-col items-center gap-0.5 justify-self-center"
              >
                <div className="relative size-[73px] shrink-0 overflow-hidden rounded-[10px]">
                  <Image
                    src={skill.icon}
                    alt=""
                    width={146}
                    height={146}
                    unoptimized
                    className="size-full object-contain"
                  />
                </div>
                <p className="w-full text-center font-text text-tiny font-normal text-neutral-darker">
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
