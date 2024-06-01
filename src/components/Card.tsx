import { useState } from "react";
import { IconAngleLeft, IconAngleRight, IconArrow } from "./Icons";
import data from "../assets/data/data.json";
import { Button } from "react-aria-components";
import heroMobile1 from "../assets/images/mobile-image-hero-1.jpg";
import heroMobile2 from "../assets/images/mobile-image-hero-2.jpg";
import heroMobile3 from "../assets/images/mobile-image-hero-3.jpg";

import heroDesktop1 from "../assets/images/desktop-image-hero-1.jpg";
import heroDesktop2 from "../assets/images/desktop-image-hero-2.jpg";
import heroDesktop3 from "../assets/images/desktop-image-hero-3.jpg";

const mobile = [heroMobile1, heroMobile2, heroMobile3];
const desktop = [heroDesktop1, heroDesktop2, heroDesktop3];

const Card: React.FunctionComponent = ({}) => {
  const [index, setIndex] = useState(0);

  function handleLeftClick(): void {
    const length = data.length;
    index == 0 ? setIndex(length - 1) : setIndex((prev) => prev - 1);
  }
  function handleRightClick(): void {
    const length = data.length;
    index == length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
  }

  console.log(index);

  return (
    <section
      title="hero section"
      className="row-start-1 row-end-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3"
    >
      <picture className="overflow-hidden md:col-start-1 md:col-end-2 lg:col-end-3">
        <img
          className="object-contain h-full w-full md:hidden"
          src={mobile[index]}
          alt="hero image"
        />
        <img
          className="hidden md:block md:object-fill md:h-full md:w-full"
          src={desktop[index]}
          alt="hero image"
        />
      </picture>
      <article className="relative p-8 flex flex-col gap-4 h-[350px] md:p-16 md:h-full">
        <h1 className="text-primary-4 font-bold text-4xl">
          {data[index].title}
        </h1>
        <p>{data[index].paragraph}</p>
        <a
          href="#"
          className="text-primary-4 flex flex-row items-center gap-4 uppercase tracking-widest font-semibold hover:text-gray-500 focus-visible:text-gray-500"
        >
          <span>Shop Now</span> <IconArrow></IconArrow>
        </a>
        <div className="absolute -top-14 right-0 flex flex-row items-center bg-primary-4 w-min z-10 md:top-auto md:bottom-0 md:left-0 md:right-auto">
          <Button
            onPress={handleLeftClick}
            className="p-4 hover:bg-gray-500 focus-visible:bg-gray-500"
          >
            <IconAngleLeft></IconAngleLeft>
          </Button>
          <Button
            onPress={handleRightClick}
            className="p-4 hover:bg-gray-500 focus-visible:bg-gray-500"
          >
            <IconAngleRight></IconAngleRight>
          </Button>
        </div>
      </article>
    </section>
  );
};

export default Card;
