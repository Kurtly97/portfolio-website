import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "outline" | "link";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  classNames?: string;
  external?: boolean;
};

const variantClassNames: Record<ButtonVariant, string> = {
  solid: cn(
    "inline-flex items-center justify-center px-6 py-3",
    "border border-neutral-darkest bg-neutral-darkest",
    "font-text text-regular text-white",
    "transition-opacity hover:opacity-90",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
  ),
  outline: cn(
    "inline-flex items-center justify-center px-6 py-3",
    "border border-neutral-darkest bg-transparent",
    "font-text text-regular font-bold text-neutral-darkest",
    "transition-colors hover:bg-neutral-darkest hover:text-white",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
  ),
  link: cn(
    "inline-flex items-center justify-center",
    "font-text text-regular text-neutral-darkest underline-offset-4",
    "hover:underline",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
  ),
};

export function Button({
  children,
  href,
  variant = "solid",
  classNames,
  external = false,
}: ButtonProps): ReactNode {
  const mergedClassNames = cn(variantClassNames[variant], classNames);

  if (external) {
    return (
      <a
        href={href}
        className={mergedClassNames}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={mergedClassNames}>
      {children}
    </Link>
  );
}
