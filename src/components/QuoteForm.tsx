"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

const FORMSPREE =
  typeof process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID === "string"
    ? process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
    : "";

export function QuoteForm() {
  const t = useTranslations("Quote.form");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const action = FORMSPREE ? `https://formspree.io/f/${FORMSPREE}` : undefined;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!action) {
      const data = new FormData(form);
      console.log("[quote]", Object.fromEntries(data.entries()));
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 rounded-sm border border-[#E9CB97]/40 bg-[#E9CB97]/10 px-6 py-8">
        <p className="font-[family-name:var(--font-quincy)] text-2xl text-white">{t("successTitle")}</p>
        <p className="mt-3 font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/80">
          {t("successBody")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 md:grid-cols-2">
      <label className="md:col-span-2">
        <span className="mb-1 block font-heading text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("name")}
        </span>
        <input
          name="name"
          required
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none ring-[#E9CB97] focus:border-[#E9CB97]"
        />
      </label>
      <label>
        <span className="mb-1 block font-heading text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("company")}
        </span>
        <input
          name="company"
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      <label>
        <span className="mb-1 block font-heading text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("projectType")}
        </span>
        <input
          name="projectType"
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      <label>
        <span className="mb-1 block font-heading text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("filmingLocation")}
        </span>
        <input
          name="filmingLocation"
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      <label>
        <span className="mb-1 block font-heading text-[0.65rem] uppercase tracking-widest text-white/60">
          {t("date")}
        </span>
        <input
          name="productionDate"
          type="text"
          className="w-full border border-white/15 bg-black/40 px-4 py-3 font-[family-name:var(--font-sans)] text-sm text-white outline-none focus:border-[#E9CB97]"
        />
      </label>
      <label className="md:col-span-2">
        <span className="mb-1 block font-heading text-[0.65rem] uppercase tracking-widest text-white/60">
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
        {status === "error" ? (
          <p className="mb-4 font-[family-name:var(--font-sans)] text-sm text-red-300">{t("error")}</p>
        ) : null}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-sm bg-[#E9CB97] px-8 py-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#f0ddb3] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t("submitting") : t("submit")}
        </button>
        <p className="mt-3 text-xs text-white/70">{t("disclaimer")}</p>
      </div>
    </form>
  );
}
