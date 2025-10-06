import React, {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    SplitText.create(".about-text", {
      type: "lines, words, chars",
      onSplit(self) {
        gsap.set(self.words, {
          opacity: 0.25,
        });

        gsap.to(self.words, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          },
        });
      },
    });
  });
  return (
    <>
      <div
        ref={aboutRef}
        className="relative z-20 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]"
      >
        <div className="about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-5xl leading-[1.25]">
          My name is Thanh Dat, I'm a web developer and designer and a
          third-year student at FPT University (as of this project). I have a
          passion for creating beautiful and functional websites, with a strong
          background in HTML, CSS, JavaScript, React, Next.js, and .NET. I am
          always looking for new challenges and opportunities to learn and grow
          as a developer and designer.
        </div>
      </div>
    </>
  );
};

export default About;
