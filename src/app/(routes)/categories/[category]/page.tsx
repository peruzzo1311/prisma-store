import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import banner from "@/assets/images/banner-app.png";
import Image from "next/image";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  return (
    <Container className="flex flex-col">
      <div className="flex gap-2 md:hidden">
        <Button className="w-full bg-white font-semibold text-primary shadow hover:text-white">
          Filtrar
        </Button>

        <Button className="w-full bg-white font-semibold text-primary shadow hover:text-white">
          Ordenar
        </Button>
      </div>

      <div className="py-4 md:pt-0">
        <p className="text-lg font-bold capitalize">{category}</p>
        <p className="text-sm text-muted-foreground">100 resultados</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            className="mx-auto max-w-xl overflow-hidden rounded-xl bg-white p-2 shadow-md"
          >
            <div className="flex flex-row md:flex-col">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  alt="Produto"
                  className="h-36 w-32 rounded object-cover md:mx-auto md:aspect-video md:h-48 md:w-full"
                  src={banner}
                />
              </div>

              <div className="flex flex-col justify-between px-4">
                <div className="space-y-2">
                  <div className="font-semibold uppercase md:mt-4">
                    Prisma gestão de software
                  </div>

                  <p className="line-clamp-2 text-sm text-muted-foreground md:line-clamp-3">
                    Loem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veniam nostrum eos numquam sed quasi provident vitae ullam
                    odit, voluptates quod deleniti fugiat explicabo repellat ex
                    blanditiis soluta, quis itaque debitis.
                  </p>
                </div>

                <p className="text-end text-xl font-bold text-primary md:mt-4">
                  R$ 100,00
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
