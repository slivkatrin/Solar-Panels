import React from 'react'

const SolarCalculatorInfo = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="group rounded relative w-80 h-20 bg-white ml-8 my-3 flex items-center justify-center cursor-pointer shadow-md">
                <div
                    className="w-12 h-12 bg-[#9dd119] group-hover:bg-[#008dd2] group-hover:scale-110 transform transition-transform duration-300 rounded-full absolute left-0.5 transform -translate-x-1/2 flex items-center justify-center"
                    style={{
                        boxShadow: '0 4px 6px #00000046, 0 1px 3px #00000046',
                    }}
                >
                    <span className="text-white text-xl font-bold ">1</span>
                </div>
                <div className="flex items-center justify-center pl-10 pr-5">
                    <span className="text-gray-800 text-lg">
                        Enter the size of your roof in square meters (m²)
                    </span>
                </div>
            </div>

            <div className="group rounded relative w-80 h-20 bg-white ml-8 my-3 flex items-center justify-center cursor-pointer shadow-md">
                <div
                    className="w-12 h-12 bg-[#9dd119] group-hover:bg-[#008dd2] group-hover:scale-110 transform transition-transform duration-300 rounded-full absolute left-0.5 transform -translate-x-1/2 flex items-center justify-center"
                    style={{
                        boxShadow: '0 4px 6px #00000046, 0 1px 3px #00000046',
                    }}
                >
                    <span className="text-white text-xl font-bold ">2</span>
                </div>
                <div className="flex items-center justify-center pl-10 pr-5">
                    <span className="text-gray-800 text-lg">
                        Input your average monthly electricity bill in EUR
                    </span>
                </div>
            </div>

            <div className="group rounded relative w-80 h-20 bg-white ml-8 my-3 flex items-center justify-center cursor-pointer shadow-md">
                <div
                    className="w-12 h-12 bg-[#9dd119] group-hover:bg-[#008dd2] group-hover:scale-110 transform transition-transform duration-300 rounded-full absolute left-0.5 transform -translate-x-1/2 flex items-center justify-center"
                    style={{
                        boxShadow: '0 4px 6px #00000046, 0 1px 3px #00000046',
                    }}
                >
                    <span className="text-white text-xl font-bold ">3</span>
                </div>
                <div className="flex items-center justify-center pl-10 pr-5">
                    <span className="text-gray-800 text-lg">
                        Enter the efficiency of the solar panels you plan to use
                    </span>
                </div>
            </div>
            <div className="group rounded relative w-80 h-20 bg-white ml-8 my-3 flex items-center justify-center cursor-pointer shadow-md">
                <div
                    className="w-12 h-12 bg-[#9dd119] group-hover:bg-[#008dd2] group-hover:scale-110 transform transition-transform duration-300 rounded-full absolute left-0.5 transform -translate-x-1/2 flex items-center justify-center"
                    style={{
                        boxShadow: '0 4px 6px #00000046, 0 1px 3px #00000046',
                    }}
                >
                    <span className="text-white text-xl font-bold ">4</span>
                </div>
                <div className="flex items-center justify-center pl-10 pr-5">
                    <span className="text-gray-800 text-lg">
                        Specify the efficiency of your inverter
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SolarCalculatorInfo
