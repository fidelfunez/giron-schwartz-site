import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

const localeAlternates = Object.fromEntries(
  routing.locales.map((locale) => [locale, `${siteUrl}/${locale}`]),
) as Record<string, string>;

localeAlternates["x-default"] = `${siteUrl}/${routing.defaultLocale}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: localeAlternates,
    },
  }));
}
