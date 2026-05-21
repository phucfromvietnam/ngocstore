# Hoa Ngọc — Bio Link

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
| `click_tiktok_shop` | TikTok link, footer brand name |
| `click_instagram` | Instagram link |

Register these as custom events in GA4 (**Admin → Events**) if you want them in standard reports.

## Edit content

Copy in `lib/data.ts`. URLs & SĐT trong `lib/links.ts`. Collection phối đồ trong `lib/collections.ts`.

## Replace assets

See `public/` — `avatar.png`. Favicon: `app/favicon.ico`.

## Build

```bash
pnpm build
pnpm start
```
