import { getLocale, getTranslations } from "next-intl/server";

import { LogoLockup } from "@/components/LogoLockup";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default async function NotFound() {
  let locale: (typeof routing.locales)[number] = routing.defaultLocale;
  try {
    const l = await getLocale();
    if (l === "en" || l === "es") locale = l;
  } catch {
    // e.g. edge render without full request context
  }
  const t = await getTranslations({ locale, namespace: "NotFound" });

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-black px-6 py-16 text-center">
      <div className="w-full max-w-lg rounded-xl border border-white/10 bg-white/[0.03] px-8 py-12">
        <div className="flex justify-center">
          <LogoLockup compact />
        </div>
        <p className="mt-8 font-[family-name:var(--font-quincy)] text-3xl font-normal text-white md:text-4xl">
          {t("title")}
        </p>
        <p className="mt-4 font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/65">
          {t("body")}
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-sm border border-[#E9CB97]/70 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#E9CB97] transition hover:border-[#E9CB97] hover:bg-[#E9CB97]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9CB97]"
        >
          {t("cta")}
        </Link>
      </div>
    </main>
  );
}
