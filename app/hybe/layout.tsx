import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function HybeLayout({ children }: { children: React.ReactNode }) {
  return <div className={notoSansKr.className}>{children}</div>;
}
