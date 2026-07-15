import type { ReactNode } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";
import { sectionPadX } from "@/lib/layout";

type ProjectGridProps = {
  classNames?: string;
};

export function ProjectGrid({ classNames }: ProjectGridProps): ReactNode {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className={cn(
        "w-full bg-white",
        sectionPadX,
        "py-12 sm:py-16 lg:py-[60px]",
        classNames,
      )}
    >
      <h2 id="work-heading" className="sr-only">
        Selected work
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
