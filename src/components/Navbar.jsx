import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { LinkElement } from './Link'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="w-full flex justify-between fixed top-0 left-0 bg-white shadow-xl items-center h-20 z-50 mx-auto px-4 text-grey mb-10">
            <img className="h-12 m-1" src={logo} alt="" />
            <ul className="hidden md:flex">
                <LinkElement path={'/'} content={'Home'} />
                <LinkElement path={'/newpage'} content={'Projects'} />
                <li className="p-4">Service</li>
                <li className="p-4">Contact</li>
                <button className="m-2">EN</button>
            </ul>
            <div onClick={handleNav} className="block md:hidden cursor-pointer">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <div
                className={`${
                    nav
                        ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-100 bg-white ease-in-out duration-500'
                        : 'fixed left-[-100%]'
                }`}
            >
                <h1 className="w-full text-3xl font-bold text-accentColorGreen m-4">
                    Menu
                </h1>
                <ul className="pt-4 uppercase bb">
                    <li className="p-4 border-b border-gray-200">Home</li>
                    <li className="p-4 border-b border-gray-200">Projects</li>
                    <li className="p-4 border-b border-gray-200">Service</li>
                    <li className="p-4 border-b border-gray-200">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
