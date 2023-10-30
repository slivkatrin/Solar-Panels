import React from 'react'
import Banner from '../Banner'
import SolarSection from '../SolarSection'
import AboutUs from '../AboutUs'
import ContentEnergyPros from '../ContentEnergyPros'
import OurProjects from '../OurProjects'

export function HomePage() {
    return (
        <div>
            <Banner />
            <SolarSection />
            <AboutUs />
            <ContentEnergyPros />
            <OurProjects />
        </div>
    )
}
