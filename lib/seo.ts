import type { Metadata } from "next";
import { profile, siteMeta } from "@/lib/data";
import { getSiteUrl } from "@/lib/site";

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteMeta.title,
      template: `%s | ${siteMeta.brandName}`,
    },
    description: siteMeta.description,
    applicationName: siteMeta.brandName,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: siteMeta.title,
      description: siteMeta.description,
      url: siteUrl,
      siteName: siteMeta.brandName,
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteMeta.title,
      description: siteMeta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export function buildWebsiteJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMeta.brandName,
    url: siteUrl,
    description: siteMeta.description,
    inLanguage: "vi",
    publisher: {
      "@type": "Person",
      name: profile.name,
      description: profile.note,
      image: `${siteUrl}${profile.avatarSrc}`,
      sameAs: [siteMeta.sameAs.tiktok, siteMeta.sameAs.instagram],
    },
  };
}
