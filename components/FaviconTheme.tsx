"use client";

import { useEffect } from "react";

const LIGHT_ICON = "/favicon-light-v3.png?v=3";
const DARK_ICON = "/favicon-dark-v3.png?v=3";

function setFavicon(href: string): void {
  document
    .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
    .forEach((node) => node.remove());

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = href;
  document.head.appendChild(link);
}

export function FaviconTheme(): null {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (): void => {
      setFavicon(media.matches ? DARK_ICON : LIGHT_ICON);
    };

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return null;
}
