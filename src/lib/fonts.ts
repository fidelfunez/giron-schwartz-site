import localFont from "next/font/local";
import { Source_Sans_3 } from "next/font/google";

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

export const nexa = localFont({
  src: [
    {
      path: "../fonts/nexa/NexaLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/nexa/NexaBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nexa",
  display: "swap",
});

/** Brand manual lists Source Sans Pro; Google’s maintained successor is Source Sans 3. */
export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});
