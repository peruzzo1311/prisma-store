import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";

import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prisma Store",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ModalProvider />

        <main className="flex min-h-screen flex-col">
          <Header />

          <section className="flex-1">{children}</section>

          <Footer />
        </main>
      </body>
    </html>
  );
}
