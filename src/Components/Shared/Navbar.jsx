import React from 'react'
import Logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomComonents/CustomLink';


export default function Navbar() {
    return (
        <div>



            <nav class="py-5 bg-white shadow-md border-gray-200 dark:bg-gray-900">
                <div class="w-[90%] flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-0 md:p-4">
                    <CustomLink to="/" class="flex items-center">
                        <div className='w-[195px] h-[83px] mr-[2px]'>
                            <img className='w-full h-full' src={Logo} alt='' />
                        </div>
                    </CustomLink>
                    <button id="mega-menu-full-cta-button" data-collapse-toggle="mega-menu-full-cta" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div id="mega-menu-full-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-4  md:mt-0">
                            <li className='px-1 py-2'>
                                <CustomLink to="/" class="flex font-bold py-2 md:pl-1 pl-3 text-md pr-1 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home

                                </CustomLink>
                            </li>
                            <li className='px-1 py-2'>
                                <CustomLink to="/privacy/policy" class="block py-2 font-bold text-md pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Privacy Policy</CustomLink>
                            </li>
                            <li className='px-1 py-2'>
                                <CustomLink to="/terms/condition" class="flex py-2 pl-2 font-bold text-md pr-2 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Terms Conditions

                                </CustomLink>
                            </li>
                            <li className='px-1 py-2'>
                                <CustomLink to="/about/us" class="flex font-bold py-2 pl-2 text-md pr-2 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">About Us

                                </CustomLink>
                            </li>
                            <li className='px-1 py-2'>
                                <CustomLink to="/contact/us" class=" font-bold block py-2 pl-2 text-md pr-2 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</CustomLink>
                            </li>
                            <li className='px-1 py-2'>
                                <CustomLink to="/advertisement" class="block font-bold py-2 pl-2 text-md pr-2 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Advertise</CustomLink>
                            </li>
                            <li className='bg-red-600 border-0 rounded hover:bg-red-700 hover:border-white px-3 pt-1.5 pb-2 '>
                                <Link to="/ " class="block pl-2 text-md bg-red-600 text-white font-normal text-[17px] md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Join Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}






<div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">

</div>
