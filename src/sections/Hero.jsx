import React, {useRef} from "react";
import GradientButton from "../components/GradientButton";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Hero = () => {
  const heroRef = useRef(null);

  // pin hero section
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: heroRef.current, // element để trigger animation / scroll logic
        start: "top top", // khi top của trigger chạm top của viewport -> bắt đầu
        end: "bottom top", // khi bottom của trigger chạm top của viewport -> kết thúc
        pin: true, // ghim element tại chỗ trong thời gian scroll giữa start và end
        pinSpacing: false, // nếu false sẽ không thêm spacing sau khi ghim (không tạo khoảng trống)
        scrub: 1, // đồng bộ animation với scroll; số >0 làm animation mượt theo scrub duration
      });

      SplitText.create("h1", {
        type: "lines, words, chars", // tách thành lines và words để animate theo từng từ/dòng
        mask: "lines", // dùng mask cho lines để animation 'reveal' mượt
        autoSplit: true, // tự động split DOM nội dung
        onSplit(self) {
          gsap.from(self.words, {
            y: 100, // bắt đầu dịch xuống 100px và di chuyển lên đến vị trí ban đầu
            opacity: 0, // bắt đầu trong suốt -> fade in
            stagger: 0.1, // mỗi từ bắt đầu animation cách nhau 0.1s
          });
        },
      });

      SplitText.create("h2", {
        type: "lines, words", // tương tự h1
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            delay: 0.3, // chậm hơn h1 0.3s để có thứ tự xuất hiện
          });
        },
      });

      gsap.from(".gradient-btn", {
        opacity: 0, // bắt đầu từ trong suốt
        y: 40, // dịch xuống 40px rồi về vị trí
        duration: 0.5, // thời lượng animation 0.5s
        ease: "power2.out", // easing để chuyển động mượt
        delay: 1.25, // chờ trước khi animation bắt đầu
      });

      gsap.from(".star svg", {
        scale: 0, // phóng to từ 0 -> 1
        rotate: 180, // bắt đầu xoay 180deg
        opacity: 0, // fade in
        transformOrigin: "center center", // điểm neo cho transform
        duration: 1.3, // thời lượng
        ease: "back.out(1.7)", // easing với overshoot
        onComplete: () => {
          gsap.to(".star", {
            rotate: "+=360", // tiếp tục quay thêm 360deg
            duration: 20, // thời gian cho 1 vòng quay
            ease: "linear", // quay đều
            repeat: -1, // lặp vô hạn
          });
        },
      });
    },
    {scope: heroRef}
  );

  return (
    <>
      <div ref={heroRef} className="relative overflow-hidden z-0">
        <div className="main-container h-screen flex flex-col lg:justify-center items-start lg:py-12 max-lg:pt-40">
          <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
            DarrenAK 403
          </h1>
          <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6">
            Web Developer <br /> & <span className="text-stroke">Designer</span>
          </h2>
          <GradientButton
            text="Let's Talk"
            link="mailto:ngothanhdat4002@gmail.com"
            className="gradient-btn"
          />
        </div>

        <div className="star absolute -z-1 top-80 lg:top-32 right-[-35%] lg:right-[-12%] opacity-80">
          <svg
            className="h-[48vh] lg:h-[80vh]"
            width="100%"
            height="100%"
            viewBox="0 0 653 631"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M290.361 1.55611L333.686 284.91L333.88 286.179L334.595 285.114L496.712 43.7172L530.894 66.1542L354.53 298.39L353.719 299.458L355.031 299.182L644.761 238.164L651.694 276.116L359.086 321.398L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.336L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.683L363.139 630.092L319.819 346.737L319.626 345.469L318.911 346.534L156.783 587.928L122.522 565.048L298.964 333.261L299.777 332.192L298.463 332.469L8.73045 393.474L1.564 354.212L294.405 310.247L295.74 310.046L294.596 309.329L47.5646 154.375L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96559L290.361 1.55611Z"
              stroke="url(#paint0_linear_1074_2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1074_2"
                x1="4.77595"
                y1="374.593"
                x2="648.724"
                y2="257.056"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF4D6D" />
                <stop offset="0.25" stopColor="#BD3EB2" />
                <stop offset="0.5" stopColor="#7B2FF7" />
                <stop offset="0.75" stopColor="#2F86F7" />
                <stop offset="1" stopColor="#2FF7ED" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
