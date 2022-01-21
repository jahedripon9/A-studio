import React from 'react';

const Banner = () => {
    return (
        <div class="container mx-auto">
            <div class="flex flex-row ">
            <div class="basis-1/3 mx-auto my-16  ">
                <h1 className='text-4xl	font-bold text-left mb-10'>A Digital Product Agency</h1>
                <p className='text-1xl text-left '>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                <button class="rounded-full bg-blue-700 p-3 px-10 font-bold mt-10 text-white">Contact Now</button>
                <div className='grid grid-cols-4 gap-4'>
                <div>
                    <span><img className='w-' src="https://i.ibb.co/kKYd60d/Dot.png" alt="" /></span>
                </div>
                <div>
                    <span><img  src="https://i.ibb.co/kKYd60d/Dot.png" alt="" /></span>
                </div>
                </div>
            </div>
            <div class="basis-1/2 ">
                <img className='w-full'  src="https://i.ibb.co/gMhQjzh/image-8.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;