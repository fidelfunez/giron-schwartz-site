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

export async function Footer() {
  const t = await getTranslations("Footer");
  const nav = await getTranslations("Nav");
  const social = await getTranslations("Social");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-4 py-16 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <LogoLockup tagline={nav("logoTagline")} />
          <p className="mt-4 max-w-xs font-[family-name:var(--font-sans)] text-sm text-white/55">
            {t("tagline")}
          </p>
        </div>
        <nav className="flex flex-col gap-3 font-[family-name:var(--font-nexa)] text-xs uppercase tracking-widest text-white/70">
          <a className="hover:text-[#E9CB97]" href="#services">
            {nav("services")}
          </a>
          <a className="hover:text-[#E9CB97]" href="#about">
            {nav("about")}
          </a>
          <a className="hover:text-[#E9CB97]" href="#territories">
            {nav("territories")}
          </a>
          <a className="hover:text-[#E9CB97]" href="#contact">
            {nav("contact")}
          </a>
        </nav>
        <div className="font-[family-name:var(--font-sans)] text-sm text-white/70">
          <p>
            <a
              className="text-[#E9CB97] hover:underline"
              href="mailto:info.gironschwartz@gmail.com"
            >
              info.gironschwartz@gmail.com
            </a>
          </p>
          <p className="mt-2">+502 3003 0435 · +502 5013 0595</p>
          <p className="mt-4 max-w-xs text-white/55">{t("address")}</p>
          <ul className="mt-6 flex flex-wrap gap-4">
            {SOCIAL.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-wider text-[#A2C3CB] hover:text-[#E9CB97]"
                >
                  {social(s.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-8 text-center font-[family-name:var(--font-sans)] text-xs text-white/40">
        © {year} Girón & Schwartz. {t("rights")}
      </p>
    </footer>
  );
}
