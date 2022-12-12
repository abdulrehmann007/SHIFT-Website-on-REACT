import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <div className="max-w-full lg:py-0 py-10 bg-[#CC1616] mt-10">
      <div className="lg:mx-20 mx-10">
        <div className="lg:flex justify-between">
          <div className="space-y-8 lg:my-10">
            <div>
              <img src="./images/BlackLogo (1).png" alt="" />
            </div>
            <div className="italic text-white">
              <p>
                We Provide you with your own <br /> customizable e-store that
                will suit all your <br /> needs.
              </p>
            </div>
            <div className="bg-black text-center py-3 text-white hover:bg-gray-100 hover:text-black duration-700 rounded-lg w-40">
              <button className="italic">Ask Question</button>
            </div>
          </div>

          <div className="lg:flex lg:space-x-20 my-14">
            <div className="space-y-5 italic lg:mb-0 mb-12">
              <h2 className="font-medium">Sections</h2>
              <ul className="space-y-4 text-white">
                <li className="hover:text-black duration-500 cursor-pointer"><HashLink to="#home"> Home </HashLink></li>
                <li className="hover:text-black duration-500 cursor-pointer"><HashLink to="#about"> About us </HashLink></li>
                <li className="hover:text-black duration-500 cursor-pointer"><HashLink to="#solution"> Solutions </HashLink></li>
                <li className="hover:text-black duration-500 cursor-pointer"><HashLink to="#faq"> Faq </HashLink></li>
                <li className="hover:text-black duration-500 cursor-pointer"><HashLink to="#contact"> Contact us </HashLink></li>
              </ul>
            </div>

            <div className="space-y-5 italic ">
              <h1 className="font-medium">Contact us</h1>
              <p className="text-white">
                Feel free to get in touch with us via <br /> phone or send us a
                message.
              </p>
              <ul className="font-medium">
                <li className="hover:underline cursor-pointer">
                  +92 3171267272
                </li>
                <li className="hover:underline cursor-pointer">
                  abdulrehmann.motenn@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="mt-6 flex justify-between">
            <div className="text-white italic">
                <p>&copy; Shift All, Rights Reserved</p>
            </div>
            <div className="flex space-x-3">
                <img src="./images/twitter.png" alt="" className="h-6"/>
                <img src="./images/fb.png" alt="" className="h-5" />
                <img src="./images/google.png" alt="" className="h-5"/>
            </div>
        </div>

      </div>
    </div>
  );
}
