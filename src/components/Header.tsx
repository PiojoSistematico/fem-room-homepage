import { useState } from "react";
import { IconClose, IconLogo, IconMenu } from "./Icons";
import { Button } from "react-aria-components";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="p-8 absolute top-0 left-0 flex flex-row gap-8 items-center text-primary-1 md:gap-12">
      <Button className="md:hidden">
        {isMenuOpen ? <IconClose></IconClose> : <IconMenu></IconMenu>}
      </Button>
      <a className="">
        <IconLogo></IconLogo>
      </a>
      <nav className="hidden md:block">
        <ul
          aria-label="Primary"
          role="list"
          className="md:flex md:flex-row md:items-center md:gap-4"
        >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
