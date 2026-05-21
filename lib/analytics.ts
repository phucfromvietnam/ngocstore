import type { SocialPlatform } from "@/lib/data";

/** GA4 custom events for outbound CTA clicks */
export const CTA_EVENTS = {
  TIKTOK_SHOP: "click_tiktok_shop",
  INSTAGRAM: "click_instagram",
  FACEBOOK_REELS: "click_facebook_reels",
  COLLECTION: "click_collection",
} as const;

export type CtaEventName = (typeof CTA_EVENTS)[keyof typeof CTA_EVENTS];

export type CtaEventParams = {
  link_url?: string;
  link_text?: string;
  collection_id?: string;
  collection_title?: string;
  platform?: SocialPlatform;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function getCtaEventForPlatform(
  platform: SocialPlatform,
): CtaEventName | null {
  switch (platform) {
    case "tiktok":
      return CTA_EVENTS.TIKTOK_SHOP;
    case "instagram":
      return CTA_EVENTS.INSTAGRAM;
    case "facebook":
      return CTA_EVENTS.FACEBOOK_REELS;
    default:
      return null;
  }
}

/** Map footer strip labels to GA4 events */
export function getCtaEventForFooterLabel(label: string): CtaEventName | null {
  switch (label) {
    case "TikTok Shop":
      return CTA_EVENTS.TIKTOK_SHOP;
    case "Instagram":
      return CTA_EVENTS.INSTAGRAM;
    case "Facebook":
      return CTA_EVENTS.FACEBOOK_REELS;
    default:
      return null;
  }
}

function compactParams(
  params?: CtaEventParams,
): Record<string, string | number | boolean> | undefined {
  if (!params) return undefined;
  const out: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      out[key] = value;
    }
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

/**
 * Fire a GA4 custom event. Client-only — no-op on the server and when GA is disabled.
 */
export function trackCtaEvent(
  eventName: CtaEventName,
  params?: CtaEventParams,
): void {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_GA_ID) return;

  window.gtag?.("event", eventName, compactParams(params));
}

export function trackPlatformCta(
  platform: SocialPlatform,
  params?: CtaEventParams,
): void {
  const eventName = getCtaEventForPlatform(platform);
  if (eventName) trackCtaEvent(eventName, { ...params, platform });
}
