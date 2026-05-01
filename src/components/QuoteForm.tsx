"use client";

import { useTranslations } from "next-intl";

const FORMSPREE =
  typeof process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID === "string"
    ? process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
    : "";

export function QuoteForm() {
  const t = useTranslations("Quote.form");
  const action = FORMSPREE ? `https://formspree.io/f/${FORMSPREE}` : undefined;

  return (
    <form
      action={action}
      method={action ? "POST" : undefined}
      onSubmit={
        action
          ? undefined
          : (e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              console.log("[quote]", Object.fromEntries(data.entries()));
            }
      }
      className="mt-10 grid gap-4 md:grid-cols-2"
    >
      <label className="md:col-span-2">
        <span className="mb-1 block font-[family-name:var(--font-nexa)] text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("name")}
        </span>
        <input
          name="name"
          required
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none ring-[#E9CB97] focus:border-[#E9CB97]"
        />
      </label>
      <label>
        <span className="mb-1 block font-[family-name:var(--font-nexa)] text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("company")}
        </span>
        <input
          name="company"
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      <label>
        <span className="mb-1 block font-[family-name:var(--font-nexa)] text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("projectType")}
        </span>
        <input
          name="projectType"
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      <label>
        <span className="mb-1 block font-[family-name:var(--font-nexa)] text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("filmingLocation")}
        </span>
        <input
          name="filmingLocation"
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      <label>
        <span className="mb-1 block font-[family-name:var(--font-nexa)] text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("date")}
        </span>
        <input
          name="productionDate"
          type="text"
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      <label className="md:col-span-2">
        <span className="mb-1 block font-[family-name:var(--font-nexa)] text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("description")}
        </span>
        <textarea
          name="description"
          required
          rows={5}
          className="w-full resize-y border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      {!FORMSPREE && (
        <p className="md:col-span-2 text-xs text-amber-100">
          Set{" "}
          <code className="rounded bg-white/10 px-1">NEXT_PUBLIC_FORMSPREE_FORM_ID</code>{" "}
          for live submissions.
        </p>
      )}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="rounded-sm bg-[#E9CB97] px-8 py-3 font-[family-name:var(--font-nexa)] text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#f0ddb3]"
        >
          {t("submit")}
        </button>
        <p className="mt-3 text-xs text-white/70">{t("disclaimer")}</p>
      </div>
    </form>
  );
}
