import React from 'react';
import SolarCalculatorInfo from './SolarCalculatorInfo';
import SolarCalculator from './SolarCalculator';

const SolarSection = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen relative bg-gradient-to-r from-fadedLeft to-fadedRight">
            <div className="py-8 md:py-20 z-10">
                <p className="text-[#f5f8f5] font-normal text-xl md:text-2xl text-center">
                    LET'S CALCULATE
                </p>
                <h1 className="text-[#555555] text-2xl sm:text-3xl md:text-5xl font-bold py-2 text-center">
                    Solar Energy Calculator
                </h1>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center px-2 md:px-8 lg:px-16 z-10 mb-8 md:mb-20">
                <div className="w-full md:w-1/3 p-2 md:p-4 mb-4 md:mb-0 mr-0 md:mr-4 lg:mr-8">
                    <SolarCalculatorInfo />
                </div>
                <div className="w-full md:w-1/3 p-2 md:p-4">
                    <SolarCalculator />
                </div>
            </div>
        </div>
    );
};

export default SolarSection;
