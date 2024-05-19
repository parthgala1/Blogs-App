import React from 'react'
import Card from '../../components/Card'
import background from '../../assets/background.png'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'

const AboutUs = () => {
    return (
        <div className=' h-screen w-full flex flex-col justify-evenly '>
            <h1 className='text-center text-5xl font-montserrat font-semibold tracking-wider text-gray-800 bg-clip-text text-transparent '>ABOUT US</h1>
            <div className=" relative mt-16 grid grid-flow-col">
                <Card
                    name="Inspiring"
                    // title="Secretary"
                    photo={background}

                />
                <Card
                    name="Sharing"
                    // title="Secretary"
                    photo={photo2}

                />
                <Card
                    name="Connecting"
                    // title="Secretary"
                    photo={photo3}

                />
            </div>
        </div>
    )
}

export default AboutUs