"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import useDrawer from "@/hooks/use-drawer";
import { cn } from "@/lib/utils";
import {
  Contact,
  Home,
  Info,
  LogOut,
  MoreVertical,
  Search,
  ShoppingBasket,
  UserCircle,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

export default function ModalMobileNavigation() {
  const { open, openChange } = useDrawer();
  const pathname = usePathname();

  const routes = [
    {
      name: "Início",
      icon: Home,
      path: "/",
      active: pathname === "/",
    },
    {
      name: "Buscar",
      icon: Search,
      path: "/search",
      active: pathname === "/search",
    },
    {
      name: "Produtos",
      icon: ShoppingBasket,
      path: "/products",
      active: pathname === "/products",
    },
    {
      name: "Sobre",
      icon: Info,
      path: "/about",
      active: pathname === "/about",
    },
    {
      name: "Contato",
      icon: Contact,
      path: "/contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <Sheet open={open} onOpenChange={openChange} modal>
      <SheetContent side={"left"} className="flex flex-col">
        <SheetHeader>
          <div className="flex w-full items-center justify-between">
            <SheetTitle>Menu</SheetTitle>

            <Button size={"icon"} onClick={openChange}>
              <X />
            </Button>
          </div>
        </SheetHeader>

        <ul className="flex flex-1 flex-col space-y-2">
          {routes.map((route) => (
            <Link href={route.path} key={route.name}>
              <li className="flex items-center space-x-4 p-2">
                <route.icon
                  className={cn("h-6 w-6", {
                    "text-primary": pathname === route.path,
                  })}
                />

                <p className={route.active ? "font-semibold text-primary" : ""}>
                  {route.name}
                </p>
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarFallback className="bg-muted-foreground text-white">
                U
              </AvatarFallback>
            </Avatar>

            <p className="text-lg font-semibold">Usuário</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size={"icon"} variant={"ghost"}>
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-60">
              <DropdownMenuItem>
                <UserCircle className="mr-2 h-5 w-5" />
                <p>Minha conta</p>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <LogOut className="mr-2 h-5 w-5" />
                <p>Sair</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
}
