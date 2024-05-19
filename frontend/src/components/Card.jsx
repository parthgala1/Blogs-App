import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Card = (props) => {
    return (
        <div className='w-full flex items-center justify-center py-10 rounded-xl'>
            <div className='group h-[28rem] w-96 [perspective:1000px]'>
                <div className='absolute bg-gradient-to-r from-red-200 via-white to-red-700 -rotate-12 inset-1 rounded-xl'></div>
                <div className='relative rounded-xl size-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] '>
                    <div className='absolute inset-0'>
                        <img className='size-full rounded-xl shadow-black/40 object-cover' src={props.photo} alt="/" />
                    </div>
                    <div className='absolute inset-0 size-full bg-black/90 rounded-xl px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] '>
                        <div className='size-full flex flex-col items-center justify-evenly text-white'>
                            <h1 className='text-5xl font-audiowise bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent my-2 uppercase'>{props.name}</h1>
                            <p className=' line-clamp-5 font-montserrat text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aspernatur commodi repellendus architecto quasi facilis, tempore maiores blanditiis illum tempora beatae, perspiciatis voluptatibus consequatur, quod quae veritatis dolorum! Delectus, tenetur?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card