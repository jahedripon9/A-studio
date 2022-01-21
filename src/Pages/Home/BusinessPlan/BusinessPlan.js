import React from 'react';

const BusinessPlan = () => {
    return (
        <div class="container mx-auto py-20 bg-gray-50 ">
        <div class="grid grid-cols-2 gap-4 mx-20">
            <div className='mx-20 mt-40'>
                <h1 className='text-4xl font-bold my-6'>How can we help your Business ?</h1>
                <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
            </div>
            <div>
            <div class="grid grid-cols-2 gap-5">
                <div className='grid justify-items-center bg-white px-2 py-8 rounded-3xl -mt-10 mb-16 shadow-lg shadow-white-500	'>
                    <img className='align-center my-5 bg-cyan-50 p-3 w-20 rounded-lg' src="https://i.ibb.co/txS0KBY/box-search-1.png" alt="" />
                    <h3 className='text-2xl font-bold text-center'>Business Idea Planning</h3>
                    <p className='text-sm  text-center'>We present you a proposal and discuss niffty-gritty like</p>
                </div>
                <div>
                <div className='grid justify-items-center bg-white px-2 py-8 rounded-3xl mt-10 shadow-lg shadow-white-500'>
                    <img className='align-center my-5 bg-yellow-50 p-3 w-20 rounded-lg' src="https://i.ibb.co/zQnt604/empty-wallet-1.png" alt="" />
                    <h3 className='text-2xl font-bold text-center'>Financial Planning System</h3>
                    <p className='text-sm  text-center'>Protocols apart from aengage models, pricing billing</p>
                </div>
                </div>
                <div>
                <div className='grid justify-items-center bg-white px-2 py-8 rounded-3xl -mt-10 mb-16 shadow-lg shadow-white-500'>
                    <img className='align-center my-5 bg-red-50 p-3 w-20 rounded-lg' src="https://i.ibb.co/sJCwDgM/code-1-1.png" alt="" />
                    <h3 className='text-2xl font-bold text-center'>Development Website and App</h3>
                    <p className='text-sm  text-center'>Communication protocols apart from engagement models</p>
                </div>
                </div>
                <div>
                <div className='grid justify-items-center bg-white px-2 py-8 rounded-3xl shadow-lg shadow-white-500'>
                    <img className='align-center my-5 bg-green-50	 p-3 w-20 rounded-lg' src="https://i.ibb.co/DKyMWFD/chart-square-1.png" alt="" />
                    <h3 className='text-2xl font-bold text-center'>Market Analysis Project</h3>
                    <p className='text-sm  text-center'>Protocols apart from aengage models, pricing billing</p>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BusinessPlan;