import { Shirt, ShoppingBag, ShoppingCart, Tag } from "lucide-react";

/** Icon quần áo & mua sắm — chuyển động nhẹ giữa CTA và footer */
export function GentleHintAnimation() {
  return (
    <div
      className="gentle-hint relative flex h-28 w-28 items-center justify-center"
      aria-hidden
    >
      <span className="gentle-hint-orbit gentle-hint-orbit-1 absolute -left-1 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-surface/90 text-accent shadow-[var(--shadow)]">
        <ShoppingBag className="h-3.5 w-3.5" strokeWidth={2} />
      </span>

      <span className="gentle-hint-orbit gentle-hint-orbit-2 absolute -right-0.5 bottom-4 flex h-7 w-7 items-center justify-center rounded-full border border-border/80 bg-surface/90 text-accent shadow-[var(--shadow)]">
        <ShoppingCart className="h-3.5 w-3.5" strokeWidth={2} />
      </span>

      <span className="gentle-hint-orbit gentle-hint-orbit-3 absolute right-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-accent/80">
        <Tag className="h-3 w-3" strokeWidth={2} />
      </span>

      <span className="gentle-hint-core flex h-16 w-16 items-center justify-center rounded-full border border-accent/25 bg-accent-soft/80 shadow-[var(--shadow)]">
        <Shirt className="h-8 w-8 text-accent" strokeWidth={1.75} />
      </span>
    </div>
  );
}
