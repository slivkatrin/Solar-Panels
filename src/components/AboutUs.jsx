import React from 'react';
import SolarPanel from '../assets/SolarPanel.jpg'
const AboutUs = () => {

    return(
<div className='w-full py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[500px] mx-auto my-4 md:mr-8' src={SolarPanel} alt='' />
    <div className='flex flex-col justify-center md:ml-8'>
        <p className='text-accentColorGreen font-normal md:text-1xl sm:text-1xl text-1xl'>KNOW US BETTER</p>

        <h1 className='text-[#555555] md:text-5xl sm:text-3xl text-2xl font-bold py-2'>About our company</h1>
<p>Green Kraft is a company based in Poland and Germany, specializing in solar panel installations. We offer innovative and environmentally-friendly energy solutions for residential and commercial buildings, helping our clients reduce their environmental impact and lower energy costs. Our priority in business is sustainable development and ecology.
<br /> <br />
We deliver high-quality and personalized solar energy solutions that cater to the specific needs of our customers. Our expertise enables us to provide effective and reliable services. At Green Kraft, we are committed to an ecological future. </p>
<button className='bg-accentColorGreen w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Learn more</button>
</div>

    </div>

</div>
    )
};

export default AboutUs;