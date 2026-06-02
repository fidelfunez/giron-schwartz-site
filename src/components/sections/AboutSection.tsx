import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { SELECTED_CLIENT_LOGOS } from "@/constants/selected-clients";

type Props = {
  locale: string;
};

export async function AboutSection({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "About" });

  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-[#2C2928] px-4 py-24 md:px-6 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
          {t("section")}
        </h2>
        <p className="mt-10 max-w-3xl text-justify text-pretty hyphens-auto font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/85">
          {t("body")}
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <article className="border border-white/10 bg-black/20 p-6 md:p-8">
            <Image
              src="/photos/founders/manuela-giron-founder.webp"
              alt="Manuela Girón"
              width={1366}
              height={2048}
              className="h-72 w-full object-cover"
              style={{ objectPosition: "center calc(18% + 9px)" }}
            />
            <p className="mt-5 font-heading text-xs font-bold uppercase tracking-widest text-[#E9CB97]">
              Manuela Girón
            </p>
            <p className="mt-1 text-sm text-white/60">{t("manuelaRole")}</p>
            <p className="mt-4 text-justify text-pretty hyphens-auto text-sm leading-relaxed text-white/80">
              {t("manuelaBio")}
            </p>
          </article>
          <article className="border border-white/10 bg-black/20 p-6 md:p-8">
            <Image
              src="/photos/founders/luis-andres-schwartz-founder.webp"
              alt="Luis Andrés Schwartz"
              width={1366}
              height={2048}
              className="h-72 w-full object-cover"
              style={{ objectPosition: "center calc(18% - 14px)" }}
            />
            <p className="mt-5 font-heading text-xs font-bold uppercase tracking-widest text-[#E9CB97]">
              Luis Andrés Schwartz
            </p>
            <p className="mt-1 text-sm text-white/60">{t("luisRole")}</p>
            <p className="mt-4 text-justify text-pretty hyphens-auto text-sm leading-relaxed text-white/80">
              {t("luisBio")}
            </p>
          </article>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <h3 className="text-center font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#A2C3CB]">
            {t("selectedHeading")}
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-5">
            {SELECTED_CLIENT_LOGOS.map((logo, i) => (
              <div key={logo.src} className="flex items-center gap-4 md:gap-5">
                <div className="flex h-10 w-24 items-center justify-center border border-white/10 bg-black/25 px-1.5 py-1">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={288}
                    height={120}
                    className="max-h-full max-w-full object-contain"
                    sizes="96px"
                  />
                </div>
                {i < SELECTED_CLIENT_LOGOS.length - 1 && (
                  <span className="hidden text-[#E9CB97] md:inline" aria-hidden>
                    •
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#A2C3CB]">
            {t("testimonialsHeading")}
          </h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {(
              [
                ["testimonial1Quote", "testimonial1Credit"],
                ["testimonial2Quote", "testimonial2Credit"],
                ["testimonial3Quote", "testimonial3Credit"],
              ] as const
            ).map(([quoteKey, creditKey]) => (
              <blockquote
                key={quoteKey}
                className="border border-white/10 bg-black/15 p-5"
              >
                <p className="mb-2 font-heading text-4xl font-black leading-none text-[#E9CB97] md:text-5xl">
                  “
                </p>
                <p className="font-[family-name:var(--font-sans)] text-[1.1rem] font-bold leading-snug text-white/90">
                  {t(quoteKey)}
                </p>
                <footer className="mt-3 font-[family-name:var(--font-sans)] text-[1.02rem] text-white/65">
                  {t(creditKey)}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
