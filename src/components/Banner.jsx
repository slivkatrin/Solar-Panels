import React from 'react'
import SolarPanel from '../assets/bannerImg2.jpg'
import { Button } from '@material-tailwind/react'

const Banner = () => {
    return (
        <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center md:items-start md:ml-8">
                    <h1 className="text-[#555555] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium py-2 text-left md:text-left">
                        Get a stable income from green energy
                    </h1>
                    <p className="text-[#7b7b7b] text-xl md:text-2xl font-normal py-2 text-center md:text-left">
                        By selling excess solar energy to the grid
                    </p>
                    <div className="mt-4">
                        <Button
                            variant="gradient"
                            className="rounded- bg-[#575AD2] w-[200px] text-white py-3"
                        >
                            Learn more
                        </Button>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <img
                        className="w-full md:w-[800px] mx-auto scale-x-[-1]"
                        src={SolarPanel}
                        alt="Solar Panel"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
