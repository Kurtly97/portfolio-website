import type { ReactNode } from "react";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home(): ReactNode {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <ProjectGrid />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
