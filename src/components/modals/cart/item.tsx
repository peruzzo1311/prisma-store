import Image from "next/image";

import banner from "@/assets/images/banner-app.png";
import { X } from "lucide-react";
import ModifyQuantityButton from "./modify-quantity-button";

export default function CartItem() {
  return (
    <div className="flex w-full justify-between space-x-4 py-2">
      <div className="relative">
        <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded ring-1 ring-primary">
          <Image
            src={banner}
            alt="Banner"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -right-2 -top-2 z-50 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-red-500">
          <X className="h-4 w-4 text-white" />
        </div>
      </div>

      <div className="flex-1">
        <p className="line-clamp-2 font-semibold leading-tight">
          Prisma gestão de inventários
        </p>

        <p className="line-clamp-1 text-sm text-muted-foreground">Grupo</p>
      </div>

      <div className="space-y-2">
        <p className="text-lg font-semibold">R$ 999.999,99</p>

        <ModifyQuantityButton />
      </div>
    </div>
  );
}
