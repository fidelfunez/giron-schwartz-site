import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export async function RegionCtaSection({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "RegionCta" });

  return (
    <section
      id="region"
      className="scroll-mt-24 bg-[#141210] px-4 pb-24 pt-3 md:px-6 md:pb-32 md:pt-5"
    >
      <div className="mx-auto mb-6 h-px w-full max-w-6xl bg-white/10" />
      <div className="mx-auto max-w-6xl">
        <div className="relative md:grid md:min-h-[min(420px,52vw)] md:grid-cols-[minmax(0,30rem)_minmax(0,1fr)] md:items-center md:gap-6 lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
          {/* Copy + CTA — cap text column so the map column can use remaining width (less dead space on the right) */}
          <div className="relative z-20 min-w-0 max-w-xl md:max-w-none md:pr-1 md:pt-2 lg:pr-2">
            <h2 className="font-[family-name:var(--font-quincy)] text-2xl font-normal leading-snug tracking-tight text-white/95 md:text-[1.65rem] lg:text-3xl">
              {t("lead")}
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/82 md:mt-5">
              {t("follow")}
            </p>
            <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/62 md:mt-4">
              {t("sub")}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-sm bg-[#E9CB97] px-8 py-3 font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#f0ddb3] md:mt-10"
            >
              {t("cta")}
            </a>
          </div>

          {/* Map — right column, scaled up with soft fades into section bg (client reference) */}
          <figure className="relative z-10 mt-10 min-h-[240px] w-full min-w-0 md:mt-0 md:min-h-[min(420px,48vw)] md:pl-3 lg:min-h-[440px] lg:pl-5">
            <div className="absolute inset-0 overflow-hidden bg-[#141210]">
              <img
                src="/maps/Map_of_Central_America_new_Svg.svg"
                alt={t("mapTitle")}
                loading="lazy"
                decoding="async"
                className="absolute left-1/2 top-1/2 h-[118%] min-h-full w-[118%] min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-[40%_48%] md:hidden"
              />
              <object
                type="image/svg+xml"
                data="/maps/Map_of_Central_America_new_Svg.svg"
                title={t("mapTitle")}
                aria-labelledby="region-map-caption"
                className="absolute left-1/2 top-1/2 hidden h-[118%] min-h-full w-[118%] min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-[40%_48%] md:block md:h-[125%] md:w-[125%] md:object-[44%_46%] lg:object-[45%_45%]"
              />
              {/* Fade at seam — keep narrow so southern Mexico (northwest of map) is not painted out */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(18%,3.8rem)] bg-gradient-to-r from-[#141210] via-[#141210]/24 to-transparent md:w-[min(22%,4.8rem)]"
                aria-hidden
              />
              {/* Top edge — soften abrupt crop with a gentle fade into section background */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[min(18%,4.2rem)] bg-gradient-to-b from-[#141210]/55 via-[#141210]/18 to-transparent"
                aria-hidden
              />
              {/* Bottom edge — lighter so the map “ocean” reads flat (#141210), not vignetted mud */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(26%,6rem)] bg-gradient-to-t from-[#141210] via-[#141210]/35 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-[#141210]/35 to-transparent md:w-10"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 right-0 z-[1] h-24 w-24 bg-[radial-gradient(circle_at_bottom_right,#141210_0%,#141210cc_36%,#14121066_62%,transparent_100%)] md:h-28 md:w-28"
                aria-hidden
              />
            </div>
            <figcaption
              id="region-map-caption"
              className="pointer-events-none absolute bottom-2 left-2 right-2 z-[2] font-[family-name:var(--font-sans)] text-[0.65rem] font-medium uppercase leading-snug tracking-[0.16em] text-white/45 md:bottom-3 md:left-3 md:right-3 md:text-[0.68rem]"
            >
              {t("mapTitle")}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
