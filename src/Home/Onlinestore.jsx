import React from "react";
import { Link } from "react-router-dom";

export default function Onlinestore() {
  return (
    <div className="max-w-1240px lg:mt-44 mt-28 mb-32" id="online">
      <div className="flex justify-center space-x-28">
        <div className="space-y-7 lg:text-left text-center">
          <h1 className="text-[#383838] text-4xl font-bold">Online Store</h1>
          <p className="text-[#626167]">
            We not like other! <br />
            All main features is unlimited counts !
          </p>
          <div className="flex space-x-5">
            <button>
              <label class="cursor-pointer">
                <input type="radio" class="peer sr-only" name="pricing" />
                <div class="max-w-xl py-8 rounded-lg bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all shadow-2xl hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                  <div class="flex flex-col gap-1">
                    <div class="flex items-center space-x-10">
                      <p class="text-sm font-semibold text-gray-500">
                        Basic Plan
                      </p>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center space-x-3 mt-1">
                      <p className="text-[10px] font-extrabold text-black">
                        <span class="text-lg font-bold text-gray-600">75</span>{" "}
                        KD
                      </p>
                      <p class="text-sm font-bold">/ 3 months</p>
                    </div>
                  </div>
                </div>
              </label>
            </button>

            <button>
              <label class="cursor-pointer">
                <input type="radio" class="peer sr-only" name="pricing" />
                <div class="max-w-xl py-5 rounded-lg bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all shadow-2xl hover:shadow peer-checked:text-[#cc1212] peer-checked:ring-[#cc1212] peer-checked:ring-offset-2">
                  <div class="flex flex-col gap-1">
                    <div class="flex items-center space-x-10">
                      <p class="text-sm font-semibold uppercase text-gray-500">
                        Business Plan
                      </p>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center space-x-3 ">
                      <p className="text-[10px] font-extrabold text-black">
                        <span class="text-lg font-bold text-gray-600">240</span>{" "}
                        KD
                      </p>
                      <p class="text-sm font-bold">/ Year</p>
                    </div>
                    <p className="text-[#cc1212] bg-[#FFEEF0] block w-20 rounded-2xl text-[12px] font-medium mt-1">
                      Save%20
                    </p>
                  </div>
                </div>
              </label>
            </button>
          </div>
          <button className="shadow-xl">
            <Link
              to="/sub"
              class="relative inline-flex items-center pr-20 pl-3 py-3 overflow-hidden text-lg font-medium text-[#cc1212] border-2 border-[#cc1212] rounded hover:text-white group hover:bg-gray-50"
            >
              <span class="absolute left-0 block w-full h-0 transition-all bg-[#cc1212] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative">Next</span>
            </Link>
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="bg-[#cc1212] rounded-full w-[450px] h-[450px]">
            <div className="absolute top-[333%] left-[55%] rotate-1 drop-shadow-xl">
              <img src="./images/Bitmap (1).png" alt="" className="h-[500px]" />
            </div>
            <div className="absolute top-[380%] left-[68%] drop-shadow-2xl">
              <img src="./images/Bitmap.png" alt="" className="h-[80px] rounded-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
