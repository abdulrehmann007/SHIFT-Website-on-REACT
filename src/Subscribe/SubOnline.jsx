import React from "react";
import { Link } from "react-router-dom";

export default function SubOnline() {
  return (
    <div className="lg:flex justify-evenly lg:mt-20 mt-28 mb-20 lg:text-left text-center flex flex-wrap justify-center">
      <div className="space-y-4">
        <div className="text-[#383838] text-4xl font-medium">
          <p>Online Store</p>
        </div>

        <div className="flex space-x-5 justify-center">
          <button>
            <label class="cursor-pointer">
              <input type="radio" class="peer sr-only" name="pricing" />
              <div class="max-w-xl py-8 rounded-xl bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all shadow-2xl hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
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
                      <span class="text-lg font-bold text-gray-600">75</span> KD
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
              <div class="max-w-xl py-5 rounded-xl bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all shadow-2xl hover:shadow peer-checked:text-[#cc1212] peer-checked:ring-[#cc1212] peer-checked:ring-offset-2">
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

        <div>
          <h1 className="text-[#cc1616] cursor-pointer mb-2 mt-16">
            What should be Included?
          </h1>
          <div className="space-y-3">
            <input type="checkbox" className="accent-[#cc1212] " /> Landing page
            <br />
            <input type="checkbox" className="accent-[#cc1212] " /> 5 Additional
            pages <br />
            <input type="checkbox" className="accent-[#cc1212] " /> Design files
            included <br />
            <input type="checkbox" className="accent-[#cc1212] " /> HTML 5 & CSS
            3 <br />
            <input
              type="checkbox"
              className="accent-[#cc1212] "
            /> Responsive <br />
            <input type="checkbox" className="accent-[#cc1212] " /> Online
            documentaiton <br />
            <input type="checkbox" className="accent-[#cc1212] " /> Online
            Support
          </div>
        </div>

        <div className="sm:block flex flex-wrap justify-center items-center">
          <label
            for="Pick your domain:"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 mt-10"
          >
            Pick your domain:
          </label>
          <input
            type="text"
            id="Pick your domain:"
            class="bg-gray-50 border-2 w-80 border-gray-300 text-[#626167] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pick a domain name: www.yourname.com"
            required
          ></input>
        </div>
      </div>

      <div className="bg-white shadow-lg p-5 px-8 rounded-2xl mt-10 lg:mt-0 lg:mx-0 mx-3 ">
        <h1 className="text-[#383838] lg:text-4xl text-2xl font-bold text-center mb-12">
          Create and launch
        </h1>
        <div className="space-y-7">
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
              Business name (or Instagram account)
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
              +92 3171267272
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
            Your E-mail
            </label>
          </div>

          <div class="w-full relative group">
            <input
              type="password"
              id="username"
              required
              class="w-full h-14 px-28 text-sm peer rounded-lg border-2 border-[#DDDDDD] outline-1 outline-[#cc1212]"
            ></input>
            <label
              for="username"
              class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-[#626167] text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
            Your Password
            </label>
          </div>
          <input type="checkbox" name="" id="" className="accent-black" />
          <span className=" text-[#cc1212]">
            {" "}
            Accept Terms & Privacy Policy
          </span>
        </div>
        <button className="mt-7 ">
          <Link
            to="/"
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
            <span class="relative">Pay Now!</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
