import localFont from "next/font/local";
import { Montserrat, Source_Sans_3 } from "next/font/google";

export const quincy = localFont({
  src: [
    {
      path: "../fonts/quincy/fonnts.com-Quincy_CF_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/quincy/fonnts.com-Quincy_CF_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/quincy/fonnts.com-Quincy_CF_Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-quincy",
  display: "swap",
});

/** UI / labels / CTAs — Montserrat (Google Fonts). */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

/** Brand manual lists Source Sans Pro; Google’s maintained successor is Source Sans 3. */
export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});
