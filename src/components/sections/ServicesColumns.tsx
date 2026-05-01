"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const keys = ["preproduction", "production", "logistics"] as const;

function ServiceIcon({ kind }: { kind: (typeof keys)[number] }) {
  if (kind === "preproduction") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#E9CB97]" fill="none" aria-hidden>
        <path d="M8 4h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="5" y="4" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 10h6M9 14h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "production") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#E9CB97]" fill="none" aria-hidden>
        <path d="M4 9h9v6H4z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M13 11l7-3v8l-7-3" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#E9CB97]" fill="none" aria-hidden>
      <path
        d="M12 20s6-5.8 6-10a6 6 0 10-12 0c0 4.2 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ServicesColumns() {
  const t = useTranslations("Services.columns");

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-black px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-center font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/80">
          {t("intro")}
        </p>
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3 md:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {keys.map((k) => (
            <motion.article
              key={k}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="min-h-[220px] border border-white/10 border-t-[#E9CB97] border-t-2 bg-[#0a0a0a] p-6 md:p-7"
            >
              <ServiceIcon kind={k} />
              <h3 className="mt-5 font-[family-name:var(--font-quincy)] text-[2rem] leading-none text-white">
                {t(`${k}.title`)}
              </h3>
              <div className="mt-4 h-px w-full bg-white/10" />
              <p className="mt-4 font-[family-name:var(--font-sans)] text-[1.02rem] leading-relaxed text-white/75">
                {t(`${k}.body`)}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
