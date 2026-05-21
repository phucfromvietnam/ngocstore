"use client";

import { platformIcons } from "@/components/bio/platform-icons";
import { trackPlatformCta } from "@/lib/analytics";
import type { LinkVariant, SocialPlatform } from "@/lib/data";
import { cn, externalLinkProps } from "@/lib/utils";

type LinkButtonProps = {
  platform: SocialPlatform;
  title: string;
  href: string;
  variant: LinkVariant;
};

const variantStyles: Record<LinkVariant, string> = {
  primary:
    "border-transparent bg-accent text-white hover:bg-accent-hover shadow-[var(--shadow)]",
  secondary:
    "border-border bg-[var(--button-secondary-bg)] text-foreground hover:bg-[var(--button-secondary-hover)] shadow-[var(--shadow)]",
};

const iconWrapStyles: Record<LinkVariant, string> = {
  primary: "bg-white/20 text-white",
  secondary: "bg-accent-soft text-accent",
};

export function LinkButton({ platform, title, href, variant }: LinkButtonProps) {
  const Icon = platformIcons[platform];

  return (
    <a
      href={href}
      {...externalLinkProps}
      onClick={() =>
        trackPlatformCta(platform, { link_url: href, link_text: title })
      }
      className={cn(
        "relative flex min-h-12 w-full items-center rounded-xl border px-4 py-3.5",
        "text-sm font-semibold leading-snug sm:text-base",
        "transition-colors duration-150",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variantStyles[variant],
      )}
    >
      <span
        className={cn(
          "absolute left-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
          iconWrapStyles[variant],
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="w-full text-center">{title}</span>
    </a>
  );
}
