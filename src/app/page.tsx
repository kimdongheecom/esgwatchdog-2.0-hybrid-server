import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "LIF - Life, Intelligence, Future",

  // other metadata
  description: "Life, Intelligence, Future - 금융 서비스 플랫폼"
};

// createPageLayout 함수를 추가하여 특정 페이지에서 헤더와 푸터를 숨길 수 있게 합니다
export const createPageLayout = {
  header: false,
  footer: false
};

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      {/* <Features /> */}
    </main>
  );
}