import './App.css'
import Navbar from './components/Navbar'
import ContentEnergyPros from './components/ContentEnergyPros'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import OurProjects from './components/OurProjects'
import Banner from './components/Banner'
import SolarCalculator from './components/SolarCalculator'
import SolarCalculatorInfo from './components/SolarCalculatorInfo'

function App() {
    return (
        <div>
            <Navbar />
            <div className="pt-20">
                {' '}
                {/* Add padding to the top of the main content */}
                {/* Your main content here */}
            </div>
            <Banner />
            <div className='bg-gray-300'>
            <div className="py-20 ">
                <p className="text-[#a1d322] font-normal md:text-1xl sm:text-1xl text-center text-1xl">
                    LET'S CALCULATE
                </p>
                <h1 className="text-[#555555] md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-center">
                    Solar Energy Calculator
                </h1>
            </div>
            <div className="flex flex-wrap justify-center items-center ">
                <div className="w-full md:w-2/3 p-4 bg-gray-200">
                    <SolarCalculatorInfo />
                </div>
                <div style={{ width: '400px' }} className="p-4 ">
                    <SolarCalculator />
                </div>
            </div>
            </div>
            <AboutUs />
            <ContentEnergyPros />
            <OurProjects />
            <Footer />
        </div>
    )
}

export default App
