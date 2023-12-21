import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";

export default function Signup() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-start gap-3">
        <LogIn />
        <div>Cadastrar</div>
      </div>
      <div className="text-sm">Crie sua conta </div>
      <Input placeholder="E-mail" />
      <Button>Crie sua conta</Button>
    </div>
  );
}
