"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 10000) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? " absolute shadow-xl top-0 left-0 w-full flex items-center z-[100]"
          : " fixed top-0 bg-transparent bg-opacity-70 backdrop-blur-sm left-0 w-full flex items-center z-[9999] box-shadow"
      }
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4 block py-6">
            <p className="text-[#FF7629] font-extrabold">Ahmad Bushairi</p>
          </div>

          <div
            className={
              !nav
                ? ""
                : "absolute py-5 bg-black shadow-2xl rounded-lg max-w-[250px] w-full right-4 top-full lg:block"
            }
          >
            <ul
              className={
                !nav
                  ? "hidden lg:static lg:bg-transparent lg:max-w-full md:flex lg:flex"
                  : ""
              }
            >
              <li className="text-white py-2 mx-8 flex hover:font-extrabold hover:text-lg hover:text-[#FF7629]">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white py-2 mx-8 flex hover:font-extrabold hover:text-lg hover:text-[#FF7629]">
                <Link href="#about">About</Link>
              </li>
              <li className="text-white py-2 mx-8 flex hover:font-extrabold hover:text-lg hover:text-[#FF7629]">
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li className="text-white py-2 mx-8 flex hover:font-extrabold hover:text-lg hover:text-[#FF7629]">
                <Link href="#resume">Resume</Link>
              </li>

              <li className="text-white py-2 mx-8 flex hover:font-extrabold hover:text-lg hover:text-[#FF7629]">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div
            onClick={handelNav}
            className={
              nav
                ? "hidden rounded-full hover:bg-[#FF7629] hover:text-white transition duration-300 ease-in"
                : "rounded-full hover:bg-[#FF7629] hover:text-white transition duration-300 ease-i md:hidden lg:hidden"
            }
          >
            <HiBars3 size={35} className="text-white" />
          </div>
          <div
            onClick={handelNav}
            className={
              !nav
                ? "hidden"
                : "md:hidden lg:hidden rounded-full hover:bg-[#FF7629] hover:text-white transition duration-300 ease-in"
            }
          >
            <HiOutlineXMark size={35} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
