"use client";

import { getCtaEventForFooterLabel, trackCtaEvent } from "@/lib/analytics";
import { footerLinks } from "@/lib/data";
import { externalLinkProps, cn } from "@/lib/utils";

type SocialStripProps = {
  className?: string;
  size?: "sm" | "md";
};

export function SocialStrip({ className, size = "md" }: SocialStripProps) {
  return (
    <nav aria-label="Liên kết mạng xã hội" className={cn("flex flex-wrap gap-2", className)}>
      {footerLinks.map((link) => {
        const eventName = getCtaEventForFooterLabel(link.label);
        return (
          <a
            key={link.label}
            href={link.href}
            {...externalLinkProps}
            onClick={() => {
              if (eventName) {
                trackCtaEvent(eventName, {
                  link_url: link.href,
                  link_text: link.label,
                });
              }
            }}
            className={cn(
              "tap-scale rounded-full border border-border bg-surface font-medium text-foreground",
              "hover:border-accent hover:bg-accent-soft hover:text-accent",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
            )}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
