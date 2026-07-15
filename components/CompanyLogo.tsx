import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type CompanyLogoProps = {
  classNames?: string;
};

export function CompanyLogo({ classNames }: CompanyLogoProps): ReactNode {
  return (
    <Link
      href="/"
      aria-label="Kurt Lee Gayao — Home"
      className={cn(
        "relative inline-flex h-9 w-[84px] items-center justify-center overflow-hidden",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
        classNames,
      )}
    >
      <Image
        src="/logos/company-logo.png"
        alt=""
        width={36}
        height={33}
        className="h-[33px] w-9 object-contain"
        priority
      />
    </Link>
  );
}
