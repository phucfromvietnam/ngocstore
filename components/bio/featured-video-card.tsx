"use client";

import {
  Camera,
  Clapperboard,
  Play,
  ShoppingBag,
  Video,
  type LucideIcon,
} from "lucide-react";
import { trackPlatformCta } from "@/lib/analytics";
import { externalLinkProps, cn } from "@/lib/utils";
import type { SocialPlatform } from "@/lib/data";

const platformMeta: Record<
  SocialPlatform,
  { icon: LucideIcon; label: string; gradient: string }
> = {
  tiktok: {
    icon: Clapperboard,
    label: "TikTok",
    gradient: "from-accent to-secondary",
  },
  instagram: {
    icon: Camera,
    label: "Instagram",
    gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
  },
  facebook: {
    icon: Video,
    label: "Facebook",
    gradient: "from-[#1877f2] to-[#42b0ff]",
  },
  zalo: {
    icon: ShoppingBag,
    label: "Zalo",
    gradient: "from-accent to-secondary",
  },
  messenger: {
    icon: ShoppingBag,
    label: "Messenger",
    gradient: "from-accent to-secondary",
  },
};

type FeaturedVideoCardProps = {
  platform: SocialPlatform;
  title: string;
  description: string;
  href: string;
  duration: string;
  badge: string;
};

export function FeaturedVideoCard({
  platform,
  title,
  description,
  href,
  duration,
  badge,
}: FeaturedVideoCardProps) {
  const meta = platformMeta[platform];
  const Icon = meta.icon;

  return (
    <a
      href={href}
      {...externalLinkProps}
      onClick={() =>
        trackPlatformCta(platform, { link_url: href, link_text: title })
      }
      className={cn(
        "tap-scale group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface",
        "shadow-[var(--card-shadow)] hover:border-accent/30",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
      )}
    >
      <div
        className={cn(
          "relative flex h-36 items-center justify-center bg-gradient-to-br sm:h-40",
          meta.gradient,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          {badge}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-xs font-mono text-white">
          {duration}
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition group-hover:scale-110">
          <Play className="h-7 w-7 fill-white" aria-hidden />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
          <Icon className="h-3.5 w-3.5" aria-hidden />
          {meta.label}
        </span>
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        <span className="mt-auto pt-2 text-sm font-semibold text-accent group-hover:underline">
          Xem video →
        </span>
      </div>
    </a>
  );
}
