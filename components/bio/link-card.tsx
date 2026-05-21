"use client";

import {
  Camera,
  MessageCircle,
  ShoppingBag,
  Video,
  type LucideIcon,
} from "lucide-react";
import { trackPlatformCta } from "@/lib/analytics";
import { externalLinkProps } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { LinkCardVariant, SocialPlatform } from "@/lib/data";

const platformIcons: Record<SocialPlatform, LucideIcon> = {
  tiktok: ShoppingBag,
  instagram: Camera,
  facebook: Video,
  zalo: MessageCircle,
  messenger: MessageCircle,
};

type LinkCardProps = {
  platform: SocialPlatform;
  title: string;
  description: string;
  href: string;
  variant?: LinkCardVariant;
  featured?: boolean;
};

const variantStyles: Record<LinkCardVariant, string> = {
  primary:
    "border-accent/30 bg-accent text-white hover:bg-accent-hover shadow-[var(--shadow)]",
  secondary:
    "border-secondary/30 bg-secondary text-white hover:brightness-110 shadow-md",
  neutral:
    "border-border bg-surface text-foreground hover:border-accent/40 hover:bg-accent-soft/50",
};

const iconStyles: Record<LinkCardVariant, string> = {
  primary: "bg-white/20 text-white",
  secondary: "bg-white/20 text-white",
  neutral: "bg-accent-soft text-accent",
};

export function LinkCard({
  platform,
  title,
  description,
  href,
  variant = "neutral",
  featured = false,
}: LinkCardProps) {
  const Icon = platformIcons[platform];
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      {...externalLinkProps}
      onClick={() =>
        trackPlatformCta(platform, { link_url: href, link_text: title })
      }
      className={cn(
        "tap-scale group flex w-full items-start gap-4 rounded-2xl border p-4 sm:p-5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variantStyles[variant],
        featured && "ring-2 ring-accent/20 ring-offset-2 ring-offset-background",
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
          iconStyles[variant],
        )}
      >
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-base font-bold sm:text-lg">{title}</span>
          {isPrimary ? (
            <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
              Mua ngay
            </span>
          ) : null}
        </span>
        <span
          className={cn(
            "mt-1 block text-sm leading-snug",
            isPrimary ? "text-white/90" : "text-muted group-hover:text-foreground/80",
          )}
        >
          {description}
        </span>
      </span>
      <span
        className={cn(
          "mt-1 shrink-0 text-lg font-light opacity-70 transition group-hover:translate-x-0.5",
          isPrimary ? "text-white" : "text-accent",
        )}
        aria-hidden
      >
        →
      </span>
    </a>
  );
}
