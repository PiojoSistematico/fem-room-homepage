import { useState } from "react";
import data from "./assets/data/data.json";
import Header from "./components/Header";
import Card from "./components/Card";
import imgAboutLight from "./assets/images/image-about-light.jpg";
import imgAboutDark from "./assets/images/image-about-light.jpg";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <main>
        <Header></Header>
        <Card info={data[index]}></Card>
        <picture>
          <img src={imgAboutDark} alt="" />
        </picture>
        <section>
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section>
        <picture>
          <img src={imgAboutLight} alt="" />
        </picture>
      </main>
    </>
  );
}

export default App;
