import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-white text-black ">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Services in Detail</h3>
        </div>
      </div>

      <div className="relative">
        <div className="bg-black text-white py-16 lg:py-20 ">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Web Design <br /> & UI/UX
              </h2>
            </div>
            {/* right side */}
            <div className="flex items-center">
              <div className="text-lg lg:text-xl leading-relaxed">
                I design modern, responsive websites focused on user experience,
                performance, and accessibility. I build interactive interfaces
                with React and Next.js, and can integrate with .NET backends to
                deliver scalable, maintainable solutions.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#e9e9f0] text-black py-16 lg:py-20 ">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Web Design <br /> & UI/UX
              </h2>
            </div>
            {/* right side */}
            <div className="flex items-center">
              <div className="text-lg lg:text-xl leading-relaxed">
                I design modern, responsive websites focused on user experience,
                performance, and accessibility. I build interactive interfaces
                with React and Next.js, and can integrate with .NET backends to
                deliver scalable, maintainable solutions.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-black py-16 lg:py-20 ">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Web Design <br /> & UI/UX
              </h2>
            </div>
            {/* right side */}
            <div className="flex items-center">
              <div className="text-lg lg:text-xl leading-relaxed">
                I design modern, responsive websites focused on user experience,
                performance, and accessibility. I build interactive interfaces
                with React and Next.js, and can integrate with .NET backends to
                deliver scalable, maintainable solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
