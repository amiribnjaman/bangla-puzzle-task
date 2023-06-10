import React from 'react'
import NotFoundImg from '../../Assets/Images/404.gif'

export default function NotFound() {
    return (

        <div className='w-[90%] mx-auto my-20'>
            <div className='w-full md:ml-4'>
                {/* Heading */}
                <div className='w-[240px] h-[120px] mx-auto'>
                 <img className='w-full' src={NotFoundImg} alt="" />
                </div>
            </div>
        </div>
    )
}
