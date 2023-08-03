import React from 'react'
import eco from '../assets/eco.png'
import lowPrice from '../assets/low-price.png'
import renewEnergy from '../assets/renew-energy.png'
import price from '../assets/price-tag.png'
const ContentEnergyPros = () => {
    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid">
                <div className="flex flex-col justify-center md:ml-8">
                    <p className="text-accent-greenс font-normal md:text-1xl sm:text-1xl text-1xl mx-auto">
                        Sustainability benefits
                    </p>

                    <h1 className="text-[#555555] md:text-5xl sm:text-3xl text-2xl font-bold py-2 mx-auto ">
                        BENEFITS OF SOLAR ENERGY
                    </h1>
                </div>
            </div>
            <div className="w-full pt-[6rem] px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
                    <div className="w-full flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer shadow-custom-color">
                        <img
                            className="w-20 mx-auto mt-[-3rem] bg-white"
                            src={eco}
                            alt="/"
                        />
                        <h2 className="text-[#616161] text-2xl font-bold text-center py-5">
                            Eco Benefits
                        </h2>
                        <div className="text-center font-thin">
                            <p className="py-2">
                                Solar power is a clean, renewable energy source
                                that generates electricity without producing
                                greenhouse gas emissions, air or water
                                pollution, or toxic waste.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer shadow-custom-color">
                        <img
                            className="w-20 mx-auto mt-[-3rem] bg-white"
                            src={renewEnergy}
                            alt="/"
                        />
                        <h2 className="text-[#616161] text-2xl font-bold text-center py-5">
                            Net metering
                        </h2>
                        <div className="text-center font-thin">
                            <p className="py-2">
                                Net metering allows owners of solar panels to
                                sell excess energy back to the grid and receive
                                credits on their electricity bills
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer shadow-custom-color">
                        <img
                            className="w-20 mx-auto mt-[-3rem] bg-white"
                            src={lowPrice}
                            alt="/"
                        />
                        <h2 className="text-[#616161] text-2xl font-bold text-center py-5">
                            Cost Reduction
                        </h2>
                        <div className="text-center font-thin">
                            <p className="py-2">
                                Solar energy can help reduce electricity bills
                                by enabling the generation of one's own
                                electricity and reducing dependence on grid
                                energy
                            </p>
                        </div>
                    </div>
                    <div className="w-full  flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer shadow-custom-color">
                        <img
                            className="w-20 mx-auto mt-[-3rem] bg-white"
                            src={price}
                            alt="/"
                        />
                        <h2 className="text-[#616161] text-2xl font-bold text-center py-5">
                            Property Enhancement
                        </h2>
                        <div className="text-center font-thin">
                            <p className="py-2">
                                Solar panels boost property value by offering an
                                eco-friendly feature that helps potential buyers
                                save on energy bills
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    {' '}
                    {/* Add the 'flex' and 'justify-center' classes here */}
                    <button className="bg-accentColorGreen w-[200px] rounded-md font-medium my-6 py-3 text-white">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContentEnergyPros
