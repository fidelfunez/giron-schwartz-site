import { getTranslations } from "next-intl/server";

export async function ClientsSection() {
  const t = await getTranslations("Clients");

  return (
    <section className="border-t border-white/10 bg-[#2C2928] px-4 py-24 md:px-6 md:py-32">
      <p className="pointer-events-none mb-4 font-[family-name:var(--font-quincy)] text-[6rem] font-light leading-none text-white/[0.06] md:text-[10rem]">
        {t("kicker")}
      </p>
      <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
        {t("title")}
      </h2>
      <p className="mt-8 max-w-2xl font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/80">
        {t("intro")}
      </p>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-[3/2] items-center justify-center border border-white/10 bg-black/30 text-center text-xs text-white/40"
          >
            {t("placeholder")}
          </div>
        ))}
      </div>
      <p className="mt-10 font-[family-name:var(--font-sans)] text-sm text-[#A2C3CB]">
        {t("networks")}
      </p>
    </section>
  );
}
