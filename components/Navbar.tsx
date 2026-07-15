"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CompanyLogo } from "@/components/CompanyLogo";
import { cn } from "@/lib/cn";
import { sectionPadX } from "@/lib/layout";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Navbar(): ReactNode {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "border-b border-[rgba(0,20,20,0.15)]",
        "transition-[background-color,backdrop-filter] duration-200",
        scrolled || menuOpen
          ? "bg-neutral-lightest/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 w-full max-w-[1920px] items-center justify-between sm:h-[72px]",
          sectionPadX,
        )}
      >
        <CompanyLogo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-text text-regular text-scheme-1-text",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center md:hidden",
            "font-text text-regular text-scheme-1-text",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
          )}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 origin-center bg-neutral-darkest transition-transform",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-neutral-darkest transition-opacity",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 origin-center bg-neutral-darkest transition-transform",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn(
          "md:hidden",
          menuOpen ? "block" : "hidden",
          "max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[rgba(0,20,20,0.15)] bg-neutral-lightest",
        )}
      >
        <ul className={cn("flex flex-col gap-1 py-4", sectionPadX)}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block py-3 font-text text-regular text-scheme-1-text",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-darkest",
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
