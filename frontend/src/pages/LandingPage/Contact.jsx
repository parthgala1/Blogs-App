import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div id='contact' className='flex flex-col justify-center items-center h-auto py-28 bg-red-300'>
            <div className='w-4/5 grid grid-flow-col ' >
                <div className="flex flex-col justify-center items-center m-10">
                    {/* <img src={logoWhite} className='size-32 my-10' alt="" /> */}
                    <div className='text-white text-center  m-4'>
                        <p className='text-white'>Email:</p>
                        <a href="mailto:thoughtsflow@gmail.com">thoughtsflow@gmail.com</a>
                    </div>
                    <div className='flex justify-center items-center m-2'>
                        <a href="https://www.facebook.com/thoughtsflow/" target='_blank'>
                            <FaFacebookSquare className='h-10 w-10 m-3 text-white hover:cursor-pointer hover:scale-105' />
                        </a>
                        <a href="https://wa.me/thoughtsflow" target='_blank'>
                            <FaSquareWhatsapp className='h-10 w-10 m-3 text-white hover:cursor-pointer hover:scale-105' />
                        </a>
                        <a href="" target='_blank'>
                            <FaInstagramSquare className='h-10 w-10 m-3 text-white hover:cursor-pointer hover:scale-105' />
                        </a>
                        <a href="https://www.youtube.com/" target='_blank'>
                            <FaYoutube className='h-10 w-10 m-3 text-white hover:cursor-pointer hover:scale-105' />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col text-white items-center m-10 font-[Fira Code] ">
                    <div className='flex w-full px-32 justify-between items-center'>
                        <div className='flex flex-col text-center'>
                            <a href='#home' className='text-lg decoration-none px-5'>
                                Home
                            </a>
                            <a href='#who-we-are' className='decoration-none px-5'>
                                Who We Are
                            </a>
                            <a href='#what-we-do' className='decoration-none px-5'>
                                What We Offer
                            </a>
                            <a href='#details' className='decoration-none px-5'>
                                Members
                            </a>
                            <a href='#contact' className='decoration-none px-5'>
                                Contact Us
                            </a>
                        </div>
                        <div className='flex flex-col text-center' >
                        </div>
                    </div>
                </div>
                <div className='my-10 text-white text-md w-4/5 text-center'>
                    Welcome to Thoughts Flow, where creativity meets connection. Our platform empowers writers to share their unique stories and insights with a global audience. Whether you're a seasoned blogger or just starting out, you'll find a supportive community eager to read, engage, and be inspired by your words. Join us and transform your ideas into impactful narratives.
                </div>
            </div>
            <hr className=' w-4/5 m-10' />
            <div className='mx-7 text-white'>
                Copyright © 2024 · This Website is made by Parth Gala.
            </div>
        </div >
    )
}

export default Contact