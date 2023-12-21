import Signin from "./signin";
import Signup from "./signup";

export default function LoginContainer() {
  return (
    <div className="h-full w-full rounded-lg bg-white p-4 shadow-md">
      <div className="flex w-full justify-center">
        <Signin />
        <Signup />
      </div>
    </div>
  );
}
