import React from 'react'
import Card from '../../components/Card'
import background from '../../assets/background.png'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'

const AboutUs = () => {
    return (
        <div className=' h-screen w-full flex flex-col justify-evenly '>
            <h1 className='text-center text-5xl font-montserrat font-semibold tracking-wider text-gray-800'>ABOUT US</h1>
            <div className=" relative mt-16 grid grid-flow-col">
                <Card
                    name="Inspiring"
                    description="Thoughts Flow is designed to inspire creativity and self-expression. By sharing your unique stories and perspectives, you contribute to a vibrant community that values originality and passion. Discover endless inspiration from fellow writers and let their experiences fuel your own creativity."
                    photo={background}

                />
                <Card
                    name="Sharing"
                    description="Our platform emphasizes the importance of sharing. Writers can publish their work, receive constructive feedback, and engage in meaningful discussions. This open exchange of ideas fosters growth and improvement, making it easier for you to hone your craft and reach a wider audience."
                    photo={photo2}

                />
                <Card
                    name="Connecting"
                    description="Connecting with like-minded individuals is at the heart of Thoughts Flow. Build relationships with other writers, collaborate on projects, and form supportive networks. This sense of community helps you feel valued and supported, making your writing journey more fulfilling and enjoyable."
                    photo={photo3}

                />
            </div>
        </div>
    )
}

export default AboutUs