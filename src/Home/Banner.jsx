import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
    return (
        <div className='w-full'>
            <div className='max-w-1240px mx-auto text-center lg:pt-14 pt-24 py-14'>
                <div className='font-bold lg:text-5xl text-3xl text-[#1F1E2D] mb-14'>
                    <h1>Create
                        <Typed
                            className='pl-2'
                            strings={['Your Online Store']}
                            typeSpeed={80}
                            loop={true}
                            backSpeed={60}
                        />
                    </h1>
                </div>

                <div>
                    <img src="./images/BlackLogo (2).png" alt="" className='mx-auto' />
                </div>
            </div>
        </div>
    )
}
<div className="flex justify-center items-center space-x-10">


<p className='text-gray-700 text-xl'>With <b>shift</b> you will move to the next <br />
        level in the online business space.</p>

</div>