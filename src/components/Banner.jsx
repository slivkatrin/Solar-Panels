import React from 'react'
import SolarPanel from '../assets/bannerImg2.jpg'
import { Button } from '@material-tailwind/react'
const Banner = () => {
    return (
        <div className="w-full py-16 px-20">
            <div className="mx-10 grid md:grid-cols-2">
                <div className="flex flex-col justify-center md:ml-8">
                    <h1 className="text-[#555555] w-full md:text-7xl sm:text-5xl text-2xl font-medium py-2 ">
                        Get a stable income from green energy
                    </h1>
                    <p className="text-[#7b7b7b] md:text-2xl font-normal py-2 ">
                        By selling excess solar energy to the grid
                    </p>
                    <div className="">
                    
                        <Button variant="gradient" className="rounded- bg-[#575AD2] w-[200px] text-white my-6 mx-auto md:mx-0 py-3">
                        Learn more
                        </Button>
                    </div>
                </div>

                <img
                    className="w-[800px] mx-auto my-4 md:mr-8 scale-x-[-1]"
                    src={SolarPanel}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Banner
