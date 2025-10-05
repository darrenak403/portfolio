import React from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full">
        <div className="main-container py-6 flex items-center justify-between">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <div className="flex flex-col gap-1.5 cursor-pointer">
            <span className="inline-block w-10 lg:w-12 h-0.5 bg-white"></span>
            <span className="inline-block w-10 lg:w-12 h-0.5 bg-white"></span>
            <span className="inline-block w-10 lg:w-12 h-0.5 bg-white"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
