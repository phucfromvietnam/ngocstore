# Ngọc Store — Bio Link

Mobile-first bio link landing page for TikTok Shop traffic. Built with Next.js App Router, TypeScript, Tailwind CSS v4, and lucide-react.

## Setup

```bash
cd ngocstore
pnpm install
cp .env.local.example .env.local   # optional — GA4
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Google Analytics 4

1. In [Google Analytics](https://analytics.google.com/), create a **GA4 property** and add a **Web** data stream.
2. Copy the **Measurement ID** (`G-XXXXXXXXXX`) from the stream details.
3. Add it to `.env.local`:

   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. Restart `pnpm dev`. Page views load site-wide via `@next/third-parties/google` in the root layout.
5. In GA4, open **Reports → Realtime** and confirm visits while browsing the site.

If `NEXT_PUBLIC_GA_ID` is unset, analytics scripts are not loaded (safe for local dev without GA).

### Vercel production

- Project → **Settings → Environment Variables**
- Add `NEXT_PUBLIC_GA_ID` = your Measurement ID for **Production** (and Preview if you want GA on preview deploys)
- Redeploy after saving

### Custom CTA events

Outbound clicks are tracked in `lib/analytics.ts` and wired on bio CTAs:

| Event | Where |
| --- | --- |
| `click_tiktok_shop` | TikTok Shop link cards, footer, video cards |
| `click_instagram` | Instagram link cards, footer, video cards |
| `click_facebook_reels` | Facebook Reels link cards, footer, video cards |
| `click_collection` | Collection “Xem gợi ý” buttons |

Register these as custom events in GA4 (**Admin → Events**) if you want them in standard reports.

## Edit content

All copy and URLs live in `lib/data.ts`.

## Replace assets

See `public/` — `avatar.jpg`, `og-cover.jpg`, `collection-1.jpg`, `collection-2.jpg`, `collection-3.jpg`.

## Build

```bash
pnpm build
pnpm start
```
