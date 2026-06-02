"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import type { ReviewItem } from "@/types/review";

type Props = {
  items: ReviewItem[];
};

/** Sized for the longest review (Jenna); shorter slides keep the same footprint. */
const PANEL_HEIGHT =
  "h-[36rem] sm:h-[34rem] md:h-[30rem] lg:h-[28rem]";

export function DetailedReviewsCarousel({ items }: Props) {
  const t = useTranslations("Reviews");
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = items.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (total === 0) return null;

  const item = items[index];
  const paragraphs = item.quote.split(/\n\n+/).filter(Boolean);

  return (
    <div className="mt-16">
      <div
        className={`relative ${PANEL_HEIGHT}`}
        aria-live="polite"
        aria-atomic="true"
        aria-label={t("slideOf", { current: index + 1, total })}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.blockquote
            key={index}
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col border border-white/10 bg-black/20 p-6 md:p-8"
          >
            <p
              className="shrink-0 font-heading text-3xl font-black leading-none text-[#E9CB97] md:text-4xl"
              aria-hidden
            >
              “
            </p>
            <div className="mt-4 min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin]">
              <div className="max-w-3xl space-y-4 font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/85">
                {paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <footer className="mt-6 shrink-0 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#A2C3CB]">
              {item.credit}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t("prev")}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm border border-white/15 bg-white/[0.03] text-[#E9CB97] transition hover:border-[#E9CB97]/50 hover:bg-[#E9CB97]/10"
          >
            <span aria-hidden className="text-lg leading-none">
              ←
            </span>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t("next")}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm border border-white/15 bg-white/[0.03] text-[#E9CB97] transition hover:border-[#E9CB97]/50 hover:bg-[#E9CB97]/10"
          >
            <span aria-hidden className="text-lg leading-none">
              →
            </span>
          </button>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label={t("slideOf", { current: index + 1, total })}
        >
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={t("slideOf", { current: i + 1, total })}
              onClick={() => setIndex(i)}
              className={`h-2.5 cursor-pointer rounded-full transition ${
                i === index
                  ? "w-8 bg-[#E9CB97]"
                  : "w-2.5 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
