import React from "react";
import logo from "../assets/images/logo.svg";
import {Icon} from "@iconify/react";

const Footer = () => {
  return (
    <>
      {/* divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      <footer className="main-container grid grid-cols-2 lg:grid-cols-4 gap-10 py-24">
        <img src={logo} alt="Logo" />
        <div>
          <h5 className="font-medium mb-5">Services</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">Web design</a>
            </li>
            <li>
              <a href="">UX / UI</a>
            </li>
            <li>
              <a href="">Web Developer</a>
            </li>
            <li>
              <a href="">Brading</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Accessibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">Mon - Fri: 9:00 - 17:00</a>
            </li>
            <li>
              <a href="">24/7 Messenger & Zalo</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Contacts</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">ngothanhdat4002@gmail.com</a>
            </li>
            <li>
              <a href="">079 999 5828</a>
            </li>
            <li>
              <a href="">Github: darrenak403</a>
            </li>
          </ul>
        </div>
      </footer>

      {/* divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      <div className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 ">
        <div className="w-full flex gap-2 items-center justify-center md:justify-start">
          <Icon icon="la:copyright-solid" width={25} height={25} />
          <p className="text-base lg:text-lg">
            2025 DarrenAK. All rights reserved.
          </p>
        </div>
        <div className="flex gap-3 justify-center md:justify-end">
          <a href="">
            <Icon icon="ic:baseline-facebook" width={25} height={25} />
          </a>
          <a href="">
            <Icon icon="mdi:github" width={25} height={25} />
          </a>
          <a href="">
            <Icon icon="line-md:instagram" width={25} height={25} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
