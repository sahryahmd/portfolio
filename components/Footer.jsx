import Link from "next/link";
import React from "react";
import { ImGithub, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#010b1c] pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-500  font-medium md:w-1/2 ">
            <h2 className="font-bold text-4xl text-white mb-5">
              Ahmad Bushairi
            </h2>
            <h3 className="font-bold text-2xl mb-2">Hubungi Saya</h3>
            <p>sahry10@gmail.com</p>
            <p>KP Bulak Barat RT 001/008 No 30</p>
            <p>Depok</p>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/2">
            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul className=" text-slate-300 flex flex-col">
              <li className="inline-block text-base hover:text-[#FF7629] mb-3">
                <Link href="/">Home</Link>
              </li>
              <li className="inline-block text-base hover:text-[#FF7629] mb-3">
                <Link href="#about">About</Link>
              </li>
              <li className="inline-block text-base hover:text-[#FF7629] mb-3">
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li className="inline-block text-base hover:text-[#FF7629] mb-3">
                <Link href="#resume">Resume</Link>
              </li>
              <li className="inline-block text-base hover:text-[#FF7629] mb-3">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <div>
            <div className="flex items-center justify-center mb-5">
              <div className=" mr-3 justify-center items-center text-slate-400 rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:border-[#FF7629] hover:bg-[#FF7629] hover:text-white ease-in duration-300">
                <Link href={"https://www.youtube.com/@sahryahmd5482"}>
                  <ImYoutube size={30} />
                </Link>
              </div>
              <div className=" mr-3 justify-center items-center text-slate-400 rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:border-[#FF7629] hover:bg-[#FF7629] hover:text-white ease-in duration-300">
                <Link href={"https://www.instagram.com/sahryahmd"}>
                  <ImInstagram size={30} />
                </Link>
              </div>
              <div className=" mr-3 justify-center items-center text-slate-400 rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:border-[#FF7629] hover:bg-[#FF7629] hover:text-white ease-in duration-300">
                <Link href={"https://twitter.com/sahry_ahmd"}>
                  <ImTwitter size={30} />
                </Link>
              </div>
              <div className=" mr-3 justify-center items-center text-slate-400 rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:border-[#FF7629] hover:bg-[#FF7629] hover:text-white ease-in duration-300">
                <Link href={"https://github/sahryahmd"}>
                  <ImGithub size={30} />
                </Link>
              </div>
            </div>
            <p className="font-medium text-sm text-slate-400 text-center">
              Di Buat Oleh Ahmad Bushairi Menggunakan NextJS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
