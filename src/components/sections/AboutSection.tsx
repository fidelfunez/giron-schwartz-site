import { getTranslations } from "next-intl/server";

export async function AboutSection() {
  const t = await getTranslations("About");

  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-[#2C2928] px-4 py-24 md:px-6 md:py-32"
    >
      <p className="pointer-events-none absolute left-4 top-8 font-[family-name:var(--font-quincy)] text-[8rem] font-light leading-none text-white/[0.06] md:left-8 md:text-[12rem]">
        {t("kicker")}
      </p>
      <div className="relative mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
          {t("section")}
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <p className="font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/85">
            {t("body")}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="border border-white/10 bg-black/20 p-6">
              <p className="font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-widest text-[#E9CB97]">
                Manuela Girón
              </p>
              <p className="mt-1 text-sm text-white/60">{t("manuelaRole")}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {t("manuelaBio")}
              </p>
            </article>
            <article className="border border-white/10 bg-black/20 p-6">
              <p className="font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-widest text-[#E9CB97]">
                Luis Andrés Schwartz
              </p>
              <p className="mt-1 text-sm text-white/60">{t("luisRole")}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {t("luisBio")}
              </p>
            </article>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10 font-[family-name:var(--font-nexa)] text-xs uppercase tracking-[0.2em] text-white/70">
          <span>{t("statFounded")}</span>
          <span className="text-white/30">|</span>
          <span>{t("statClients")}</span>
          <span className="text-white/30">|</span>
          <span>{t("statProjects")}</span>
        </div>
      </div>
    </section>
  );
}
