import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-zinc-700">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a
                            href="https://flowbite.com/"
                            className="flex items-center"
                        >
                            <img
                                src={logo}
                                className="h-16 mr-3"
                                alt="GreenKraft Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                                About us
                            </h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://flowbite.com/"
                                        className="hover:underline"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindcss.com/"
                                        className="hover:underline"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                                Follow us
                            </h2>
                            <ul className="text-gray-300 font-medium">
                                <li>
                                    <a href="" className="hover:underline">
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
                        © 2023{' '}
                        <a href="buleczka.eu" className="hover:underline">
                            Designed by slivkatrin
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a
                            href="www.buleczka.eu"
                            className="text-white hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
