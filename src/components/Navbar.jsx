import React from 'react';
import logo from '../assets/logo.png';
const Navbar = () => {

    return(

        <div className='w-full flex justify-between fixed top-0 left-0 bg-white shadow-xl items-center h-20  z-10 mx-auto px-4 text-grey'>
           
           <img className='h-12 m-1 ' src={logo} alt='' />
            <ul className='flex'>  
                <li className='p-4'>Home</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Service</li>
                <li className='p-4'>Contact</li>
                <button className='m-2'>EN</button>
            </ul>
            
        </div>
    )
};

export default Navbar;