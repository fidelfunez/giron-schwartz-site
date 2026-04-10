import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhySection } from "@/components/sections/WhySection";
import { TerritoriesSection } from "@/components/sections/TerritoriesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Footer } from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesGrid />
        <WhySection />
        <TerritoriesSection />
        <ClientsSection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
