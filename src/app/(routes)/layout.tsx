import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Suspense } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Suspense>
      <main className="flex min-h-screen flex-col">
        <Header />

        <section className="flex-1 bg-zinc-100">
          <Suspense>{children}</Suspense>
        </section>

        <Footer />
      </main>
    </Suspense>
  );
}
