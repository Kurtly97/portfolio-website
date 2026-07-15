export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Design",
    skills: [
      { name: "Figma", icon: "/skills/icons/figma.png" },
      { name: "Affinity", icon: "/skills/icons/affinity.png" },
      { name: "Illustrator", icon: "/skills/icons/illustrator.png" },
      { name: "Photoshop", icon: "/skills/icons/photoshop.png" },
      { name: "InDesign", icon: "/skills/icons/indesign.png" },
      { name: "After Effects", icon: "/skills/icons/after-effects.png" },
    ],
  },
  {
    label: "Development",
    skills: [
      { name: "Framer", icon: "/skills/icons/framer.png" },
      { name: "HTML/CSS/JS", icon: "/skills/icons/web-dev.png" },
      { name: "Next.js", icon: "/skills/icons/nextjs.png" },
    ],
  },
];
