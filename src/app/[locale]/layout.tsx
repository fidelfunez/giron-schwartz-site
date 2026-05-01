import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { quincy, nexa, sourceSans } from "@/lib/fonts";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const canonicalPath = locale === "en" ? "/en" : "/es";
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL("https://www.gironschwartz.com"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        "x-default": "/",
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "es" ? "es_GT" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/favicon/giron_schwartz_favicon_og.png",
          width: 1200,
          height: 630,
          alt: "Girón & Schwartz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/favicon/giron_schwartz_favicon_og.png"],
    },
    icons: {
      icon: [
        { url: "/images/favicon/favicon.ico" },
        { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/images/favicon/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${quincy.variable} ${nexa.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
