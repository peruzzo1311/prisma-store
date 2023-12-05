import Image from "next/image";

import banner from "@/assets/images/banner-app.png";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({
  isFeatured = false,
}: {
  isFeatured?: boolean;
}) {
  return (
    <Card className="group cursor-pointer overflow-hidden shadow">
      <CardHeader>
        <div className="overflow-hidden rounded-xl">
          <Image
            src={banner}
            alt="produto"
            className="h-64 object-cover transition ease-in-out group-hover:scale-125"
          />
        </div>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-lg">Prisma gestão de inventários</CardTitle>

        {isFeatured && (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
            debitis quisquam? Laboriosam, culpa qui eos soluta id labore
            suscipit quos ad totam illum necessitatibus officia excepturi?
            Deleniti, assumenda similique!
          </p>
        )}
      </CardContent>

      <CardFooter className="flex-col items-start">
        <p className="text-sm font-semibold text-muted-foreground line-through">
          R$2.000,00
        </p>

        <p className="text-lg font-semibold text-primary">R$2.000,00</p>
      </CardFooter>
    </Card>
  );
}
