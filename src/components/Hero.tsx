"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=80"
        alt={t("imageAlt")}
        fill
        priority
        className="object-cover grayscale contrast-125"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-24 pt-32 md:px-6 md:pb-32">
        <motion.h1
          className="max-w-4xl font-[family-name:var(--font-quincy)] text-3xl font-normal leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          initial={fade.initial}
          animate={fade.animate}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl font-[family-name:var(--font-sans)] text-base text-white/85 md:text-lg"
          initial={fade.initial}
          animate={fade.animate}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("sub")}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={fade.initial}
          animate={fade.animate}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="rounded-sm bg-[#E9CB97] px-6 py-3 font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#f0ddb3]"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#services"
            className="rounded-sm border border-white/80 px-6 py-3 font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#E9CB97] hover:text-[#E9CB97]"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
