"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ViewfinderHighlight } from "@/components/ViewfinderFrame";

const keys = ["boutique", "no_outsource", "horizontal", "network"] as const;

export function WhySection() {
  const t = useTranslations("Why");

  return (
    <section className="relative bg-[#141210] px-4 py-24 md:px-6 md:py-32">
      <p className="pointer-events-none absolute right-4 top-12 font-[family-name:var(--font-quincy)] text-[6rem] font-light leading-none text-white/[0.05] md:text-[10rem]">
        {t("kicker")}
      </p>
      <div className="relative mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-10 max-w-2xl">
          <ViewfinderHighlight className="font-[family-name:var(--font-nexa)] text-sm font-bold uppercase tracking-[0.15em] text-white">
            {t("framed")}
          </ViewfinderHighlight>
        </p>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {keys.map((k, i) => (
            <motion.article
              key={k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-[family-name:var(--font-quincy)] text-5xl text-[#E9CB97]/40 md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-nexa)] text-lg font-bold uppercase tracking-wider text-white">
                {t(`items.${k}.title`)}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/75">
                {t(`items.${k}.body`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
