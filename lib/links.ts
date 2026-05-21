/**
 * Link & liên hệ — chỉnh URL / SĐT tại đây.
 */
export const CONTACT = {
  /** Số Zalo hiển thị trên trang */
  zaloPhoneDisplay: "085.205.0205",
  /** Bấm để gọi (mobile) */
  zaloPhoneTel: "tel:+84852050205",
} as const;

export const LINKS = {
  /** TikTok Shop — CTA chính, link mặc định cho tên "Hoa Ngọc" */
  tiktokShop: "https://www.tiktok.com/@dnqoc15",
  instagram: "https://www.instagram.com/nq.oc_05/",
} as const;

/** Link khi bấm tên thương hiệu trong footer (mặc định: TikTok) */
export const BRAND_LINK = LINKS.tiktokShop;
