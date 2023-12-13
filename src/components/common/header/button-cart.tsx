"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";

export default function ButtonCart() {
  const { items, openChange } = useCart();

  return (
    <Button
      className="gap-2 rounded-full bg-white px-4 py-3 font-semibold text-primary hover:bg-white hover:bg-opacity-80"
      onClick={() => openChange()}
    >
      <ShoppingBag size={20} />

      <span>{items.length}</span>
    </Button>
  );
}
