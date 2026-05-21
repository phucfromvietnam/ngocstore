"use client";

import { trackPlatformCta } from "@/lib/analytics";
import { profile } from "@/lib/data";
import { cn, externalLinkProps } from "@/lib/utils";

export function FooterFollow({ className }: { className?: string }) {
  const { prefix, suffix, brandHref } = profile.footer;

  return (
    <p className={cn("text-xs leading-relaxed text-muted", className)}>
      {prefix}
      <a
        href={brandHref}
        {...externalLinkProps}
        onClick={() =>
          trackPlatformCta("tiktok", {
            link_url: brandHref,
            link_text: profile.name,
          })
        }
        className="font-bold text-accent underline decoration-accent/50 underline-offset-2 transition-colors hover:text-accent-hover hover:decoration-accent"
      >
        {profile.name}
      </a>
      {suffix}
    </p>
  );
}
