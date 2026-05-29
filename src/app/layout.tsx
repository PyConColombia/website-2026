import type { Metadata } from "next";

import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { GoogleAnalytics } from "@/components/google-analytics";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";

import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_ORGANIZER,
} from "@/lib/site-seo";
import { assetPath, cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const agencyGothic = localFont({
  src: "../../public/fonts/agency-gothic-ct-bold.otf",
  variable: "--font-agency-gothic",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  robots: "index,follow",
  authors: [{ name: SITE_ORGANIZER.name, url: SITE_ORGANIZER.url }],
  keywords: SITE_KEYWORDS,
  icons: {
    icon: [
      {
        url: assetPath("/favicon/favicon-16x16.png"),
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: assetPath("/favicon/favicon-32x32.png"),
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: assetPath("/favicon/favicon.ico"),
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: assetPath("/favicon/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: assetPath("/favicon/android-chrome-192x192.png"),
        rel: "icon",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: assetPath("/favicon/android-chrome-512x512.png"),
        rel: "icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    title: {
      template: `%s | ${SITE_NAME}`,
      default: SITE_NAME,
    },
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: `${getSiteUrl()}/`,
    images: [
      {
        url: absoluteAssetUrl("/images/cfp.jpg"),
        type: "image/jpeg",
        width: 840,
        height: 768,
        alt: `${SITE_NAME} — Medellín, July 24–26, 2026`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: `%s | ${SITE_NAME}`,
      default: SITE_NAME,
    },
    description: SITE_DESCRIPTION,
    images: [
      {
        url: absoluteAssetUrl("/images/cfp.jpg"),
        alt: `${SITE_NAME} — Medellín, July 24–26, 2026`,
      },
    ],
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        bebasNeue.variable,
        agencyGothic.variable,
        "flex min-h-full w-full scroll-smooth antialiased",
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full w-full flex-auto flex-col">
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
