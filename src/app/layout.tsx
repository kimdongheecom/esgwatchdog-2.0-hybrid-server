import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ClientLayout from "@/components/Common/ClientLayout";
import NextAuthSessionProvider from "@/components/Providers/SessionProvier";
import ToastProvider from "@/components/Providers/ToastProvider";
import AuthSessionProvider from "@/components/Providers/AuthSessionProvider";
const inter = Inter({ subsets: ["latin"],display: 'swap'});

export const metadata: Metadata = {
  title: {
    template: '%s | LIF',
    default: 'LIF - Life, Intelligence, Future',
  },
  description: "Life, Intelligence, Future - 금융 서비스 플랫폼",
  manifest: "/manifest.json",
  icons: {
    apple: "/icons/icon-192x192.png",
  },
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LIF",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthSessionProvider>
      <AuthSessionProvider>
        <html lang="ko" suppressHydrationWarning>
          <head>
            <meta name="application-name" content="LIF" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="LIF" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#000000" />
          </head>
          <body className={`dark:bg-black ${inter.className}`}>
            <ClientLayout>{children}</ClientLayout>
            <ToastProvider />
          </body>
        </html>
      </AuthSessionProvider>
    </NextAuthSessionProvider>
  );
}

