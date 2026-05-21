import Image from "next/image";
import { Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[var(--card-shadow)] sm:p-8"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/15 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-secondary/20 blur-2xl"
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-secondary opacity-80 blur-sm" />
          <Image
            src={profile.avatarSrc}
            alt={profile.avatarAlt}
            width={112}
            height={112}
            priority
            className="relative h-28 w-28 rounded-full border-4 border-surface object-cover shadow-lg"
          />
          <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-md">
            <Sparkles className="h-4 w-4" aria-hidden />
          </span>
        </div>

        <div className="min-w-0 flex-1 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            {profile.badge}
          </p>
          <h1
            id="hero-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl"
          >
            {profile.headline}
          </h1>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {profile.description}
          </p>
          <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {["Nữ tính", "Dễ mặc", "Trendy", "Giá dễ chốt"].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
