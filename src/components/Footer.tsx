import { getTranslations } from "next-intl/server";
import { LogoLockup } from "./LogoLockup";

const SOCIAL = [
  {
    key: "instagram" as const,
    href: "https://www.instagram.com/giron.schwartz?igsh=andnMWlvZHJwd2c0",
  },
  {
    key: "facebook" as const,
    href: "https://www.facebook.com/share/1CAYoacMAB/",
  },
  {
    key: "linkedin" as const,
    href: "https://www.linkedin.com/company/101138530",
  },
];

function SocialIcon({ network }: { network: (typeof SOCIAL)[number]["key"] }) {
  const base = "h-4 w-4";
  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={base} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={base} fill="currentColor">
        <path d="M13.4 21v-7.7h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.6-1.5h1.5V4.2c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.4V21h2.6Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={base} fill="currentColor">
      <path d="M6.6 8.4a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM5.2 9.6h2.8V19H5.2V9.6Zm4.6 0h2.7v1.3h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V19h-2.8v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V19H9.8V9.6Z" />
    </svg>
  );
}

type Props = {
  locale: string;
};

export async function Footer({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "Footer" });
  const nav = await getTranslations({ locale, namespace: "Nav" });
  const social = await getTranslations({ locale, namespace: "Social" });
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black px-4 pb-10 pt-16 md:px-6 md:pt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#A2C3CB]/10 via-transparent to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-[2px] md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,1fr)] md:gap-10 md:p-8">
          <div>
            <LogoLockup />
            <p className="mt-4 max-w-sm font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/60">
              {t("brandTagline")}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-sm border border-[#E9CB97]/60 px-4 py-2 font-[family-name:var(--font-nexa)] text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#E9CB97] transition hover:border-[#E9CB97] hover:bg-[#E9CB97]/10"
            >
              {nav("cta")}
            </a>
          </div>

          <nav className="flex flex-col gap-3 font-[family-name:var(--font-nexa)] text-xs uppercase tracking-[0.16em] text-white/70">
            <span className="mb-1 text-[#A2C3CB]">{t("navHeading")}</span>
            <a className="transition hover:text-[#E9CB97]" href="#about">
              {nav("about")}
            </a>
            <a className="transition hover:text-[#E9CB97]" href="#services">
              {nav("services")}
            </a>
            <a className="transition hover:text-[#E9CB97]" href="#why">
              {nav("why")}
            </a>
            <a className="transition hover:text-[#E9CB97]" href="#contact">
              {nav("cta")}
            </a>
          </nav>

          <div className="font-[family-name:var(--font-sans)] text-sm text-white/70">
            <span className="font-[family-name:var(--font-nexa)] text-xs uppercase tracking-[0.16em] text-[#A2C3CB]">
              {t("contactHeading")}
            </span>
            <p className="mt-4">
              <a className="text-[#E9CB97] transition hover:underline" href="mailto:hola@gironschwartz.com">
                hola@gironschwartz.com
              </a>
            </p>
            <div className="mt-4 space-y-1">
              <p>+502 3003 0435</p>
              <p>+502 5013 0595</p>
            </div>
            <p className="mt-1 text-white/55">{t("country")}</p>
          </div>
          <div className="md:col-span-3">
            <ul className="flex flex-wrap justify-center gap-2.5 border-t border-white/10 pt-6 lg:flex-nowrap">
              {SOCIAL.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-[15.2rem] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 font-[family-name:var(--font-nexa)] text-[0.62rem] uppercase tracking-[0.14em] text-[#A2C3CB] transition hover:border-[#E9CB97]/60 hover:text-[#E9CB97]"
                  >
                    <SocialIcon network={s.key} />
                    {social(s.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-8 text-center font-[family-name:var(--font-sans)] text-xs text-white/65">
        © {year} Girón & Schwartz. {t("rights")}
      </p>
      <p className="mx-auto mt-2 max-w-6xl text-center font-[family-name:var(--font-sans)] text-[0.72rem] text-white/65">
        {t("creditLead")}{" "}
        <a
          href="https://www.teralatam.co"
          target="_blank"
          rel="noreferrer"
          className="text-[#E9CB97] underline underline-offset-2 transition hover:text-[#f0ddb3]"
        >
          {t("creditLink")}
        </a>
        .
      </p>
    </footer>
  );
}
