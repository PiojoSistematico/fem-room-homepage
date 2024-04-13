import { IconLogo } from "./Icons";

import CustomModal from "./CustomModal";

const Menu = () => {
  return (
    <header className="p-8 absolute top-0 left-0 flex flex-row gap-8 items-center text-primary-1 md:gap-12">
      <CustomModal></CustomModal>
      <a className="">
        <IconLogo></IconLogo>
      </a>
      <nav className="hidden md:block">
        <ul className="md:flex md:flex-row md:items-center md:gap-8">
          <li className="border-b-2 border-solid border-transparent hover:border-white focus-visible:border-white">
            <a href="#">Home</a>
          </li>
          <li className="border-b-2 border-solid border-transparent hover:border-white focus-visible:border-white">
            <a href="#">Shop</a>
          </li>
          <li className="border-b-2 border-solid border-transparent hover:border-white focus-visible:border-white">
            <a href="#">About</a>
          </li>
          <li className="border-b-2 border-solid border-transparent hover:border-white focus-visible:border-white">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
