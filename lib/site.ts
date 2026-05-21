/**
 * Production site URL — set in env (Vercel / .env.local).
 * Fallback is for local dev and metadata previews until you deploy.
 */
export const FALLBACK_SITE_URL = "https://ngocstore.example.com";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_SITE_URL;
  return raw.replace(/\/$/, "");
}
