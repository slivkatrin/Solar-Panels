import React, { useState, useEffect } from 'react'
import solarImg from '../assets/solar1.jpg'
import solarImg1 from '../assets/solar2.jpg'
import solarImg2 from '../assets/solar3.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

function OurProjects() {
    const slides = [
        {
            url: solarImg,
        },
        {
            url: solarImg1,
        },
        {
            url: solarImg2,
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(1)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    // Automatically switch slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000)
        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval)
    }, [currentIndex]) 
    return (
        <div className="w-full py-6 px-4">
            
            {/* TODO: create color palette */}
            <h1 className="text-[#555555] md:text-5xl sm:text-3xl text-2xl font-bold py-2 mx-auto text-center">
                OUR PROJECTS
            </h1>

            <div className="max-w-[1340px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center md:ml-8 ">
                    <p className="text-[#a1d322] font-normal md:text-1xl sm:text-1xl text-1xl">
                        KNOW US BETTER
                    </p>

                    <h1 className="text-[#555555] md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-left ">
                        Our assembly
                    </h1>
                    <p>
                        Green Kraft is a company based in Poland and Germany,
                        specializing in solar panel installations. We offer
                        innovative and environmentally-friendly energy solutions
                        for residential and commercial buildings, helping our
                        clients reduce their environmental impact and lower
                        energy costs. Our priority in business is sustainable
                        development and ecology.
                        <br /> <br />
                        We deliver high-quality and personalized solar energy
                        solutions that cater to the specific needs of our
                        customers. Our expertise enables us to provide effective
                        and reliable services. At Green Kraft, we are committed
                        to an ecological future.{' '}
                    </p>
                    <button className="bg-[#a1d322] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">
                        Learn more
                    </button>
                </div>

                <div className="max-w-[840px] h-[580px] w-full m-auto py-16 px-4 relative group">
                    <div
                        style={{
                            backgroundImage: `url(${slides[currentIndex].url})`,
                        }}
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                    ></div>

                    {/* left arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* right arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className="flex top-4 justify-center py-2">
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className="text-2xl cursor-pointer"
                            >
                                {currentIndex === slideIndex ? (
                                    <RxDotFilled color="#a1d322" />
                                ) : (
                                    <RxDotFilled />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProjects
