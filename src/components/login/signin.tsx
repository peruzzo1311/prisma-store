import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

export default function Signin() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-start gap-3">
        <User />
        <div>Já sou cliente</div>
      </div>
      <div className="text-sm">Digite seu email e sua senha </div>
      <Input placeholder="Digite seu e-mail" />
      <Input placeholder="Digite sua senha" />
      <Button>Entrar</Button>
      <hr className="my-4 border-t border-gray-300" />
      <a>Esqueci minha senha</a>
    </div>
  );
}
