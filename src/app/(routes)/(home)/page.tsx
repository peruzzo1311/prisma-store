import Link from "next/link";

import CarouselProducts from "@/components/carousel";
import Container from "@/components/container";
import ProductCard from "@/components/products/card";

export default function Home() {
  return (
    <Container>
      <div className="space-y-16">
        <div>
          <Link
            href={"/categories/featured"}
            className="mb-4 flex w-full items-center justify-between"
          >
            <p className="text-lg font-bold hover:underline">Destaques</p>

            <p className="text-sm font-bold text-primary hover:underline">
              Mostrar tudo
            </p>
          </Link>

          <CarouselProducts />
        </div>

        <div>
          <div className="mb-4 flex w-full items-center justify-between">
            <Link href={"/categories/hcm"}>
              <p className="text-lg font-bold hover:underline">Soluções HCM</p>
            </Link>

            <Link href={"/categories/hcm"}>
              <p className="text-sm font-semibold text-primary hover:underline">
                Mostrar tudo
              </p>
            </Link>
          </div>

          <div className="grid grid-rows-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </Container>
  );
}
