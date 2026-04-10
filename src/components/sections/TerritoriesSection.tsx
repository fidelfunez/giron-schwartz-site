import { getTranslations } from "next-intl/server";

export async function TerritoriesSection() {
  const t = await getTranslations("Territories");
  const tags = ["gt", "hn", "sv", "mx"] as const;

  return (
    <section
      id="territories"
      className="scroll-mt-24 bg-black px-4 py-24 md:px-6 md:py-32"
    >
      <p className="pointer-events-none mb-4 font-[family-name:var(--font-quincy)] text-[6rem] font-light leading-none text-white/[0.06] md:text-[10rem]">
        {t("kicker")}
      </p>
      <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
        {t("title")}
      </h2>
      <p className="mt-8 max-w-2xl font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/75">
        {t("body")}
      </p>
      <ul className="mt-12 flex flex-wrap gap-3">
        {tags.map((key) => (
          <li
            key={key}
            className="rounded-sm border border-[#E9CB97]/50 bg-[#E9CB97]/10 px-5 py-2 font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-[0.2em] text-[#E9CB97]"
          >
            {t(key)}
          </li>
        ))}
      </ul>
      <div
        className="mt-16 h-40 max-w-lg opacity-40"
        aria-hidden
      >
        <CentralAmericaSilhouette />
      </div>
    </section>
  );
}

function CentralAmericaSilhouette() {
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full text-[#A5C2AE]">
      <title>Región</title>
      <path
        fill="currentColor"
        opacity="0.35"
        d="M20 80 L60 40 L100 50 L140 30 L180 45 L220 25 L260 50 L280 70 L260 95 L200 100 L140 90 L80 95 Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        d="M40 75 L120 55 L200 60 L260 75"
      />
    </svg>
  );
}
