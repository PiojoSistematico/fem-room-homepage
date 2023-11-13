import { useState } from "react";
import { IconClose, IconLogo, IconMenu } from "./Icons";
import { Button } from "react-aria-components";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="p-8 absolute top-0 left-0 flex flex-row gap-8 text-primary-1">
      <Button>
        {isMenuOpen ? <IconClose></IconClose> : <IconMenu></IconMenu>}
      </Button>
      <a className="">
        <IconLogo></IconLogo>
      </a>
      <nav className="hidden">
        <ul aria-label="Primary" role="list">
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
