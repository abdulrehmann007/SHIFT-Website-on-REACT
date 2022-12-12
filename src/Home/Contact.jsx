import React from "react";

export default function contact() {
  return (
    <div className="max-w-1240px mt-32" id="contact">
      <div className="lg:flex justify-evenly">
        <div className="lg:space-y-24 space-y-10 lg:text-left lg:mx-0 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl text-[#848484] font-medium">Hey!</h1>
            <h1 className="text-6xl text-[#2C3C4D] font-medium">
              Talk to us ...
            </h1>
          </div>
          <div className="space-y-7">
            <div className="space-y-4">
              <h6 className="font-medium ">Find us at</h6>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <img src="./images/map.png" alt="" />
                <p className="text-[#8C959F]">
                  Kuwait, Ahmed Aljaber, Block 14, Street 55
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h6 className="font-medium">Reach out to us at</h6>
              <div className="flex space-x-5 justify-center">
                <div className="flex items-center space-x-2">
                  <img src="./images/envelope.png" alt="" />
                  <p className="text-[#8C959F] hover:underline cursor-pointer">hello@gowithshift.com</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="./images/phone.png" alt="" />
                  <p className="text-[#8C959F] hover:underline cursor-pointer">+965 90909090</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src="./images/talktous.png" alt="" className="lg:mx-0 mx-auto lg:my-0 my-7"/>
        </div>
        <div className="space-y-10 text-center lg:mx-0 mx-5">
          <div class="w-full relative group">
            <input
              type="text"
              id="username"
              required
              class="w-full h-14 px-28 text-sm peer rounded-lg border-2 border-[#DDDDDD] outline-1 outline-[#cc1212]"
            ></input>
            <label
              for="username"
              class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-[#626167] text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Your name
            </label>
          </div>

          <div class="w-full relative group">
            <input
              type="text"
              id="username"
              required
              class="w-full h-14 px-28 text-sm peer rounded-lg border-2 border-[#DDDDDD] outline-1 outline-[#cc1212]"
            ></input>
            <label
              for="username"
              class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-[#626167] text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Your mobile
            </label>
          </div>

          <div class="w-full relative group">
            <input
              type="text"
              id="username"
              required
              class="w-full h-14 px-28 text-sm peer rounded-lg border-2 border-[#DDDDDD] outline-1 outline-[#cc1212]"
            ></input>
            <label
              for="username"
              class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-[#626167] text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Your e-mail
            </label>
          </div>

          <div class="w-full relative group">
            <input
              type="text"
              id="username"
              required
              class="w-full h-24 px-28 text-sm peer rounded-lg border-2 border-[#DDDDDD] outline-1 outline-[#cc1212]"
            ></input>
            <label
              for="username"
              class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-[#626167] text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Take our breath away...
            </label>
          </div>

          <button className="lg:ml-72">
            <a
              href="#_"
              class="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-[#cc1212] rounded-lg group"
            >
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#2C3C4D] rounded group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#2C3C4D] rounded-lg group-hover:mb-12 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Send
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
