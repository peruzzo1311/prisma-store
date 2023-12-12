"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import useCart from "@/hooks/use-cart";
import { X } from "lucide-react";
import { Separator } from "../../ui/separator";
import CartItem from "./item";

export default function ModalCart() {
  const { items, open, openChange } = useCart();

  return (
    <Sheet open={open} onOpenChange={openChange} modal>
      <SheetContent className="flex w-full flex-col">
        <SheetHeader>
          <SheetTitle className="text-lg">Carrinho (1)</SheetTitle>
        </SheetHeader>

        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={openChange}
          className="absolute right-4 top-2 h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* {items.length === 0 && (
          <div className="flex flex-1 flex-col items-center justify-center">
            <p className="text-lg font-bold">Seu carrinho está vazio</p>
            <p className="text-sm text-gray-600">
              Adicione itens ao seu carrinho para continuar
            </p>
          </div>
        )} */}

        <Separator />

        <div className="flex-1 space-y-4 overflow-y-scroll">
          <CartItem />
        </div>

        <div>
          <Separator />

          <div className="flex items-center justify-between p-4">
            <p className="text-sm font-medium">Total</p>
            <p className="text-lg font-bold">R$ 999.999,99</p>
          </div>

          <Button className="w-full">Finalizar compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
