import React from 'react'
import BlogName from '../../components/BlogName'
import videoBackground from '../../assets/backgroundVideo.mp4'

const Home = () => {
    return (
        <div className='relative h-screen w-full text-lg -z-10'>
            <video src={videoBackground} autoPlay muted loop className='h-full w-full object-cover -z-20 relative'>
            </video>
            <BlogName />
        </div>
    )
}

export default Home