import React from 'react'
import { Link } from 'react-router-dom'
import photo1 from '../assets/photo2.jpg'

const BlogsBar = () => {

    const handleBlogs = () => {
        console.log('Blogs')
    }
    return (
        <div onClick={handleBlogs} className='h-1/4 flex justify-center items-center w-5/6 my-4 cursor-pointer hover:scale-105 duration-300 active:scale-100'>
            <img src={photo1} alt="" className='size-80 mx-5 rounded' />
            <div className='mx-5'>
                <div className='font-montserrat text-3xl font-semibold w-11/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga delectus eaque incidunt ducimus debitis quisquam voluptates</div>
                <div className='flex py-2'>
                    <p className='pr-3 '>Name </p>
                    <p className='text-black/40'>time created</p>
                </div>
                <div className='text-xl font-sans font-light text-pretty py-2 text-gray-700'>
                    Summary: <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est illum doloremque animi neque ipsum cum molestiae alias culpa explicabo aspernatur quasi, a magni vel consectetur consequatur sapiente earum quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>
    )
}

export default BlogsBar