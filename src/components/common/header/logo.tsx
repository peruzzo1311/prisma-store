import Image from "next/image";

import icon from "@/assets/images/icon.png";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center">
        <div className="relative h-12 w-12">
          <Image
            src={icon}
            alt="icon"
            fill
            className="aspect-square rounded-full bg-primary object-contain p-2"
          />
        </div>

        <p className="ml-2 hidden font-semibold uppercase text-primary md:flex">
          Prisma Store
        </p>
      </div>
    </Link>
  );
}
