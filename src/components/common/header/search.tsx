"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <div className="relative w-full">
      <Input
        placeholder="Pesquisar"
        className="w-full transition duration-300 focus-visible:bg-primary-50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0"
      />

      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <Search className="h-4 text-muted-foreground" />
      </div>
    </div>
  );
}
