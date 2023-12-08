import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const routes = [
    {
      name: "Início",
      path: "/",
      active: pathname === "/",
    },
    {
      name: "Produtos",
      path: "/products",
      active: pathname === "/products",
    },
    {
      name: "Sobre",
      path: "/about",
      active: pathname === "/about",
    },
    {
      name: "Contato",
      path: "/contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <nav className="ml-4 hidden space-x-4 md:inline-block">
      {routes.map((route) => (
        <Link
          href={route.path}
          key={route.name}
          className={cn(
            "pb-5 font-bold text-muted-foreground hover:border-b-2 hover:border-primary hover:text-primary",
            route.active && "border-b-2 border-primary font-bold text-primary",
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
