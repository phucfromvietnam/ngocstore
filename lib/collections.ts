import { LINKS } from "@/lib/links";

/** Mặc định mọi collection mở kênh TikTok — đổi `href` từng item nếu cần link riêng */
const DEFAULT_HREF = LINKS.tiktokShop;

/**
 * Collection phối đồ — chỉnh title / link tại đây.
 */
export const OUTFIT_COLLECTIONS = [
  {
    id: "di-choi",
    title: "Phối đồ đi chơi",
    href: DEFAULT_HREF,
  },
  {
    id: "di-lam",
    title: "Đi làm thanh lịch",
    href: DEFAULT_HREF,
  },
  {
    id: "cafe",
    title: "Cafe outfit xinh",
    href: DEFAULT_HREF,
  },
  {
    id: "basic",
    title: "Đồ basic dễ mặc",
    href: DEFAULT_HREF,
  },
  {
    id: "cuoi-tuan",
    title: "Cuối tuần năng động",
    href: DEFAULT_HREF,
  },
] as const;

export type OutfitCollection = (typeof OUTFIT_COLLECTIONS)[number];
