import { getMessages, getTranslations } from "next-intl/server";

import { DetailedReviewsCarousel } from "@/components/sections/DetailedReviewsCarousel";
import type { ReviewItem } from "@/types/review";

type Props = {
  locale: string;
};

export async function DetailedReviewsSection({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "Reviews" });
  const messages = await getMessages({ locale });
  const reviews = messages.Reviews as { items?: ReviewItem[] } | undefined;
  const items = reviews?.items ?? [];

  if (items.length === 0) return null;

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-t border-white/10 bg-[#141210] px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal lowercase text-white md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/75">
          {t("subtitle")}
        </p>
        <DetailedReviewsCarousel items={items} />
      </div>
    </section>
  );
}
