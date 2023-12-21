import LoginContainer from "@/components/login";

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-300">
      <div id="painel" className="h-2/4 w-9/12">
        <div className="flex justify-start self-start text-2xl">
          <h2 className=" font-bold">Entrar</h2>
          <h1 className="ml-2 ">ou</h1>
          <h2 className="ml-2  font-bold">Criar conta</h2>
        </div>
        <LoginContainer />
      </div>
    </div>
  );
}
