import { useState } from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import imgAboutLight from "./assets/images/image-about-light.jpg";
import imgAboutDark from "./assets/images/image-about-dark.jpg";

function App() {
  return (
    <>
      <main className="font-LeagueSpartan font-xs text-primary-2 font-medium relative md:h-screen md:grid md:grid-rows-3">
        <Header></Header>
        <Card></Card>
        <section title="about" className="md:grid grid-cols-7 row-start-3">
          <picture className="md:col-start-1 col-end-3">
            <img className="object-contain w-full" src={imgAboutDark} alt="" />
          </picture>
          <section className="p-8 flex flex-col gap-4 md:col-start-3 col-end-6">
            <h2 className="text-primary-4 font-bold text-2xl">
              About our furniture
            </h2>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </section>
          <picture className="md:col-start-6 col-end-8">
            <img className="object-contain w-full" src={imgAboutLight} alt="" />
          </picture>
        </section>
      </main>
    </>
  );
}

export default App;
