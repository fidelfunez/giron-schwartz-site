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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-white/10 bg-black/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link href="/" className="min-w-0 shrink">
          <LogoLockup compact tagline={t("logoTagline")} />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a className={link} href="#services">
            {t("services")}
          </a>
          <a className={link} href="#about">
            {t("about")}
          </a>
          <a className={link} href="#territories">
            {t("territories")}
          </a>
          <a className={link} href="#contact">
            {t("contact")}
          </a>
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-sm bg-[#E9CB97] px-4 py-2 font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-widest text-black transition hover:bg-[#f0ddb3]"
          >
            {t("cta")}
          </a>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-sm bg-[#E9CB97] px-3 py-2 font-[family-name:var(--font-nexa)] text-[0.65rem] font-bold uppercase tracking-wider text-black"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
