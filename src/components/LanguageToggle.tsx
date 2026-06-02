"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const next = locale === "es" ? "en" : "es";
  const label = locale === "es" ? "EN" : "ES";

  const onClick = () => {
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer font-heading text-xs font-bold uppercase tracking-widest text-[#E9CB97] transition hover:text-white"
    >
      {label}
    </button>
  );
}
