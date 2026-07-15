export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "zigmafy",
    title: "Zigmafy",
    category: "UI/UX · Product Design",
    summary: "POS platform UI design — complex flows made simple.",
    image: "/projects/zigmafy.png",
  },
  {
    slug: "arcs",
    title: "ARCS",
    category: "UI/UX · SaaS",
    summary: "Cooperative management platform redesigned end-to-end.",
    image: "/projects/arcs.png",
  },
  {
    slug: "36-days-of-type",
    title: "36 Days of Type",
    category: "Typography · Motion",
    summary: "36-letter type exploration — one character, one direction, every day.",
    image: "/projects/36-days-of-type.png",
  },
  {
    slug: "vivita-ph",
    title: "Vivita PH",
    category: "Web Design · Build",
    summary: "Nonprofit website designed and built solo, start to finish.",
    image: "/projects/vivita-ph.png",
  },
  {
    slug: "cornell-ingredients",
    title: "Cornell Ingredients",
    category: "Website Design · Design System",
    summary: "Website design & development for a B2B food ingredients supplier",
    image: "/projects/cornell-ingredients.png",
  },
  {
    slug: "the-accountingbytes",
    title: "The AccountingBytes",
    category: "Brand Identity",
    summary:
      "Brand identity system built for longevity and cross-medium consistency.",
    image: "/projects/the-accountingbytes.png",
  },
];
