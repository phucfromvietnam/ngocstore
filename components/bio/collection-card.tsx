"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CTA_EVENTS, trackCtaEvent } from "@/lib/analytics";
import { externalLinkProps, cn } from "@/lib/utils";

type CollectionCardProps = {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: readonly string[];
  href: string;
  index?: number;
};

export function CollectionCard({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  tags,
  href,
  index = 0,
}: CollectionCardProps) {
  const isFeatured = index === 0;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--card-shadow)]",
        isFeatured && "sm:col-span-2 lg:col-span-1 lg:row-span-2",
      )}
    >
      <div className={cn("relative overflow-hidden", isFeatured ? "h-56 sm:h-72" : "h-48")}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-accent backdrop-blur-sm">
          Collection #{index + 1}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Tags">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href={href}
          {...externalLinkProps}
          onClick={() =>
            trackCtaEvent(CTA_EVENTS.COLLECTION, {
              link_url: href,
              link_text: title,
              collection_id: id,
              collection_title: title,
            })
          }
          className={cn(
            "tap-scale inline-flex w-full items-center justify-center gap-2 rounded-xl",
            "bg-accent px-4 py-3 text-sm font-bold text-white",
            "hover:bg-accent-hover",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          )}
        >
          Xem gợi ý
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}
