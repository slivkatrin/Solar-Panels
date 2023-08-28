import React from 'react'
const SolarCalculatorInfo = () => {
    return (
        <div className="w-full py-16 px-20">
            
            <p>Our Solar Energy Calculator is a powerful tool that allows you to estimate the potential benefits of switching to solar energy for your home or business. By inputting key details about your location and energy consumption, you can gain valuable insights into how solar panels can impact your energy production, cost savings, and environmental footprint.</p>
            


            <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                <span className="font-semibold">Energy Production:</span> Our calculator estimates the amount of energy your solar panels can generate on a monthly basis, based on the available sunlight and system efficiency.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Cost Savings:</span> Discover the potential savings on your electricity bill by utilizing solar energy to power your home or business.
              </li>
              <li>
                <span className="font-semibold">Environmental Impact:</span> By transitioning to clean and renewable solar energy, you contribute to reducing your carbon footprint and promoting a more sustainable future.
              </li>
            </ul>
          </div>
          </div>
    )
}

export default SolarCalculatorInfo;