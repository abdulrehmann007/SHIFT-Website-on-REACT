import React from "react";
import { Link } from "react-router-dom";

export default function SubHead() {
  return (
    <div className="max-w-[1240px]  ">
      <div className="lg:p-4 p-2 lg:static fixed top-0 w-full z-20 lg:shadow-[0] shadow-lg lg:bg-[#F7F8FB] bg-white">
        <div className="max-w-[1240px] items-center lg:space-x-96 flex justify-between lg:justify-around mx-auto">
          <div className="">
            <img src="./images/BlackLogo.png" alt="" />
          </div>

          <button>
            <Link
              to="/"
              class="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-medium tracking-tighter text-white bg-black rounded tracking-wide group"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#cc1616] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#2C3C4D]"></span>
              <span class="relative">Back</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
