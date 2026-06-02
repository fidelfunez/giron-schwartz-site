"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const keys = ["direct", "transparent"] as const;

export function WhySection() {
  const t = useTranslations("Why");

  return (
    <section
      id="why"
      className="relative scroll-mt-24 bg-[#141210] px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/80">
          {t("subtitle")}
        </p>
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {keys.map((k, i) => (
            <motion.article
              key={k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[#E9CB97]">
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
