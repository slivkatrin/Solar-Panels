import './App.css'
import Navbar from './components/Navbar'
import ContentEnergyPros from './components/ContentEnergyPros'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import OurProjects from './components/OurProjects'
import Banner from './components/Banner'
import SolarCalculator from './components/SolarCalculator'
import SolarCalculatorInfo from './components/SolarCalculatorInfo'
import SolarSection from './components/SolarSection'

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
            <SolarSection />
            <AboutUs />
            <ContentEnergyPros />
            <OurProjects />
            <Footer />
        </div>
    )
}

export default App
