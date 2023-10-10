import React from 'react'
const SolarCalculatorInfo = () => {
    return (
      <div className='flex flex-col items-center justify-center'>
    <div className="rounded relative w-80 h-20 bg-slate-400 ml-8 my-3 flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full absolute left-1 transform -translate-x-1/2 flex items-center justify-center">
            <span className="text-white text-xl">1</span>
        </div>
        <div className="flex items-center justify-center pl-10 pr-5">
            <span className="text-white text-lg">Enter the size of your roof in square meters (m²)</span>
        </div>
    </div>

    <div className="rounded relative w-80 h-20 bg-slate-400 ml-8 my-3 flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full absolute left-1 transform -translate-x-1/2 flex items-center justify-center">
            <span className="text-white text-xl">2</span>
        </div>
        <div className="flex items-center justify-center pl-10 pr-5">
            <span className="text-white text-lg">Input your average monthly electricity bill in EUR</span>
        </div>
    </div>

    <div className="rounded relative w-80 h-20 bg-slate-400 ml-8 my-3 flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full absolute left-1 transform -translate-x-1/2 flex items-center justify-center">
            <span className="text-white text-xl">3</span>
        </div>
        <div className="flex items-center justify-center pl-10 pr-5">
            <span className="text-white text-lg">Enter the efficiency of the solar panels you plan to use</span>
        </div>
    </div>
    <div className="rounded relative w-80 h-20 bg-slate-400 ml-8 my-3 flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full absolute left-1 transform -translate-x-1/2 flex items-center justify-center">
            <span className="text-white text-xl">4</span>
        </div>
        <div className="flex items-center justify-center pl-10 pr-5">
            <span className="text-white text-lg">Specify the efficiency of your inverter</span>
        </div>
    </div>
</div>



    )
}

export default SolarCalculatorInfo
