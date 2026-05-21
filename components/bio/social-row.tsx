"use client";

import { platformIcons } from "@/components/bio/platform-icons";
import { trackPlatformCta } from "@/lib/analytics";
import { socialLinks } from "@/lib/data";
import { cn, externalLinkProps } from "@/lib/utils";

export function SocialRow({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Mạng xã hội"
      className={cn("mt-8 flex items-center justify-center gap-3", className)}
    >
      {socialLinks.map((link) => {
        const Icon = platformIcons[link.platform];
        return (
          <a
            key={link.platform}
            href={link.href}
            {...externalLinkProps}
            aria-label={link.label}
            onClick={() =>
              trackPlatformCta(link.platform, {
                link_url: link.href,
                link_text: link.label,
              })
            }
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              "border border-border bg-surface text-muted",
              "transition-colors hover:border-accent hover:text-accent",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            )}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </nav>
  );
}
