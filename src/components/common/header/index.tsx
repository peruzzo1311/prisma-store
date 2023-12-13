import HeaderLogo from "@/components/common/header/logo";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import ButtonCart from "./button-cart";
import ButtonNavigationMobile from "./button-navigation";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="container w-full bg-primary">
      <div className="flex w-full items-center py-2">
        <HeaderLogo />

        <Navbar />

        <div className="ml-auto flex items-center justify-center gap-2">
          <ButtonNavigationMobile />

          <Button
            size={"icon"}
            variant={"ghost"}
            className="mr-2 hidden h-10 w-10 hover:bg-primary-700 md:flex"
          >
            <Search className="h-6 w-6 text-white" />
          </Button>

          <ButtonCart />
        </div>
      </div>
    </header>
  );
}
