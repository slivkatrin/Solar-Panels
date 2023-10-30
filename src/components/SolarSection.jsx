import React, { useState, useRef, useEffect } from 'react'
import SolarCalculatorInfo from './SolarCalculatorInfo'
import SolarCalculator from './SolarCalculator'
import styles from '../feature/styles/AnimationStyle.module.css'

const SolarSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    const animatedClass = isVisible ? styles['slide-up-enter'] : ''

    return (
        <div className="flex flex-col justify-center min-h-screen relative bg-gradient-to-r from-fadedLeft to-fadedRight">
            <div className="py-8 md:py-20 z-10">
                <p className="text-[#f5f8f5] font-normal text-xl md:text-2xl text-center">
                    LET'S CALCULATE
                </p>
                <h1 className="text-[#555555] text-2xl sm:text-3xl md:text-5xl font-bold py-2 text-center">
                    Solar Energy Calculator
                </h1>
            </div>

            <div ref={ref}>
                <div
                    className={`flex flex-col md:flex-row flex-wrap justify-center items-center px-2 md:px-8 lg:px-16 z-10 mb-8 md:mb-20 ${animatedClass}`}
                >
                    <div
                        className={`w-full md:w-1/3 p-2 md:p-4 mb-4 md:mb-0 mr-0 md:mr-4 lg:mr-8 ${animatedClass}`}
                    >
                        <SolarCalculatorInfo />
                    </div>
                    <div
                        className={`w-full md:w-1/3 p-2 md:p-4 ${animatedClass}`}
                    >
                        <SolarCalculator />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolarSection
