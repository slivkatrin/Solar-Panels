import React from 'react'
import { useState } from 'react'
import solar from '../assets/solar_photo/solar.jpeg'
import solar1 from '../assets/solar_photo/solar1.jpeg'
import solar2 from '../assets/solar_photo/solar2.jpeg'
import solar3 from '../assets/solar_photo/solar3.jpeg'
import iconGPS from '../assets/icons/map.png'
import efficiency from '../assets/icons/efficiency.png'
import time from '../assets/icons/time.png'

const ProjectList = () => {
    // Define the divs, images, symbols/icons, and their corresponding unique texts
    const divData = [
        
            {
                image: solar3,
                texts: ['Germany, Berlin', 'Text 1B', '1 day'],
            },
            {
                image: solar1,
                texts: ['Austria, Vienna', 'Test', '2 days'],
            },
            {
                image: solar2,
                texts: ['Germany, Hamburg', 'Text 3B', '3 days'],
            },
            {
                image: solar3,
                texts: ['Austria, Salzburg', 'Text 4B', '4 days'],
            },
            {
                image: solar1,
                texts: ['Germany, Munich', 'Test', '1 day'],
            },
            {
                image: solar2,
                texts: ['Austria, Graz', 'Text 3B', '2 days'],
            },
            {
                image: solar3,
                texts: ['Germany, Frankfurt', 'Text 4B', '3 days'],
            },
            
    ]

    // Define common symbols/icons
    const iconImages = [iconGPS, efficiency, time]

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    // Calculate total pages
    const totalPages = Math.ceil(divData.length / itemsPerPage)

    // Get only the items for the current page
    const currentItems = divData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <div>
            <div className="flex flex-col justify-center items-center pb-8">
                <p className="text-accentColorGreen font-normal md:text-1xl sm:text-1xl text-1xl">
                    OUR ASSEMBLY
                </p>

                <h1 className="text-[#555555] md:text-5xl  sm:text-3xl text-2xl font-bold py-2">
                    Solar panels assembly
                </h1>
            </div>
            {/* ... existing header code ... */}
            <div className="grid grid-cols-3 gap-4">
                {currentItems.map((divItem, divIndex) => (
                    <div
                        key={divIndex}
                        className="flex flex-col items-left p-4 border rounded-md shadow-md m-3"
                    >
                        <img
                            src={divItem.image}
                            alt={`Centered Image ${divIndex + 1}`}
                            className="object-cover mb-4 rounded-sm"
                        />
                        {iconImages.map((icon, iconIndex) => (
                            <div
                                key={iconIndex}
                                className="flex items-center space-x-2 mb-2"
                            >
                                <img
                                    src={icon}
                                    alt={`Icon ${iconIndex + 1}`}
                                    className="w-8 h-8"
                                />
                                 {/*only the first text in array will be bold*/}
                                <span
                                    className={
                                        iconIndex === 0 ? 'font-bold' : ''
                                    }
                                >
                                    {divItem.texts[iconIndex]}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-md"
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page + 1)}
                        className={`px-4 py-2 border rounded-md ${
                            currentPage === page + 1
                                ? 'bg-blue-500 text-white'
                                : ''
                        }`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    )
}
<div> Icons made by <a href="https://www.flaticon.com/authors/hqrloveq" title="hqrloveq"> hqrloveq </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

export default ProjectList
