import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  /** Explicit /es and /en so routes always match [locale]; `/` redirects in next.config */
  localePrefix: "always",
});
