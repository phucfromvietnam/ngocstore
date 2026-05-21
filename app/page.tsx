import Image from "next/image";
import { CollectionScroll } from "@/components/bio/collection-scroll";
import { FooterFollow } from "@/components/bio/footer-follow";
import { LinkButton } from "@/components/bio/link-button";
import { SocialRow } from "@/components/bio/social-row";
import { GentleHintAnimation } from "@/components/bio/gentle-hint-animation";
import { ThemeToggle } from "@/components/bio/theme-toggle";
import { mainLinks, profile } from "@/lib/data";
import { CONTACT } from "@/lib/links";
import { externalLinkProps } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-[420px] flex-col px-5 py-10 sm:py-14">
      <div className="absolute right-5 top-5 sm:right-0 sm:top-4">
        <ThemeToggle />
      </div>

      <main className="flex flex-1 flex-col items-center text-center">
        <Image
          src={profile.avatarSrc}
          alt={profile.avatarAlt}
          width={96}
          height={96}
          priority
          className="h-24 w-24 rounded-full border-2 border-border object-cover shadow-[var(--shadow)]"
        />

        <h1 className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {profile.name}
        </h1>
        <p className="mt-1 flex flex-col items-center gap-0.5 text-sm text-muted sm:text-base">
          <span>{profile.subtitleTagline}</span>
          <span>
            {profile.zaloLabel}
            <a
              href={CONTACT.zaloPhoneTel}
              className="font-semibold text-accent underline decoration-accent/50 underline-offset-2 transition-colors hover:text-accent-hover"
            >
              {CONTACT.zaloPhoneDisplay}
            </a>
          </span>
        </p>
        <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted sm:text-sm">
          {profile.note}
        </p>

        <CollectionScroll className="mt-6" />

        <nav
          aria-label="Liên kết chính"
          className="mt-6 flex w-full flex-col gap-3"
        >
          {mainLinks.map((link) => (
            <LinkButton
              key={link.id}
              platform={link.platform}
              title={link.title}
              href={link.href}
              variant={link.variant}
            />
          ))}
        </nav>

        <div className="flex w-full flex-1 items-center justify-center py-8">
          <GentleHintAnimation />
        </div>
      </main>

      <section
        aria-label="Theo dõi"
        className="mt-auto flex w-full flex-col items-center gap-4 pt-10"
      >
        <SocialRow className="mt-0" />
        <FooterFollow />
      </section>

      <footer className="mt-6 pb-2 text-center text-[11px] text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
