import { useState } from "react";
import { IconAngleLeft, IconAngleRight, IconArrow } from "./Icons";
import data from "../assets/data/data.json";
import { Button } from "react-aria-components";

/* type CardProps = {
  info: { title: string; paragraph: string };
};
 */
const Card: React.FunctionComponent = ({}) => {
  const [index, setIndex] = useState(0);

  function handleLeftClick(): void {
    const lenght = data.length;
    index == 0 ? setIndex(lenght - 1) : setIndex((prev) => prev - 1);
  }
  function handleRightClick(): void {
    const lenght = data.length;
    index == lenght - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
  }

  return (
    <section
      title="hero section"
      className="md:grid grid-cols-3 row-start-1 row-end-3"
    >
      <picture className="md:col-start-1 col-end-3">
        <img
          className="object-contain w-full md:hidden"
          src={`/src/assets/images/mobile-image-hero-${index + 1}.jpg`}
          alt="hero image"
        />
        <img
          className="hidden md:block object-cover"
          src={`/src/assets/images/desktop-image-hero-${index + 1}.jpg`}
          alt="hero image"
        />
      </picture>
      <article className="relative p-8 flex flex-col gap-4 md:p-16">
        <h1 className="text-primary-4 font-bold text-4xl">
          {data[index].title}
        </h1>
        <p>{data[index].paragraph}</p>
        <a
          href="#"
          className="text-primary-4 flex flex-row items-center gap-4 uppercase tracking-widest font-semibold"
        >
          <span>Shop Now</span> <IconArrow></IconArrow>
        </a>
        <div className="absolute -top-14 right-0 flex flex-row items-center bg-primary-4 w-min z-10 md:top-auto md:bottom-0 md:left-0">
          <Button onPress={handleLeftClick} className="p-4">
            <IconAngleLeft></IconAngleLeft>
          </Button>
          <Button onPress={handleRightClick} className="p-4">
            <IconAngleRight></IconAngleRight>
          </Button>
        </div>
      </article>
    </section>
  );
};

export default Card;
