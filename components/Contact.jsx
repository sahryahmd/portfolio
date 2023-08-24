import React from "react";

const Contact = () => {
  return (
    <div className="pt-36 pb-32 bg-[#232323]">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-3xl text-[#FF7629] mb-2 lg:text-5xl">
              Contact
            </h4>
            <p className="font-medium text-lg text-slate-400 mt-5">
              Untuk keterangan lebih lanjut silahkan hubungi saya
            </p>
          </div>
        </div>
        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base text-[#FF7629] font-bold uppercase"
              >
                Nama
              </label>
              <input
                type="name"
                id="name"
                className="w-full bg-slate-200 text-[#FF7629] p-3 rounded-md focus:outline-none focus:ring-[#FF7629] focus:ring-1 focus:border-[#FF7629]"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base text-[#FF7629] font-bold uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-200 text-[#FF7629] p-3 rounded-md focus:outline-none focus:ring-[#FF7629] focus:ring-1 focus:border-[#FF7629]"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base text-[#FF7629] font-bold uppercase"
              >
                Pesan
              </label>
              <textarea
                type="message"
                id="message"
                className="w-full bg-slate-200 text-[#FF7629] p-3 rounded-md focus:outline-none focus:ring-[#FF7629] focus:ring-1 focus:border-[#FF7629] h-32"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold text-white bg-[#FF7629]  py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
