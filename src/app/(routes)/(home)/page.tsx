import Link from "next/link";

import CarouselProducts from "@/components/carousel";
import Container from "@/components/container";
import ProductCard from "@/components/product-card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Container>
      <div className="space-y-16">
        <div>
          <div className="flex w-full items-center justify-between">
            <Link href={"/categories/featured"}>
              <p className="text-lg font-bold hover:underline">Destaques</p>
            </Link>

            <Link href={"/categories/featured"}>
              <p className="text-sm font-bold text-primary hover:underline">
                Mostrar tudo
              </p>
            </Link>
          </div>

          <Separator className="mb-4" />

          <CarouselProducts />
        </div>

        <div>
          <div className="flex w-full items-center justify-between">
            <Link href={"/categories/hcm"}>
              <p className="text-lg font-bold hover:underline">Soluções HCM</p>
            </Link>

            <Link href={"/categories/hcm"}>
              <p className="text-sm font-semibold text-primary hover:underline">
                Mostrar tudo
              </p>
            </Link>
          </div>

          <Separator className="mb-4" />

          <div className="grid grid-rows-1 place-items-center space-x-4 sm:grid-cols-2 lg:grid-cols-4">
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
