import Image from "next/image";
import { ImYoutube, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";

import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="pt-36 pb-36 bg-[#1D1C1C] w-full">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h1 className="text-[#FF7629] text-lg font-bold mb-10 lg:text-3xl ">
              About Me
            </h1>
            <Image
              src="/assets/about.jpg"
              alt="about"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full h-full lg:w-1/2">
            <p className="text-white lg:mt-14">
              Hello, saya Ahmad Bushairi, saat ini saya bekerja sebagai IT staff
              di sebuah perusahaan yang begerak dibidang jasa provider internet
            </p>
            <p className="text-slate-300 mt-5">
              Saya lahir di Jakarta pada 10 September 1993 dan saat ini saya
              tinggal di Depok Jawabarat dan Saya telah menyelesaikan pendidikan
              strata 1 di universitas indraprasta PGRI Jakarta Selatan
            </p>
            <div className="flex items-center mt-8">
              <Link
                href="https://www.youtube.com/channel/UCXxCoC34zsVObU81bDYExDQ"
                className=" mr-3 justify-center items-center text-slate-400 rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:border-[#FF7629] hover:bg-[#FF7629] hover:text-white ease-in duration-300"
              >
                <ImYoutube size={30} />
              </Link>
              <Link
                href="https://www.instagram.com/sahryahmd"
                className=" mr-3 justify-center items-center text-slate-400 rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:border-[#FF7629] hover:bg-[#FF7629] hover:text-white ease-in duration-300"
              >
                <ImInstagram size={30} />
              </Link>
              <Link
                href="https://www.twitter.com/sahryahmd"
                className=" mr-3 justify-center items-center text-slate-400 rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:border-[#FF7629] hover:bg-[#FF7629] hover:text-white ease-in duration-300"
              >
                <ImTwitter size={30} />
              </Link>
              <Link
                href="https://www.github.com/sahryahmd"
                className=" mr-3 justify-center items-center text-slate-400 rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:border-[#FF7629] hover:bg-[#FF7629] hover:text-white ease-in duration-300"
              >
                <ImGithub size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
