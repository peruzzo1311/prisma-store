import { cn } from "@/lib/utils";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl p-4 md:p-8", className)}>
      {children}
    </div>
  );
}
