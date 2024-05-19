import React from 'react'
import Navbar from './Navbar'

const BlogName = () => {
    return (
        <div className=' absolute top-0 h-full w-full min-h-96 z-20'>
            <div className='flex-center h-5/6'>
                <div className='relative h-1/4 w-1/4 flex-center  hover:rounded-xl p-10 duration-300'>
                    <p className='absolute top-50% left-1 text-border -rotate-12 duration-300 text-9xl leading-normal text-white font-audiowise font-thin'>B</p>
                    <p className='absolute top-50% left-24 text-border rotate-12  duration-300 text-9xl leading-normal text-white font-audiowise font-thin'>L</p>
                    <p className='absolute top-50% left-[9rem] text-border -rotate-45 duration-300 text-9xl leading-normal text-white font-audiowise font-thin'>O</p>
                    <p className='absolute top-50% left-[15rem] text-border rotate-12  duration-300 text-9xl leading-normal text-white font-audiowise font-thin'>G</p>
                    <p className='absolute top-50% left-[20rem] text-border -rotate-12 duration-300 text-9xl leading-normal text-white font-audiowise font-thin'>S</p>
                </div>
            </div>
            <div className='absolute top-0 h-full w-full bg-black/40 -z-10'></div>

        </div>
    )
}

export default BlogName