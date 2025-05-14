"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTOp";
import { ThemeProvider } from "next-themes";
import { initializeAuth } from "@/store/authStore";
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 인증 상태 초기화
  useEffect(() => {
    initializeAuth();
  }, []);

  // 경로 확인
  const pathname = usePathname();
  
  // 홈페이지(/)인 경우 헤더와 푸터를 숨깁니다
  const isHomePage = pathname === '/';

  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="light"
    >
      {!isHomePage && <Lines />}
      {/* {!isHomePage && <Header />} */}
      {children}
      {!isHomePage && <Footer />}
      <ScrollToTop />
    </ThemeProvider>
  );
} 