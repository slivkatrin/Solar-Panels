import React from 'react';
import eco from '../assets/eco.png'
const ContentEnergyPros = () => {

    return(
<div className='w-full py-16 px-4'>
    <div className='max-w-[1440px] mx-auto grid'>
    <div className='flex flex-col justify-center md:ml-8'>
        <p className='text-[#a1d322] font-normal md:text-1xl sm:text-1xl text-1xl '>Sustainability benefits</p>

        <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2'>BENEFITS OF SOLAR ENERGY</h1>
</div>
</div>
<div className='w-full py-[6rem] px-4'>
<div className='max-w-[1440px] mx-auto grid md:grid-cols-4 gap-8'>
    <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={eco} alt="/" />
        <h2 className='text-2xl font-bold text-center py-5'>Eco Benefits</h2>
        <div className='text-center font-medium'>
            <p className='py-2'>Solar power is a clean, renewable energy source that generates electricity without producing greenhouse gas emissions, air or water pollution, or toxic waste.</p>
        </div>
        
        <button>Start trial</button>
    </div>
</div>
</div>
</div>
    )
};

export default ContentEnergyPros;