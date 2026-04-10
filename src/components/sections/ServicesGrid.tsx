"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SERVICE_KEYS, type ServiceKey } from "@/constants/services";

function ServiceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
      <path d="M17 15l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServicesGrid() {
  const t = useTranslations("Services");
  const tItem = useTranslations("Services.items");

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-black px-4 py-24 md:px-6 md:py-32"
    >
      <p className="pointer-events-none mb-4 font-[family-name:var(--font-quincy)] text-[6rem] font-light leading-none text-white/[0.06] md:text-[10rem]">
        {t("kicker")}
      </p>
      <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
        {t("title")}
      </h2>
      <motion.ul
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {SERVICE_KEYS.map((key: ServiceKey) => (
          <motion.li
            key={key}
            variants={item}
            className="group border border-white/10 bg-[#0a0a0a] p-6 transition hover:border-[#E9CB97]"
          >
            <ServiceIcon className="mb-4 h-6 w-6 text-[#A2C3CB] transition group-hover:text-[#E9CB97]" />
            <h3 className="font-[family-name:var(--font-nexa)] text-sm font-bold uppercase tracking-wider text-white">
              {tItem(`${key}.title`)}
            </h3>
            <p className="mt-2 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/65">
              {tItem(`${key}.desc`)}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
