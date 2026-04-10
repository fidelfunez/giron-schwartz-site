import { getTranslations } from "next-intl/server";
import { QuoteForm } from "@/components/QuoteForm";

export async function QuoteSection() {
  const t = await getTranslations("Quote");

  const wa = (n: string) =>
    `https://wa.me/${n.replace(/\D/g, "")}?text=${encodeURIComponent("Hola Girón & Schwartz, me gustaría una cotización.")}`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[#E9CB97]/30 bg-black px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase leading-tight text-white md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-6 font-[family-name:var(--font-sans)] text-base text-white/75">
          {t("sub")}
        </p>
        <QuoteForm />
        <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-10">
          <span className="w-full font-[family-name:var(--font-nexa)] text-xs uppercase tracking-widest text-[#A2C3CB]">
            {t("whatsapp")}
          </span>
          <a
            href={wa("+50230030435")}
            className="font-[family-name:var(--font-sans)] text-sm text-[#E9CB97] underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            +502 3003 0435
          </a>
          <a
            href={wa("+50250130595")}
            className="font-[family-name:var(--font-sans)] text-sm text-[#E9CB97] underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            +502 5013 0595
          </a>
        </div>
      </div>
    </section>
  );
}
