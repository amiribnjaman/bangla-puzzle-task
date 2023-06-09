import React from 'react'
import Logo from '../../Assets/Images/logo.png'

export default function Navbar() {
    return (
        <div>

            <nav class="py-5 bg-white shadow-md border-gray-200 dark:bg-gray-900">
                <div class="w-[90%] flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                    <a href="#" class="flex items-center">
                        <div className='w-[195px] h-[83px] mr-[2px]'>
                        <img className='w-full h-full' src={Logo} alt='' />
                        </div>
                    </a>

                    <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-4  md:mt-0">
                            <li className='px-1 py-2'>
                                <a href="#" class="flex font-bold py-2 pl-1 text-md pr-1 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home
                                
                                </a>
                            </li>
                            <li className='px-1 py-2'>
                                <a href="#" class="block py-2 font-bold text-md pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Privacy Policy</a>
                            </li>
                            <li className='px-1 py-2'>
                                <a href="#" class="flex py-2 pl-2 font-bold text-md pr-2 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Terms Conditions
                                
                                </a>
                            </li>
                            <li className='px-1 py-2'>
                                <a href="#" class="flex font-bold py-2 pl-2 text-md pr-2 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">About Us
                                
                                </a>
                            </li>
                            <li className='px-1 py-2'>
                                <a href="#" class=" font-bold block py-2 pl-2 text-md pr-2 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                            </li>
                            <li className='px-1 py-2'>
                                <a href="#" class="block font-bold py-2 pl-2 text-md pr-2 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Advertise</a>
                            </li>
                            <li className='bg-red-600 border-0 rounded hover:bg-white hover:border-white px-3 pt-1.5 pb-2 '>
                                <a href="#" class="block pl-2 text-md bg-red-600 text-white font-normal text-[17px] hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Join Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
