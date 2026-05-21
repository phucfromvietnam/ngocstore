import { BRAND_LINK, LINKS } from "@/lib/links";

export type SocialPlatform = "tiktok" | "instagram";

export type LinkVariant = "primary" | "secondary";

export const profile = {
  name: "Hoa Ngọc",
  subtitleTagline: "✨1m56-45kí✨",
  zaloLabel: "ZôLa: ",
  note: "Xem link mua đồ và video phối đồ của Hoa Ngọc",
  avatarSrc: "/avatar.png",
  avatarAlt: "Ảnh đại diện Hoa Ngọc",
  footer: {
    prefix: "Follow ",
    suffix: " để xem outfit mới mỗi ngày",
    brandHref: BRAND_LINK,
  },
} as const;

export const mainLinks = [
  {
    id: "tiktok-shop",
    platform: "tiktok" as const,
    title: "Mua trên TikTok Shop",
    href: LINKS.tiktokShop,
    variant: "primary" as LinkVariant,
  },
  {
    id: "instagram",
    platform: "instagram" as const,
    title: "Xem Instagram",
    href: LINKS.instagram,
    variant: "secondary" as LinkVariant,
  },
] as const;

export const socialLinks = [
  {
    platform: "tiktok" as const,
    label: "TikTok Shop",
    href: LINKS.tiktokShop,
  },
  {
    platform: "instagram" as const,
    label: "Instagram",
    href: LINKS.instagram,
  },
] as const;

export const siteMeta = {
  brandName: "Ngọc Store",
  title: "Ngọc Store | Link mua đồ và video phối đồ",
  description:
    "Trang bio link chính thức của Ngọc Store — tổng hợp TikTok Shop, Instagram và gợi ý phối đồ dễ mặc, nữ tính, trendy của Hoa Ngọc.",
  sameAs: {
    tiktok: LINKS.tiktokShop,
    instagram: LINKS.instagram,
  },
} as const;
