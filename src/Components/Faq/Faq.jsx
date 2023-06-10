import React from 'react'

export default function Faq() {
    return (

        <div className='w-[90%] mx-auto my-12'>
            <div className='md:w-[65%] md:ml-4'>
                {/* Heading */}
                <div>
                    <h1 className=' text-[52px] font-bold mb-1 leading-tight'>FAQ's</h1>
                    <h3 className='text-3xl '>How can i subsribe Desh Career Email?</h3>
                    <p className='mb-4'>
                    You can subscribe this newsletter from . You input you email, then follow instruction. After email confirmation, your email address is added in our database. </p>

                    <h3 className='text-3xl'>I am a subscriber of Desh Career, but I don't find your email. Why?</h3>
                    <p className='mb-4'>Please check your email. May be our email goes to Promotion tab. If you find our email in this tab, please move it to primary tab. Than you will find this email in primary tab. </p>
                </div>
            </div>
        </div>
    )
}
