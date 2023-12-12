"use client";

import ModalCart from "@/components/modals/cart";
import ModalMobileNavigation from "@/components/modals/mobile-navigation";
import { useEffect, useState } from "react";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ModalCart />

      <ModalMobileNavigation />
    </>
  );
}
