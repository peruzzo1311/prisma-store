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

      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            className="select-none p-2 transition duration-75 active:opacity-10"
            key={index}
          >
            <div className="flex gap-2">
              <div className="w-2/4">
                <Image
                  src={banner}
                  alt="banner"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>

              <div className="w-full">
                <p className="mb-2 line-clamp-2 text-lg font-semibold">
                  Nome do produto
                </p>

                <p className="line-clamp-3 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit quis non enim obcaecati aspernatur qui quidem quae
                  eum ipsam in maxime culpa unde quia, natus quas voluptate
                  explicabo ea sit.
                </p>

                <p className="mt-4 text-end text-xl font-bold text-muted-foreground text-primary">
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
