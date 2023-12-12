import LogoPrisma from "@/assets/icon/logo";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href={"/"} className="rounded-full bg-primary p-2">
      {/* <Image
        src={icon}
        alt="icon"
        width={44}
        height={44}
        className="aspect-square h-12 w-auto rounded-full bg-primary object-contain p-2 active:opacity-60"
      /> */}
      <LogoPrisma className="h-8 w-8" />
    </Link>
  );
}
