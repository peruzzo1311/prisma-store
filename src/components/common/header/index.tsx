import ButtonCart from "./button-cart";
import HeaderLogo from "./logo";
import HeaderSearch from "./search";

export default function Header() {
  return (
    <header className="container relative flex items-center justify-between py-3">
      <HeaderLogo />

      <div className="hidden w-full max-w-xs md:flex">
        <HeaderSearch />
      </div>

      <ButtonCart />
    </header>
  );
}
