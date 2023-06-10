import React from 'react'

export default function Home() {
  return (
    <div className='w-[90%] mx-auto my-12'>
      <div className='md:w-[65%] md:ml-4'>
        <h1 className=' md:text-[52px] text-[42px] font-bold mb-1 leading-tight'>Get Smarter about your <br className='md:block hidden' /> career</h1>
        <h6 className='text-[16px]'>Get the <span className='font-bold'>5-minute newsletter</span> keeping about smart career</h6>

        {/* Email field */}
        <div className='mt-7'>
        <form>
          <label for="email" class="mb-2 text-md font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
          <div class="relative">
            <div class="absolute inset-y-0 mr-5 left-0 flex items-center pl-3 pointer-events-none ml-1 md:ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            </div>
            <input type="email" id="email" class="block w-full leading-9 p-4 text-md md:pl-16 pl-12 text-sm text-gray-900 border-1 border-gray-200 shadow-md rounded-lg bg-gray-50 focus:ring-0 focus:border-none focus:shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email address" required />
            <button type="submit" class="text-white w-22 md:w-52 h-12 absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-600 focus:ring-0 focus:outline-none focus:ring-0 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Free</button>
          </div>
        </form>
        </div>

        {/* paragraph */}
        <div className='mt-6'>
        <p className='text-[16px] leading-loose'>We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}
