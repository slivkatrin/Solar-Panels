import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '../../components/pages/HomePage'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ProjectPage from '../../components/pages/ProjectPage'

export function Routing() {
    return (
        <Router>
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/newpage" element={<ProjectPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}
