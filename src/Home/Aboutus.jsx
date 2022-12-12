import React from 'react'

export default function Aboutus() {
  return (
    <div id='about'>
      <div className='lg:flex justify-center lg:space-x-20 lg:ml-56 text-center'>
        <div>
          <img src="./images/aboutus man.png" alt="" className='w-[250x] h-[550px] drop-shadow-xl hidden lg:block'/>
        </div>
        <div>
          <img src="./images/abresp.png" alt="" className='lg:hidden mx-auto'/>
        </div>
        <div className='bg-white rounded-3xl shadow-2xl p-7 h-[182px] lg:mt-28 lg:mx-0 mx-5 mt-7 lg:mb-0 mb-4'>
          <h1 className='text-[#383838] font-bold text-2xl'>All you need to know <br /> about us..</h1>
          <p className='text-[#626167] text-sm'>We provide you with your own <br /> customizable e-store that will suit <br /> all your needs.</p>
        </div>
        <div className='bg-[#cc1212] rounded-3xl shadow-xl p-7 h-[115px] lg:relative top-[17rem] right-56 lg:mx-0 mx-10'>
          <h1 className='text-black font-bold text-2xl'>Our Vision</h1>
          <p className='text-sm'>is to see you sign up.</p>
        </div>
      </div>

      <div className='text-center text-[#8A89A0] uppercase text-sm mb-3 mt-12'>
        <h6>Our clients are our friends</h6>
      </div>
      <div>
        <ul className='flex justify-center lg:space-x-10 space-x-5 mx-5 lg:mx-0'>
          <li><img src="./images/logo 1.png" alt="" /></li>
          <li><img src="./images/logo 2.png" alt="" /></li>
          <li><img src="./images/logo 3.png" alt="" /></li>
          <li><img src="./images/logo 4.png" alt="" /></li>
          <li><img src="./images/logo 5.png" alt="" /></li>
        </ul>
      </div>
    </div>
  )
}
