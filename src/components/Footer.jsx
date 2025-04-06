import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className="mt-4 text-gray-400 ">
                    Building dreams one brick at a time. Our mission is to provide
                    exceptional service and deliver timeless spaces that feel like home.
                    Thank you for trusting us to be part of your journey.
                </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                            <a className='hover:text-white' href='#Header'>Home</a>
                            <a className='hover:text-white' href='#About'>About Us</a>
                            <a className='hover:text-white' href='#Contact'>Contact</a>
                            <a className='hover:text-white' href='#'>Privacy Policy</a>
                    </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent tp your inbox weekly</p>
    <div className='flex gap-2'>
            <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-non e w-full md:w-auto ' type='email' placeholder='Enter you email'/>
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
    </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 text-center text-gray-500 mt-10'>
           CopyRight &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
        </div>
    </div>
);
}

export default Footer