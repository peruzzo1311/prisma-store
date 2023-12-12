import Link from "next/link";

import CarouselProducts from "@/components/carousel";
import Container from "@/components/container";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import banner from "@/assets/images/banner-app.png";

export default function Home() {
  return (
    <Container>
      <div className="space-y-16">
        <div>
          <Link href={"/categories/featured"}>
            <h1 className="mb-4 text-xl font-bold hover:underline">
              Soluções em destaque
            </h1>
          </Link>

          <CarouselProducts />
        </div>

        <div>
          <div className="mb-4 flex w-full items-center justify-between">
            <Link href={"/categories/hcm"}>
              <p className="text-lg font-bold">Soluções HCM</p>
            </Link>

            <Link href={"/categories/hcm"}>
              <p className="text-sm font-semibold text-primary hover:underline">
                Mostrar tudo
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card
                key={i}
                className="group cursor-pointer overflow-hidden rounded-lg drop-shadow"
              >
                <div className="overflow-hidden">
                  <Image
                    alt="Profile photo"
                    className="h-56 w-full object-cover transition duration-200 ease-in-out group-hover:scale-110"
                    src={banner}
                    priority
                  />
                </div>

                <div className="flex items-center justify-between bg-primary-900 px-4 py-2">
                  <h1 className="font-bold text-gray-200">
                    Prisma gestão de inventários
                  </h1>
                </div>

                <div className="px-4 py-2">
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    nesciunt labore, quasi libero reprehenderit rem ut illo a
                    tempora quaerat. Voluptas blanditiis mollitia odio quis
                    laudantium, quisquam praesentium architecto nam.
                  </p>

                  <h1 className="mt-4 text-2xl font-bold text-primary">
                    R$ 100,00
                  </h1>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
