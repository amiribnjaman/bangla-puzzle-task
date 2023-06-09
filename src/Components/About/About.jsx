import React from 'react'

export default function About() {
    return (

        <div className='w-[90%] mx-auto my-12'>
            <div className='md:w-[65%] md:ml-4'>
                {/* Heading */}
                <div>
                    <h1 className=' text-[52px] font-bold mb-1 leading-tight'>About Us</h1>
                    <h6 className='my-4'>Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. </h6>
                    <p>We focus on Career trend, news, smart job etc. </p>
                    <p className='my-4'>
                        If you want to contact us: you can send an email to <a className='text-blue-700' href="mailto:contact.deshcareer@gmail.com">contact.deshcareer@gmail.com</a> </p>

                    <p>If you want to meet with us, you can come to our office based on an appointment. </p>
                    <h5 className='font-semibold text-md mt-5 mb-2'>Our Office address:</h5>
                    <ul>
                        <li>House: 13/3,</li>
                        <li>Road: 2,</li>
                        <li>Shyamoly, Dhaka-1207</li>
                        <li>Mobile: <span className='font-semibold'>+8801880811047</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
