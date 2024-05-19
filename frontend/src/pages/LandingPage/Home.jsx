import React from 'react'
import BlogName from '../../components/BlogName'
import videoBackground from '../../assets/backgroundVideo.mp4'

const Home = () => {
    return (
        <div className='relative h-screen w-full text-lg -z-10'>
            <video src={videoBackground} autoPlay muted loop className='h-full w-full object-cover -z-20 relative'>
            </video>
            <BlogName />
            <p className='absolute top-1/2 w-1/3 left-1/3 z-20 text-white text-center text-xl'>"Unveil your stories and insights, connect with readers, and inspire others through an elegant digital experience."</p>
        </div>
    )
}

export default Home