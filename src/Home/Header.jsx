import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='lg:p-4 p-2 lg:static fixed top-0 w-full z-20 shadow-lg lg:shadow-[0] lg:bg-[#F7F8FB] bg-white'>
      <div className="max-w-[1240px] items-center flex lg:justify-around justify-between mx-auto" id='home'>
        <div className=''>
          <img src="./images/BlackLogo.png" alt="" />
          <span className='text-[#CC1616] uppercase font-medium text-[12px] tracking-tight hover:underline cursor-pointer hidden md:block'> <Link to='/sub'>Create your online store</Link> </span>
        </div>

        <div>
          {
            toggle ?
              <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-3xl font-bold 
          md:hidden block' />
              :
              <BiMenuAltRight onClick={() => setToggle(!toggle)} className='text-3xl font-bold 
        md:hidden block' />
          }

          <div className='flex space-x-7 items-center'>
            <ul className='flex gap-7 hidden md:flex text-[#868E96]'>
              <li className='hover:text-[#CC1616] duration-500 cursor-pointer'>
              <HashLink to="#home" smooth>Home</HashLink>
              </li>

              <li className='hover:text-[#CC1616] duration-500 cursor-pointer'>
              <HashLink to='#about' smooth>About us</HashLink>
              </li>

              <li className='hover:text-[#CC1616] duration-500 cursor-pointer'>
              <HashLink to='#solution' smooth>Solutions</HashLink>
              </li>

              <li className='hover:text-[#CC1616] duration-500 cursor-pointer'>
              <HashLink to='#faq' smooth>Faq</HashLink>
              </li>

              <li className='hover:text-[#CC1616] duration-500 cursor-pointer'>
              <HashLink to='#contact' smooth>Contact Us</HashLink>
              </li>
            </ul>

            {/* RESPONSIVE Header*/}

            <div className={`duration-300 md:hidden w-full h-screen text-[#CC1616] font-medium fixed bg-[#fafafa] top-[63px] z-20
           ${toggle ? 'left-[-1.75rem]' : 'left-[-100rem]'}`}>
              <ul>
                <li className='hover:text-black duration-500 cursor-pointer p-5'>
                <HashLink to="#home" smooth>Home</HashLink>
                </li>

                <li className='hover:text-black duration-500 cursor-pointer p-5'>
                <HashLink to="#about" smooth>About us</HashLink>
                </li>

                <li className='hover:text-black duration-500 cursor-pointer p-5'>
                <HashLink to="#solution" smooth>Solutions</HashLink>
                </li>

                <li className='hover:text-black duration-500 cursor-pointer p-5'>
                <HashLink to="#faq" smooth>Faq</HashLink>
                </li>

                <li className='hover:text-black duration-500 cursor-pointer p-5 pb-12'>
                <HashLink to="#contact" smooth>Contact Us</HashLink>
                </li>
              </ul>

              <hr />

              <div className='text-center mt-12 space-y-6'>
                <button>
                  <Link to="/sub"
                    class="relative inline-flex items-center justify-start px-16 py-3 overflow-hidden font-medium transition-all bg-[#CC1616] rounded-xl group">
                    <span
                      class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span
                      class="absolute bottom-0 left-0 w-full h-full transition-all duration-500-out delay-200 -translate-x-full translate-y-full bg-black rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span
                      class="relative w-full text-left text-white transition-colors duration-200-out group-hover:text-white">Create your store!</span>
                  </Link></button>

                <p className='text-gray-500'>Store owner? <span className='text-[#CC1616] font-medium hover:underline'>log in</span></p>

                <div className="bg-white px-2 py-2 mx-40 rounded-3xl">
                  <select className="text-[#CC1616] font-medium">
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                  </select>
                </div>
              </div>
            </div>


            <div className='hidden md:flex items-center'>
              <div className='inline-block'>|</div>
              <div className="bg-[#f5f5f5] mr-7">
                <select className="text-black font-medium bg-[#F7F8FB] appearance-none px-2">
                  <option value="english" className='bg-[#F7F8FB]'><span></span> English</option>
                  <option value="arabic" className='bg-[#F7F8FB]'><span></span> Arabic</option>
                </select>
              </div>

              <button>
                    <HashLink to="#online" smooth class="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium tracking-tighter text-white bg-[#CC1616] rounded-lg group">
                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#2C3C4D]"></span>
                        <span class="relative">Let's start!</span>
                    </HashLink>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}