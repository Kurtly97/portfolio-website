import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  classNames?: string;
};

export function ProjectCard({
  project,
  classNames,
}: ProjectCardProps): ReactNode {
  const href = `/work/${project.slug}`;

  return (
    <article className={cn("flex min-w-0 flex-col gap-4 sm:gap-6", classNames)}>
      <Link
        href={href}
        className={cn(
          "group flex flex-col gap-4 sm:gap-6",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
        )}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden border border-black/25">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <p className="font-text text-regular font-medium text-meta sm:text-medium">
            {project.category}
          </p>
          <h3
            className={cn(
              "font-text text-[1.5rem] font-medium leading-snug tracking-[-0.9px] text-black",
              "text-balance sm:text-[30px] sm:leading-[42px]",
            )}
          >
            {project.title}
          </h3>
          <p className="text-pretty font-text text-small font-medium text-meta sm:text-medium">
            {project.summary}
          </p>
        </div>
      </Link>
    </article>
  );
}
