"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export default function ButtonCart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Button className="ml-2 w-auto rounded-full border-transparent bg-primary px-4 py-3 font-semibold text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 md:ml-4">
      <ShoppingBag size={20} />

      <span className="ml-2 text-sm font-medium text-white">0</span>
    </Button>
  );
}
