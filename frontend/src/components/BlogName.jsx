import React from 'react'
import Navbar from './Navbar'

const BlogName = () => {
    return (
        <div className='h-full min-h-96 '>
            <Navbar />
            <div className='flex-center h-5/6'>
                <div className='relative h-1/2 w-1/2 flex-center bg-white rounded-[10l0px] p-10 '>
                    <p className='absolute top-50% left-5 text-border -rotate-12 text-[300px] leading-normal text-purple-300/40 font-audiowise font-thin'>B</p>
                    <p className='absolute top-50% left-[14rem] text-border rotate-12 text-[300px] leading-normal text-purple-300/40 font-audiowise font-thin'>L</p>
                    <p className='absolute top-50% left-[19rem] text-border -rotate-45 text-[300px] leading-normal text-purple-300/40 font-audiowise font-thin'>O</p>
                    <p className='absolute top-50% left-[28rem] text-border rotate-12 text-[300px] leading-normal text-purple-300/40 font-audiowise font-thin'>G</p>
                    <p className='absolute top-50% left-[37rem] text-border -rotate-12 text-[300px] leading-normal text-purple-300/40 font-audiowise font-thin'>S</p>
                </div>
            </div>
        </div>
    )
}

export default BlogName