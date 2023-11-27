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
      className="row-start-1 row-end-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3"
    >
      <picture className="overflow-hidden md:col-start-1 md:col-end-2 lg:col-end-3">
        <img
          className="object-contain h-full w-full md:hidden"
          src={`/src/assets/images/mobile-image-hero-${index + 1}.jpg`}
          alt="hero image"
        />
        <img
          className="hidden md:block md:object-fill md:h-full md:w-full"
          src={`/src/assets/images/desktop-image-hero-${index + 1}.jpg`}
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
          className="text-primary-4 flex flex-row items-center gap-4 uppercase tracking-widest font-semibold"
        >
          <span>Shop Now</span> <IconArrow></IconArrow>
        </a>
        <div className="absolute -top-14 right-0 flex flex-row items-center bg-primary-4 w-min z-10 md:top-auto md:bottom-0 md:left-0 md:right-auto">
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
