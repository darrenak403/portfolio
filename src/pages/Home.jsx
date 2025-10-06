import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Marquee from "../sections/Marquee";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Marquee />
    </>
  );
};

export default Home;
