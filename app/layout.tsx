import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://tseh2.ru";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ЦЕХ №2 — Кафе-бар · Йошкар-Ола",
  description:
    "Кафе-бар ЦЕХ №2: чебуреки, бургеры, 11 кранов пива. Ул. Якова Эшпая, 150.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "ЦЕХ №2 — Кафе-бар · Йошкар-Ола",
    description:
      "Кафе-бар ЦЕХ №2: чебуреки, бургеры, 11 кранов пива. Ул. Якова Эшпая, 150.",
    url: SITE_URL,
    siteName: "ЦЕХ №2",
    images: [
      {
        url: "/c2/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "ЦЕХ №2 — интерьер кафе-бара",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ЦЕХ №2 — Кафе-бар · Йошкар-Ола",
    description:
      "Кафе-бар ЦЕХ №2: чебуреки, бургеры, 11 кранов пива. Ул. Якова Эшпая, 150.",
    images: ["/c2/hero.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${bebasNeue.variable} ${inter.variable}`}
    >
      <body className="font-inter bg-bg-base text-text-primary">
        {children}
      </body>
    </html>
  );
}
