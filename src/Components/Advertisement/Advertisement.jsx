import React from 'react'

export default function advertisement() {
    return (

        <div className='w-[90%] mx-auto my-12'>
            <div className='md:w-[65%] md:ml-4'>
                {/* Heading */}
                <div>
                    <h1 className=' text-[52px] font-bold mb-1 leading-tight'>Advertise</h1>
                    <p className='my-4'>Our audience age is 20-35 Year.</p>
                    <p className='my-4'>We focus on Career related content.</p>

                    <p>If you want to promote your product to our audience, you can give advertisement, Sponsored Content. </p>


                    <p className='my-4'>Our contact <a className='text-blue-700' href="mailto:contact.deshcareer@gmail.com">contact.deshcareer@gmail.com</a> and phone number <span className='font-semibold'>+8801880811047</span> </p> 
                </div>
            </div>
        </div>
    )
}
