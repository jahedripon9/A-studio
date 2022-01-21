import React from 'react';

const OurClient = () => {
    return (
        <div className='my-10'>
            <h1 className='font-bold ml-20 text-3xl'>Our Client</h1>
            <div class="grid grid-cols-5 gap-4 mx-20 items-center">

                <div>
                    <p className='text-sm'>Several selected clients, who already believe in our service.</p>
                </div>
                <div><img src="https://i.ibb.co/0DDzd6Z/Google-Logo.png" alt="" /></div>
                <div><img src="https://i.ibb.co/5xr0rJ2/Airbnb-Logo.png" alt="" /></div>
                <div><img src="https://i.ibb.co/WcjYP9k/Uber-Eats-Logo.png" alt="" /></div>
                <div><img className='mt-6' src="https://i.ibb.co/6mH614d/Amazon-Logo.png" alt="" /></div>
            </div>
        </div>
    );
};

export default OurClient;