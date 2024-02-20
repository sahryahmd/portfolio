import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className="pt-36 pb-16 bg-[#232323]">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-3xl text-[#FF7629] mb-2 lg:text-5xl">
              Portfolio
            </h4>

            <p className="font-medium text-lg text-slate-400">
              Beberapa Project yang telah saya buat beserta linknya silahkan
              klik pada judul projectnya
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto  ">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image
                src="/assets/projects/Capture 3.JPG"
                alt="spotify"
                width={600}
                height={300}
              />
            </div>
            <Link
              href="https://spotify-clone-ten-amber.vercel.app/"
              className="font-semibold text-white text-xl mt-5 mb-3 hover:text-[#FF7629]"
            >
              Spotify Clone
            </Link>
            <p className="font-medium text-base text-slate-300">
              Full Stack Spotify Clone dengan menggunakan Nextjs versi 13.4,
              React, Stripe, Database menggunakan Supabase dan PostgreSQL dan
              CSS menggunakan TailwindCSS
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image
                src="/assets/projects/promptopia.JPG"
                alt="promptopia"
                width={600}
                height={300}
              />
            </div>
            <Link
              href="https://promptopia-silk-one.vercel.app/"
              className="font-semibold text-white text-xl mt-5 mb-3 hover:text-[#FF7629]"
            >
              Promtopia
            </Link>
            <p className="font-medium text-base text-slate-300">
              Website pada promptopia ini menggunakan NextJs versi 13 dengan App
              Router database menggunakan google console di deploy vercel
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image
                src="/assets/projects/Capture 2.JPG"
                alt="netlix-clone"
                width={600}
                height={300}
              />
            </div>
            <Link
              href="https://netflix-clone-mu-roan.vercel.app/"
              className="font-semibold text-white text-xl mt-5 mb-3 hover:text-[#FF7629]"
            >
              Netflix Clone
            </Link>
            <p className="font-medium text-base text-slate-300">
              Netflix Clone ini dibuat dengan menggunakan Nextjs versi 13, React
              , backand dengan Prisma, database menggunakan MongoDB, NextAuth
              dan Vercel
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image
                src="/assets/projects/hoobank.JPG"
                alt="promptopia"
                width={600}
                height={300}
              />
            </div>
            <Link
              href="#hoobank"
              className="font-semibold text-white text-xl mt-5 mb-3 hover:text-[#FF7629]"
            >
              Hoobank
            </Link>
            <p className="font-medium text-base text-slate-300">
              Website Hoobank Clone ini dibuat menggunakan Reactjs dan
              tailwindCss
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
