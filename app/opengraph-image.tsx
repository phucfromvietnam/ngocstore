import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/data";

export const alt =
  "Ngọc Store — bio link mua đồ TikTok Shop, Instagram và gợi ý phối đồ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(145deg, #fdf8f6 0%, #f5e6e8 45%, #e8d5d9 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#5c3d42",
            letterSpacing: "-0.02em",
          }}
        >
          {siteMeta.brandName}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#7a5a5f",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          Link mua đồ · TikTok Shop · Instagram · Phối đồ nữ tính
        </div>
      </div>
    ),
    { ...size },
  );
}
