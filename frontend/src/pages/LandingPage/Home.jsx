import React from 'react'
import BlogName from '../../components/BlogName'
import videoBackground from '../../assets/backgroundVideo.mp4'

const Home = () => {
    return (
        <div className='relative h-screen w-full text-lg'>
            <video src={videoBackground} autoPlay muted loop className='h-5/6 w-full object-cover -z-20 relative'>
            </video>
            <BlogName />
        </div>
    )
}

export default Home