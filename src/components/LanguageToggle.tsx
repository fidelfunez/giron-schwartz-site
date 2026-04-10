"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const next = locale === "es" ? "en" : "es";
  const label = locale === "es" ? "EN" : "ES";

  return (
    <Link
      href="/"
      locale={next}
      className="font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-widest text-[#E9CB97] transition hover:text-white"
    >
      {label}
    </Link>
  );
}
