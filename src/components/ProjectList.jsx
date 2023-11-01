import React from 'react';
import solar from '../assets/solar_photo/solar.jpeg';
import iconGPS from '../assets/icons/map.png';
import efficiency from '../assets/icons/efficiency.png';
import time from '../assets/icons/time.png';

const ProjectList = () => {
    // Define the divs, images, symbols/icons, and their corresponding unique texts
    const divData = [
        { image: solar, texts: ['Germany, Berlin ', 'Text 1B', 'Text 1C', 'Text 1D'] },
        { image: "path_to_image2.jpg", texts: ['Text 2A', 'Test', 'Text 2C', 'Text 2D'] },
        { image: "path_to_image3.jpg", texts: ['Text 3A', 'Text 3B', 'Text 3C', 'Text 3D'] },
        { image: "path_to_image4.jpg", texts: ['Text 4A', 'Text 4B', 'Text 4C', 'Text 4D'] },
        { image: "path_to_image4.jpg", texts: ['Text 4A', 'Text 4B', 'Text 4C', 'Text 4D'] },
        { image: "path_to_image4.jpg", texts: ['Text 4A', 'Text 4B', 'Text 4C', 'Text 4D'] },
        { image: "path_to_image4.jpg", texts: ['Text 4A', 'Text 4B', 'Text 4C', 'Text 4D'] },
        { image: "path_to_image4.jpg", texts: ['Text 4A', 'Text 4B', 'Text 4C', 'Text 4D'] }
    ];

    // Define common symbols/icons
    const iconImages = [
        iconGPS,
        efficiency,
        time
    ];

    return (
        <div className="grid grid-cols-4 gap-4">
            {divData.map((divItem, divIndex) => (
                <div key={divIndex} className="flex flex-col items-center p-4 border rounded-md shadow-md">
                    <img 
                        src={divItem.image}
                        alt={`Centered Image ${divIndex + 1}`}
                        className="object-cover mb-4 rounded-sm" 
                    />

                    {iconImages.map((icon, iconIndex) => (
                        <div key={iconIndex} className="flex items-center space-x-2 mb-2">
                            <img src={icon} alt={`Icon ${iconIndex + 1}`} className="w-8 h-8" />
                            <span>{divItem.texts[iconIndex]}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProjectList;