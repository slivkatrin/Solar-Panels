
import './App.css';
import Navbar from './components/Navbar';
import ContentEnergyPros from './components/ContentEnergyPros';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import OurProjects from './components/OurProjects';
import Banner from './components/Banner';


function App() {
  return (
    <div>
    <Navbar />
    <div className="pt-20"> {/* Add padding to the top of the main content */}
        {/* Your main content here */}
      </div>
    <Banner />
    <AboutUs />
    <ContentEnergyPros />
    <OurProjects />
    <Footer />
    </div >

  )
}

export default App;
