import Image from "next/image";

import icon from "@/assets/images/icon.png";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href={"/"} className="md:m-0">
      <Image
        src={icon}
        alt="icon"
        width={44}
        height={44}
        className="aspect-square h-12 w-auto rounded-full bg-primary object-contain p-2 active:opacity-60"
      />
    </Link>
  );
}
