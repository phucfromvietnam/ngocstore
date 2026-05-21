export type SocialPlatform =
  | "tiktok"
  | "instagram"
  | "facebook"
  | "zalo"
  | "messenger";

export type LinkCardVariant = "primary" | "secondary" | "neutral";

export const profile = {
  name: "Ngọc Store",
  badge: "Affi quần áo nữ",
  headline: "Ngọc Store — Gợi ý đồ xinh, dễ mặc, chốt đơn nhanh",
  description:
    "Link nhanh đến TikTok Shop, outfit reels và collection phối đồ mới nhất",
  avatarSrc: "/avatar.jpg",
  avatarAlt: "Ảnh đại diện Ngọc Store",
  aboutTitle: "Gu của Ngọc khi phối đồ",
  aboutPoints: [
    "Nữ tính, nhẹ nhàng nhưng vẫn trendy",
    "Dễ mặc đi học, đi làm, đi chơi",
    "Set đồ giá dễ chốt, hợp TikTok Shop",
    "Ưu tiên item dễ mix — mua 1 lần, mặc nhiều kiểu",
  ],
  aboutNote:
    "Mình chọn đồ theo vibe thật — không chỉ đẹp trên ảnh mà mặc ra đường vẫn xinh. Follow để xem outfit mới mỗi ngày nhé!",
} as const;

export const socialLinks = [
  {
    id: "tiktok-shop",
    platform: "tiktok" as const,
    title: "Mua trên TikTok Shop",
    description: "Sản phẩm đang sale, link chốt đơn nhanh — bấm là vào shop",
    href: "https://www.tiktok.com/",
    variant: "primary" as LinkCardVariant,
    featured: true,
  },
  {
    id: "instagram",
    platform: "instagram" as const,
    title: "Xem outfit trên Instagram",
    description: "Reels phối đồ, lookbook và item mới mỗi tuần",
    href: "https://www.instagram.com/",
    variant: "secondary" as LinkCardVariant,
    featured: false,
  },
  {
    id: "facebook-reels",
    platform: "facebook" as const,
    title: "Xem video trên Facebook Reels",
    description: "Video review đồ, try-on và tips mặc đẹp",
    href: "https://www.facebook.com/reel/",
    variant: "secondary" as LinkCardVariant,
    featured: false,
  },
  {
    id: "zalo",
    platform: "zalo" as const,
    title: "Nhắn Zalo tư vấn size",
    description: "Hỏi size, màu, hoặc gợi ý set đồ phù hợp vibe bạn",
    href: "https://zalo.me/",
    variant: "neutral" as LinkCardVariant,
    featured: false,
  },
] as const;

export const featuredCollections = [
  {
    id: "weekend",
    title: "Đi chơi cuối tuần",
    description:
      "Váy xinh + sandal — vibe năng động, chụp ảnh là có ảnh đẹp ngay",
    imageSrc: "/collection-1.jpg",
    imageAlt: "Collection đi chơi cuối tuần",
    tags: ["Váy xinh", "Sandal", "Túi mini"],
    href: "https://www.tiktok.com/",
  },
  {
    id: "office",
    title: "Đi làm thanh lịch",
    description:
      "Áo sơ mi + quần ống rộng — gọn gàng, sang mà vẫn thoải mái cả ngày",
    imageSrc: "/collection-2.jpg",
    imageAlt: "Collection đi làm thanh lịch",
    tags: ["Sơ mi", "Quần ống rộng", "Blazer nhẹ"],
    href: "https://www.tiktok.com/",
  },
  {
    id: "cafe",
    title: "Cafe outfit xinh",
    description:
      "Set đồ tone pastel — dễ thương, hợp đi cafe chụp ảnh với bạn",
    imageSrc: "/collection-3.jpg",
    imageAlt: "Collection cafe outfit",
    tags: ["Pastel", "Cardigan", "Túi crossbody"],
    href: "https://www.tiktok.com/",
  },
] as const;

export const featuredVideos = [
  {
    id: "tiktok-review",
    platform: "tiktok" as SocialPlatform,
    title: "TikTok review look",
    description: "Try-on nhanh + link sản phẩm trong caption",
    href: "https://www.tiktok.com/",
    duration: "0:45",
    badge: "Hot",
  },
  {
    id: "ig-outfit",
    platform: "instagram" as SocialPlatform,
    title: "Instagram outfit video",
    description: "Reels phối 3 set đồ từ 5 món cơ bản",
    href: "https://www.instagram.com/",
    duration: "1:12",
    badge: "Mới",
  },
  {
    id: "fb-reels",
    platform: "facebook" as SocialPlatform,
    title: "Facebook Reels highlight",
    description: "Tips chọn size + phối đồ cho dáng người Việt",
    href: "https://www.facebook.com/reel/",
    duration: "0:58",
    badge: "Tips",
  },
] as const;

export const footerLinks = [
  { label: "TikTok Shop", href: "https://www.tiktok.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/reel/" },
] as const;

export const siteMeta = {
  title: "Ngọc Store | Gợi ý đồ xinh & TikTok Shop",
  description:
    "Bio link Ngọc Store — quần áo nữ trendy, collection phối đồ và link mua nhanh trên TikTok Shop. Xem outfit reels trên Instagram & Facebook.",
  url: "https://ngocstore.example.com",
  ogImage: "/og-cover.jpg",
} as const;
