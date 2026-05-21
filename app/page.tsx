import { Heart, ShoppingBag } from "lucide-react";
import { Hero } from "@/components/bio/hero";
import { LinkCard } from "@/components/bio/link-card";
import { SectionTitle } from "@/components/bio/section-title";
import { CollectionCard } from "@/components/bio/collection-card";
import { FeaturedVideoCard } from "@/components/bio/featured-video-card";
import { SocialStrip } from "@/components/bio/social-strip";
import { ThemeToggle } from "@/components/bio/theme-toggle";
import {
  featuredCollections,
  featuredVideos,
  profile,
  socialLinks,
} from "@/lib/data";

export default function Home() {
  const primaryLinks = socialLinks.filter((l) => l.featured || l.variant === "primary");
  const otherLinks = socialLinks.filter((l) => !l.featured && l.variant !== "primary");

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 pb-10 pt-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 -mx-4 mb-6 border-b border-border/80 bg-background/85 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <div className="min-w-0">
            <p className="truncate text-lg font-extrabold tracking-tight text-foreground">
              <span className="text-accent">Ngọc</span> Store
            </p>
            <p className="truncate text-xs font-medium text-muted">{profile.badge}</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-10">
        <Hero />

        {/* Primary CTAs */}
        <section aria-labelledby="links-heading">
          <SectionTitle
            headingId="links-heading"
            eyebrow="Mua & theo dõi"
            title="Bấm để mua hoặc xem outfit"
            subtitle="Ưu tiên TikTok Shop để chốt đơn nhanh — Instagram & Facebook để xem video phối đồ"
          />
          <div className="mt-5 space-y-3">
            {primaryLinks.map((link) => (
              <LinkCard key={link.id} {...link} />
            ))}
          </div>
          {otherLinks.length > 0 ? (
            <div className="mt-3 space-y-3">
              {otherLinks.map((link) => (
                <LinkCard key={link.id} {...link} />
              ))}
            </div>
          ) : null}
        </section>

        {/* Collections — hero section of the page */}
        <section
          aria-labelledby="collections-heading"
          className="relative -mx-1 rounded-[2rem] border border-border bg-surface/80 p-5 shadow-[var(--card-shadow)] sm:p-6"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-[2rem] bg-gradient-to-b from-accent-soft/80 to-transparent"
            aria-hidden
          />
          <SectionTitle
            headingId="collections-heading"
            eyebrow="Editorial"
            title="Collection phối đồ của Ngọc"
            subtitle="Set đồ theo dịp — chọn vibe, bấm xem gợi ý item trên TikTok Shop"
            className="relative"
          />
          <div className="relative mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCollections.map((collection, index) => (
              <CollectionCard key={collection.id} {...collection} index={index} />
            ))}
          </div>
        </section>

        {/* Featured videos */}
        <section aria-labelledby="videos-heading">
          <SectionTitle
            headingId="videos-heading"
            eyebrow="Video"
            title="Outfit & review mới nhất"
            subtitle="Short-form trên TikTok, Instagram và Facebook Reels"
          />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <FeaturedVideoCard key={video.id} {...video} />
            ))}
          </div>
        </section>

        {/* About */}
        <section
          aria-labelledby="about-heading"
          className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--card-shadow)]"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Heart className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 id="about-heading" className="text-xl font-bold text-foreground">
                {profile.aboutTitle}
              </h2>
              <ul className="mt-4 space-y-2">
                {profile.aboutPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                {profile.aboutNote}
              </p>
            </div>
          </div>
        </section>

        {/* Quick shop reminder */}
        <aside className="flex items-center gap-4 rounded-2xl border border-dashed border-accent/40 bg-accent-soft/60 p-4">
          <ShoppingBag className="h-8 w-8 shrink-0 text-accent" aria-hidden />
          <p className="text-sm text-foreground">
            <strong className="font-bold">Tip:</strong> Lưu trang này vào màn hình chính để mở
            TikTok Shop nhanh mỗi khi xem video của Ngọc.
          </p>
        </aside>
      </main>

      <footer className="mt-12 space-y-4 border-t border-border pt-8 text-center">
        <p className="text-sm font-medium text-foreground">
          Follow Ngọc để xem outfit mới mỗi ngày
        </p>
        <SocialStrip className="justify-center" size="sm" />
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Ngọc Store. Bio link — quần áo nữ & phối đồ.
        </p>
      </footer>
    </div>
  );
}
