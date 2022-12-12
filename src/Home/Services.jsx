import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper";

export default function Services() {
  const langs = [
    { name: "Instant Chat", logo: "./images/p1.png" },
    { name: "Media Manager", logo: "./images/p2.png" },
    { name: "Team Collaboraion", logo: "./images/p3.png" },
    { name: "Cyber Security", logo: "./images/p4.png" },
    { name: "Quick Response", logo: "./images/p5.png" },
    { name: "News Letter", logo: "./images/p6.png" },
    { name: "Terms Conditions", logo: "./images/p7.png" },
    { name: "Customer Support", logo: "./images/p8.png" },
  ];

  return (
    <div>
      <div className=" flex items-center  text-white justify-center">
        <div className="max-w-5xl">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            centeredSlides={true}
            speed={800}
            autoplay={{
              delay: 2000,
            }}
            modules={[Autoplay]}
          >
            {langs.map((lang, i) => (
              <SwiperSlide key={i}>
                <div className="h-72 flex">
                  <div className="sm:w-72 cursor-pointer border-b-4 rounded-md bg-gradient-to-t from-black/70 to-[#cc1212] h-44 text-center px-3 py-7 self-end hover:h-72 duration-500">
                    <div className="text-5xl mt-2 max-w-[5rem] mx-auto min-w-[5rem] min-h-[5rem] rounded-full bg-red-200 text-red-600 grid place-items-center">
                      <img src={lang.logo} alt="" />
                    </div>
                    <h2 className="text-3xl mt-2 font-semibold">{lang.name}</h2>
                    <p className="mt-3">
                      We’ve helped over 2,500 job seekers to get into the most
                      popular tech teams.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

<button className="flex space-x-4 justify-around rounded items-center text-center bg-[#cc1212] px-3 py-3 text-white mt-10 mx-auto hover:bg-red-500 duration-500 active:bg-[#cc1212]">
    <img src="./images/Shape.png" alt="" />
    <p className="italic">See the features</p>
</button>
<hr className="mt-20 mb-5" />
    </div>
  );
}
