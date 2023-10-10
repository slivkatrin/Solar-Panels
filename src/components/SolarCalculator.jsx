import React, { useState } from 'react';

const SolarCalculator = () => {
  const [roofSize, setRoofSize] = useState('');
  const [monthlyElectricityBill, setMonthlyElectricityBill] = useState('');
  const [panelEfficiency, setPanelEfficiency] = useState(0.18);
  const [inverterEfficiency, setInverterEfficiency] = useState(0.95);
  const [energyProduction, setEnergyProduction] = useState(null);

  const AVERAGE_IRRADIANCE = 5.5; // kWh/m²/day
  const ELECTRICITY_COST = 0.15; // USD/kWh

  const calculateEnergyProduction = () => {
    if (roofSize) {
      return (
        (roofSize *
          AVERAGE_IRRADIANCE *
          panelEfficiency *
          inverterEfficiency *
          30) /
        1000
      );
    }
    return 0;
  };

  const calculateCostSavings = () => {
    if (energyProduction) {
      return energyProduction * ELECTRICITY_COST * 30; // Monthly cost savings
    }
    return 0;
  };

  const handleCalculate = () => {
    const calculatedEnergyProduction = calculateEnergyProduction();
    setEnergyProduction(calculatedEnergyProduction);
  };

  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Solar Energy Calculator</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Roof Size (m²)</label>
        <input
          type="number"
          value={roofSize}
          onChange={(e) => setRoofSize(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Monthly Electricity Bill (EUR)
        </label>
        <input
          type="number"
          value={monthlyElectricityBill}
          onChange={(e) => setMonthlyElectricityBill(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Panel Efficiency</label>
        <input
          type="number"
          value={panelEfficiency}
          onChange={(e) => setPanelEfficiency(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Inverter Efficiency</label>
        <input
          type="number"
          value={inverterEfficiency}
          onChange={(e) => setInverterEfficiency(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Calculate
      </button>
      {energyProduction !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Results:</h3>
          <p>Energy Production: {energyProduction.toFixed(2)} kWh</p>
        </div>
      )}
    </div>
  );
};

export default SolarCalculator;

