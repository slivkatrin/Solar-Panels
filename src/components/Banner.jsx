import React from 'react'
import SolarPanel from '../assets/bannerImg.jpg'
const Banner = () => {
    return (
        <div className="w-full py-16 px-4">
            <div className="mx-10 grid md:grid-cols-2">
            <div className="flex flex-col justify-center md:ml-8">
                    

                    <h1 className="text-[#555555] md:text-7xl sm:text-5xl text-2xl font-medium py-2 ">
                        Get a stable income from green energy
                    </h1>
                    <p className="text-[#7b7b7b] md:text-2xl font-normal py-2 ">
                        By selling excess solar energy to the grid
                    </p>
                    <div className="btn btn-lg">
                    <button className="bg-accentColorGreen w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">
                        Learn more
                    </button>
                    </div>
                </div>


                <img
                    className="w-[800px] mx-auto my-4 md:mr-8"
                    src={SolarPanel}
                    alt=""
                />
                
            </div>
        </div>
    )
}

export default Banner
