import React from 'react';
import SolarCalculatorInfo from './SolarCalculatorInfo';
import SolarCalculator from './SolarCalculator';

const SolarSection = () => {
    return (
        <div className="flex flex-col justify-center relative h-screen">
            <div style={{ height: '100%' }} className="w-full bg-gradient-to-r from-blue-500 to-green-500 absolute middle" />
            <div className="py-20 relative z-10">
                <p className="text-[#a1d322] font-normal md:text-1xl sm:text-1xl text-center text-1xl">
                    LET'S CALCULATE
                </p>
                <h1 className="text-[#555555] md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-center">
                    Solar Energy Calculator
                </h1>
            </div>
            <div className="flex flex-wrap justify-center items-center px-4 md:px-8 lg:px-16 relative z-10" style={{ marginBottom: '10%' }}>
                <div className="w-full md:w-1/3 p-4 mb-4 md:mb-0 mr-2 md:mr-4 lg:mr-8">
                    <SolarCalculatorInfo />
                </div>
                <div className="w-full md:w-1/3 p-4 mb-4 md:mb-0">
                    <SolarCalculator />
                </div>
            </div>
        </div>
    );
};

export default SolarSection;

