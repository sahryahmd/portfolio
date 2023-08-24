import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div id="home" className="pt-36 bg-[#232323]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <p className="text-slate-300 font-medium md:text-xl">Hello,</p>
            <h1 className="text-[#FF7629] font-bold text-2xl tracking-wider md:text-4xl">
              I am Ahmad Bushairi
            </h1>
            <p className="text-slate-300 my-5 md:text-xl">
              Freelance Web Developer
            </p>
            <p className="text-slate-300 my-5 md:text-xl">IT Staff</p>
            <div className="bg-[#FF7629] w-36 px-5 text-white font-semibold rounded-lg hover:bg-opacity-80 transition duration-300 ease-in-out">
              <Link
                href={
                  "https://drive.google.com/file/d/1MNrIMaLls7vbNS0XbK4-GCtMFbyb32iP/view?usp=sharing"
                }
              >
                Download CV
              </Link>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 relative ">
              <Image
                src="/../public/assets/profile-picture.png"
                alt="foto-profil"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
