"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CTA_EVENTS, trackCtaEvent } from "@/lib/analytics";
import { OUTFIT_COLLECTIONS } from "@/lib/collections";
import { cn, externalLinkProps } from "@/lib/utils";

type CollectionScrollProps = {
  className?: string;
};

function ScrollArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const label = direction === "left" ? "Xem collection trước" : "Xem collection tiếp";

  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-[var(--shadow)]",
        "transition-colors hover:border-accent hover:text-accent",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        "disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}

export function CollectionScroll({ className }: CollectionScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const step = Math.max(el.clientWidth * 0.72, 160);
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section aria-label="Collection phối đồ" className={cn("w-full", className)}>
      <div className="flex w-full items-center gap-2">
        <ScrollArrow
          direction="left"
          disabled={!canScrollLeft}
          onClick={() => scroll("left")}
        />

        <div
          ref={scrollRef}
          className="collection-scroll flex min-w-0 flex-1 gap-2.5 overflow-x-auto"
        >
          {OUTFIT_COLLECTIONS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              {...externalLinkProps}
              onClick={() =>
                trackCtaEvent(CTA_EVENTS.COLLECTION, {
                  collection_id: item.id,
                  collection_title: item.title,
                  link_url: item.href,
                  link_text: item.title,
                })
              }
              className={cn(
                "flex min-h-[5.5rem] w-[8.75rem] shrink-0 snap-start items-center justify-center rounded-xl border border-border bg-surface p-3.5 shadow-[var(--shadow)]",
                "transition-colors hover:border-accent/50 hover:bg-accent-soft/50",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                "active:scale-[0.98]",
              )}
            >
              <span className="text-center text-xs font-semibold leading-snug text-foreground">
                {item.title}
              </span>
            </a>
          ))}
        </div>

        <ScrollArrow
          direction="right"
          disabled={!canScrollRight}
          onClick={() => scroll("right")}
        />
      </div>
    </section>
  );
}
