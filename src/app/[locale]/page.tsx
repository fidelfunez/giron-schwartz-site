import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesColumns } from "@/components/sections/ServicesColumns";
import { WhySection } from "@/components/sections/WhySection";
import { RegionCtaSection } from "@/components/sections/RegionCtaSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";

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
        <AboutSection locale={locale} />
        <ServicesColumns />
        <WhySection />
        <RegionCtaSection locale={locale} />
        <FeaturedWorkSection locale={locale} />
        <QuoteSection locale={locale} />
      </main>
      <Footer locale={locale} />
      <BackToTopButton />
    </>
  );
}
