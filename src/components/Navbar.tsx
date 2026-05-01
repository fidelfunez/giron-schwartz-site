"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoLockup } from "./LogoLockup";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const t = useTranslations("Nav");
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link =
    "font-[family-name:var(--font-nexa)] text-xs uppercase tracking-[0.2em] text-white/90 transition hover:text-[#E9CB97]";

  const links = (
    <>
      <a className={link} href="#about">
        {t("about")}
      </a>
      <a className={link} href="#services">
        {t("services")}
      </a>
      <a className={link} href="#why">
        {t("why")}
      </a>
    </>
  );

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b will-change-[background-color]",
        // Always reserve 1px bottom edge so toggling never “pops” a new border (avoids white flash from border-color interpolation).
        solid ? "border-white/[0.08] bg-black/95" : "border-transparent bg-transparent",
        // Only animate background — never border-color (transition-colors causes a bright seam flash on some GPUs).
        "transition-[background-color] duration-300 ease-out",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0 shrink">
            <LogoLockup compact />
          </Link>
          <nav className="hidden flex-wrap items-center justify-end gap-6 md:flex md:gap-8">
            {links}
            <LanguageToggle />
            <a
              href="#contact"
              className="rounded-sm bg-[#E9CB97] px-4 py-2 font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-widest text-black transition hover:bg-[#f0ddb3]"
            >
              {t("cta")}
            </a>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <a
              href="#contact"
              className="rounded-sm bg-[#E9CB97] px-3 py-2 font-[family-name:var(--font-nexa)] text-[0.65rem] font-bold uppercase tracking-wider text-black"
            >
              {t("cta")}
            </a>
          </div>
        </div>
        <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/5 pt-3 md:hidden">
          {links}
        </nav>
      </div>
    </header>
  );
}
