import React from "react";

const Hero = () => {
  return (
    <>
      <div className="main-container h-screen flex flex-col lg:justify-center items-start lg:py-12 max-lg:pt-40">
        <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
          DarrenAK 403
        </h1>
        <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight">
          Web Developer <br /> & <span>Designer</span>
        </h2>
      </div>
    </>
  );
};

export default Hero;
