import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { sectionPad } from "@/lib/layout";

const socialLinks = [
  { href: "https://www.linkedin.com/in/kurtlee1397/", label: "LinkedIn" },
  { href: "https://www.behance.net/kurtleegayao", label: "Behance" },
  { href: "https://github.com/Kurtly97", label: "GitHub" },
] as const;

type FooterProps = {
  classNames?: string;
};

export function Footer({ classNames }: FooterProps): ReactNode {
  return (
    <footer
      id="contact"
      className={cn("flex flex-col gap-5 bg-neutral-darker", sectionPad, classNames)}
    >
      <div className="flex min-w-0 flex-col gap-1">
        <p
          className={cn(
            "whitespace-nowrap font-heading font-bold text-neutral-lightest",
            "text-[clamp(1.5rem,6.5vw,3rem)] leading-[1.15]",
          )}
        >
          Let’s make something
        </p>
        <p
          className={cn(
            "whitespace-nowrap font-accent font-bold italic tracking-[-1.5px]",
            "text-[clamp(1.5rem,6.5vw,3rem)] leading-none text-accent-soft",
          )}
        >
          worth building
        </p>
      </div>

      <a
        href="mailto:hello@kurtleeg.work"
        className={cn(
          "w-fit break-all font-text text-regular font-medium text-neutral-lightest underline sm:text-large sm:break-normal",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-lightest",
        )}
      >
        hello@kurtleeg.work
      </a>

      <ul className="flex flex-wrap gap-x-5 gap-y-3">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "font-text text-regular font-medium text-neutral-lightest underline",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-lightest",
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="font-text text-small font-medium text-neutral-lightest sm:text-regular">
        © 2026 Kurt Lee Gayao. Made with Next.js.
      </p>
    </footer>
  );
}
