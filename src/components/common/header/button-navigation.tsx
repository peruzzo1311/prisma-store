"use client";

import { Button } from "@/components/ui/button";
import useDrawer from "@/hooks/use-drawer";
import { Menu } from "lucide-react";

export default function ButtonNavigationMobile() {
  const { openChange } = useDrawer();

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="md:hidden"
      onClick={openChange}
    >
      <Menu />
    </Button>
  );
}
