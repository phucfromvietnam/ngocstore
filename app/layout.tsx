import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GoogleAnalyticsProvider } from "@/components/analytics/google-analytics";
import "./globals.css";
import { siteMeta } from "@/lib/data";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: "Ngọc Store",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: "Ngọc Store — Gợi ý đồ xinh & TikTok Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={outfit.variable}>
      <body className="page-glow antialiased">
        {children}
        <GoogleAnalyticsProvider />
      </body>
    </html>
  );
}
