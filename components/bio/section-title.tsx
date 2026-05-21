import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  headingId,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
