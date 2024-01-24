import CartButton from "./CartButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { SlMenu } from "react-icons/sl";
import MobileNav from "./MobileNav";
import { useState } from "react";

// const styles = "sm:px-16 px-6 sm:py-16 py-10 max-w-8xl mx-auto relative z-0";
// const ori = "py-10 px-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]";

function Header() {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="py-2 px-[60px] ">
      <div className="flex flex-row items-center justify-between">
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="text-3xl xl:hidden cursor-pointer"
        >
          <SlMenu />
        </div>
        <div
          className={`${
            navMobile ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
        >
          <MobileNav setNavMobile={setNavMobile} />
        </div>
        <Logo />
        <div className="hidden w-full xl:flex xl:max-w-[732px]">
          <SearchBar />
        </div>
        <CartButton />
      </div>
      <div className="lg:hidden">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
