import React from 'react'
import Navbar from '../components/Navbar'
import pageNotFound from '../assets/pageNotFound.mp4'
import Contact from '../pages/Contact'

const NotFoundPage = () => {
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center flex-col bg-gradient-to-b via-red-100 from-white to-white'>
                <video src={pageNotFound} autoPlay loop muted className='h-1/2 object-cover w-1/2 border-0 outline-none mb-5'></video>
                <h1 className='text-3xl font-bold font-montserrat bg-gradient-to-r from-red-700 via-red-300 to-red-700 bg-clip-text text-transparent'>
                    -- 404 PAGE NOT FOUND --
                </h1>
                <p className='text-montserrat text-lg font-medium bg-gradient-to-r from-red-700 via-red-300 to-red-700 bg-clip-text text-transparent'>Are Best Minds are at work!!</p>
            </div >
            <Contact />
        </>
    )
}

export default NotFoundPage