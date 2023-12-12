import ButtonCart from "@/components/common/header/button-cart";
import HeaderLogo from "@/components/common/header/logo";
import Navbar from "@/components/common/header/navbar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import ButtonNavigationMobile from "./button-navigation";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 md:px-8">
      <ButtonNavigationMobile />

      <HeaderLogo />

      <Navbar />

      <div className="flex md:space-x-4">
        <Button size={"icon"} variant={"ghost"} className="hidden md:flex">
          <Search />
        </Button>

        <Avatar className="hidden md:flex">
          <AvatarFallback>G</AvatarFallback>
        </Avatar>

        <ButtonCart />
      </div>
    </header>
  );
}
