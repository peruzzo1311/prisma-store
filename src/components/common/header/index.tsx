"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import ButtonCart from "./button-cart";
import HeaderLogo from "./logo";

const routes = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Produtos",
    path: "/products",
  },
  {
    name: "Sobre",
    path: "/about",
  },
  {
    name: "Contato",
    path: "/contact",
  },
];

export default function Header() {
  return (
    <header className="relative flex items-center justify-between bg-white px-4 py-2 shadow md:container">
      <HeaderLogo />

      <nav className="hidden space-x-8 md:inline-block">
        {routes.map((route) => (
          <Link
            href={route.path}
            key={route.name}
            className="font-semibold text-muted-foreground hover:text-primary hover:underline"
          >
            {route.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <Button size={"icon"} variant={"ghost"}>
          <Search />
        </Button>

        <Avatar className="border-muted-foregroun hidden border md:block">
          <AvatarFallback>G</AvatarFallback>
        </Avatar>

        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Menu />
        </Button>

        <ButtonCart />
      </div>
    </header>
  );
}
