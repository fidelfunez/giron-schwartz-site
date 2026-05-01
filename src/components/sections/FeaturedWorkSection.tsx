import { getMessages, getTranslations } from "next-intl/server";

import type { FeaturedWorkEntry } from "@/components/FeaturedWorkMediaCard";
import { FeaturedWorkMediaCard } from "@/components/FeaturedWorkMediaCard";

type Props = {
  locale: string;
};

export async function FeaturedWorkSection({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "Work" });
  const messages = await getMessages({ locale });
  const work = messages.Work as { videos?: FeaturedWorkEntry[] } | undefined;
  const videos = work?.videos ?? [];

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-white/10 bg-[#2C2928] px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-quincy)] text-3xl font-normal text-white md:text-4xl">
          {t("title")}
        </h2>
        {videos.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {videos.map((entry, i) => (
              <FeaturedWorkMediaCard
                key={`${entry.type}-${i}-${entry.title}`}
                entry={entry}
                pendingLabel={t("pendingEmbed")}
                newTabHint={t("opensInNewTab")}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
