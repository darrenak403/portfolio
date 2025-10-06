import React, { useRef, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);

  // gsap hook
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.4,
    });
  });

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 w-full mix-blend-difference z-30"
      >
        <div className="main-container py-6 flex items-center justify-between">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <div
            className="flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[4px]" : ``
                }`}
            ></span>
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ``
                }`}
            ></span>
          </div>
        </div>
      </nav>

      {/* Full screen menu */}
      <div
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        onClick={() => setMenuOpen(false)}
      >
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/projects" className="menu-link">
          Projects
        </Link>
        <a href="mailto:ngothanhdat4002@gmail.com" className="menu-link">
          Contact
        </a>
      </div >
    </>
  );
};

export default Navbar;
