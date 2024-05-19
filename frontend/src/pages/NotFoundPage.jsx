import React from 'react'
import Navbar from '../components/Navbar'

const NotFoundPage = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen w-full flex-center bg-blue-300'>
                <h1 className='text-3xl font-bold font-audiowise bg-gradient-to-r from-info-purple-1 via-black to-info-purple-2 bg-clip-text text-transparent'>
                    404 PAGE NOT FOUND
                </h1>
            </div>
        </>
    )
}

export default NotFoundPage