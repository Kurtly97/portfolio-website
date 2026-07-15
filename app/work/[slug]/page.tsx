import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { CaseStudyBody } from "@/components/CaseStudyBody";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getCaseStudy, getCaseStudySlugs } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): { slug: string }[] {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${study.title} — Kurt Lee Gayao`,
    description: study.overview,
  };
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps): Promise<ReactNode> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <CaseStudyHero study={study} />
        <CaseStudyBody sections={study.sections} title={study.title} />
      </main>
      <Footer />
    </>
  );
}
