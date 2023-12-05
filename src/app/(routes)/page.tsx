import Link from "next/link";

import ProductCard from "@/components/product-card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="container flex-1 space-y-16 p-4">
      <div>
        <div className="flex w-full items-center justify-between">
          <Link href={"#"}>
            <p className="text-lg font-bold hover:underline">Destaques</p>
          </Link>

          <Link href={"#"}>
            <p className="text-sm font-semibold text-primary hover:underline">
              Mostrar tudo
            </p>
          </Link>
        </div>

        <Separator className="mb-4 mt-1 bg-primary" />

        <div className="grid grid-rows-1 place-items-center gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ProductCard isFeatured />
          <ProductCard isFeatured />
          <ProductCard isFeatured />
          <ProductCard isFeatured />
        </div>
      </div>

      <div>
        <div className="flex w-full items-center justify-between">
          <Link href={"#"}>
            <p className="text-lg font-bold hover:underline">Soluções HCM</p>
          </Link>

          <Link href={"#"}>
            <p className="text-sm font-semibold text-primary hover:underline">
              Mostrar tudo
            </p>
          </Link>
        </div>

        <Separator className="mb-4 mt-1 bg-primary" />

        <div className="grid grid-rows-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
