import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Your imports
import './App.css'
import Navbar from './components/Navbar'
import ContentEnergyPros from './components/ContentEnergyPros'
import AboutUs from './components/homePage/AboutUs'
import Footer from './components/Footer'
import OurProjects from './components/OurProjects'
import Banner from './components/Banner'
import SolarSection from './components/SolarSection'
import ProjectPage from './components/pages/ProjectPage'; // Assuming the path for the new page component


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="pt-20">
                    {' '}
                    {/* Add padding to the top of the main content */}
                    <Switch>
                        {' '}
                        {/* The Switch ensures that only one route is rendered at a time */}
                        <Route exact path="/">
                            <Banner />
                            <SolarSection />
                            <AboutUs />
                            <ContentEnergyPros />
                            <OurProjects />
                        </Route>

                        <Route path="/newpage">
                            <ProjectPage />
                        </Route>

                        {/* If you want to add more routes, do it like this: */}
                        {/* 
                        <Route path="/about">
                            <AboutPageComponent />
                        </Route>
                        <Route path="/contact">
                            <ContactPageComponent />
                        </Route>
                        */}
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
