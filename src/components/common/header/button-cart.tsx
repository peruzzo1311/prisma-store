"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";

export default function ButtonCart() {
  const { items, openChange } = useCart();

  return (
    <Button
      className="ml-2 w-auto rounded-full border-transparent bg-primary px-4 py-3 font-semibold text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 md:ml-4"
      onClick={() => openChange()}
    >
      <ShoppingBag size={20} />

      <span className="ml-2 text-sm font-medium text-white">
        {items.length}
      </span>
    </Button>
  );
}
