import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalyticsProvider } from "@/components/analytics/google-analytics";
import "./globals.css";
import { profile, siteMeta } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
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
    siteName: profile.name,
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteMeta.title,
    description: siteMeta.description,
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
    <html lang="vi" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("hoa-ngoc-theme");if(t==="dark")document.documentElement.classList.add("dark");else if(t==="light")document.documentElement.classList.add("light");}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <GoogleAnalyticsProvider />
      </body>
    </html>
  );
}
