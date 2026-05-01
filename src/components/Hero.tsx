"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

/** Timelapse-style city footage (fallback poster if video fails to load). */
const HERO_POSTER = "/images/hero/hero-timelapse-poster.jpg";
const HERO_VIDEO_MP4 = "/videos/giron-schwartz-hero-timelapse.mp4";

export function Hero() {
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) return;

    const idle = window.setTimeout(() => setShouldLoadVideo(true), 900);
    return () => window.clearTimeout(idle);
  }, [reduceMotion]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const intro = reduceMotion
    ? { initial: false as const, transition: { duration: 0 } }
    : { initial: fade.initial, transition: { duration: 0.7, ease } };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <Image
        src={HERO_POSTER}
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-125"
      />
      {shouldLoadVideo ? (
        <video
          className="absolute inset-0 hidden h-full w-full object-cover grayscale contrast-125 md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-hidden
        >
          <source src={HERO_VIDEO_MP4} type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-24 pt-32 md:px-6 md:pb-32">
        <motion.h1
          className="max-w-4xl font-[family-name:var(--font-quincy)] text-3xl font-normal leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          initial={intro.initial}
          animate={fade.animate}
          transition={intro.transition}
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-base text-white/85 md:text-lg"
          initial={intro.initial}
          animate={fade.animate}
          transition={
            reduceMotion ? intro.transition : { ...intro.transition, delay: 0.08 }
          }
        >
          {t("sub")}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={intro.initial}
          animate={fade.animate}
          transition={
            reduceMotion ? intro.transition : { ...intro.transition, delay: 0.16 }
          }
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
