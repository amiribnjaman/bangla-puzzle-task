import React from 'react'
import LogoPipe from '../../Assets/Images/logo-pipe.png'

export default function Navbar() {
    return (
        <div>

            <nav class="py-5 bg-[#115C8F] border-gray-200 dark:bg-gray-900">
                <div class="w-[97%] flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                    <a href="https://flowbite.com" class="flex items-center">
                        <div className='w-[25px] h-[55px] mr-[2px]'>
                        <img className='w-full h-full' src={LogoPipe} alt='' />
                        </div>
                        <h3 className='text-[19px] pr-2 text-white font-bold'>
                            Anjir <br />Litton </h3>
                        <span class="self-center text-[13px] tracking-wider text-white font-semibold whitespace-nowrap dark:text-white">Children's <br /> Writter</span>
                    </a>

                    <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-0  md:mt-0">
                            <li className='flex py-1 px-2'>
                                <a href="#" class="flex py-2 pl-1 text-lg pr-1 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#15E0FB] md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">About Anjir
                                <svg aria-hidden="true" class="w-7 h-7 ml-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <div id="mega-menu-icons-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                        <ul class="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                                            <li>
                                                <a href="#" class="flex items-center text-gray-500 dark:text-gray-400 hover:text-[#15E0FB] dark:hover:text-blue-500 group">
                                                    <span class="sr-only">About us</span>
                                                    <svg class="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-[#15E0FB] dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="flex items-center text-white dark:text-gray-400 hover:text-[#15E0FB] dark:hover:text-blue-500 group">
                                                    <span class="sr-only">Library</span>
                                                    <svg class="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-[#15E0FB] dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    Library
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                            <li className='py-1 px-2'>
                            <a href="#" class="block py-2 pl-3 text-lg pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#15E0FB] md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Events</a>
                                    
                                    
                            </li>
                            <li className='py-1 px-2'>
                                <a href="#" class="block py-2 text-lg pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#15E0FB] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">News</a>
                            </li>
                            <li className='flex py-1 px-2'>
                                <a href="#" class="flex py-2 pl-2 text-lg pr-2 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#15E0FB] md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Media
                                <svg aria-hidden="true" class="w-7 h-7 ml-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <div id="mega-menu-icons-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                        <ul class="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                                            <li>
                                                <a href="#" class="flex items-center text-gray-500 dark:text-gray-400 hover:text-[#15E0FB] dark:hover:text-blue-500 group">
                                                    <span class="sr-only">About us</span>
                                                    <svg class="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-[#15E0FB] dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="flex items-center text-white dark:text-gray-400 hover:text-[#15E0FB] dark:hover:text-blue-500 group">
                                                    <span class="sr-only">Library</span>
                                                    <svg class="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-[#15E0FB] dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    Library
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                            <li className='flex py-1 px-2'>
                                <a href="#" class="flex py-2 pl-2 text-lg pr-2 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#15E0FB] md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Gallary
                                <svg aria-hidden="true" class="w-7 h-7 ml-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <div id="mega-menu-icons-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                        <ul class="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                                            <li>
                                                <a href="#" class="flex items-center text-gray-500 dark:text-gray-400 hover:text-[#15E0FB] dark:hover:text-blue-500 group">
                                                    <span class="sr-only">About us</span>
                                                    <svg class="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-[#15E0FB] dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="flex items-center text-white dark:text-gray-400 hover:text-[#15E0FB] dark:hover:text-blue-500 group">
                                                    <span class="sr-only">Library</span>
                                                    <svg class="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-[#15E0FB] dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    Library
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                            <li className='py-1 px-2'>
                                <a href="#" class="block py-2 pl-2 text-lg pr-2 text-white border-b border-gray-100 text-lg hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#15E0FB] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Publication</a>
                            </li>
                            <li className=' border-2 py-1 px-2 hover:bg-white hover:border-white'>
                                <a href="#" class="block pl-2 text-lg pr-2 pr-4 text-white border-gray-100 hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
