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
      className="mr-2 h-10 w-10 hover:bg-primary-700 md:hidden"
      onClick={openChange}
    >
      <Menu className="h-6 w-6 text-white" />
    </Button>
  );
}
