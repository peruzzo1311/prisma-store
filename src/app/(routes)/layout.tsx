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

        <section className="flex flex-1 flex-col bg-zinc-100 p-2 md:p-4">
          <Suspense>{children}</Suspense>
        </section>

        <Footer />
      </main>
    </Suspense>
  );
}
