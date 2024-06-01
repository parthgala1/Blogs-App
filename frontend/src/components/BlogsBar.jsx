import React from 'react'
import { useNavigate } from 'react-router-dom'
import photo1 from '../assets/photo2.jpg'

const BlogsBar = ({ props }) => {
    const navigate = useNavigate()

    console.log(props[0]._id);
    const inputString = props[0].createdAt;
    const date = new Date(inputString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    // console.log(formattedDate); // Output: 25-05-2024
    // console.log(id);

    const handleBlogs = () => {
        console.log('Blogs')
        navigate(`/blogs/${props[0]._id}`)

    }
    return (
        <div onClick={handleBlogs} className='h-1/4 flex justify-center items-center w-5/6 my-4 cursor-pointer hover:scale-105 duration-300 active:scale-100'>
            <img src={photo1} alt="" className='size-80 mx-5 rounded' />
            <div className='mx-5'>
                <div className='font-montserrat text-3xl font-semibold w-11/12'>{props[0].title}</div>
                <div className='flex items-center py-2'>
                    <p className='pr-3 text-center'>Name </p>
                    <p className='text-black/40 text-center text-sm'>{formattedDate}</p>
                </div>
                <div className='text-xl font-sans font-light text-pretty py-2 text-gray-700'>
                    Summary: <br />
                    {/* <div dangerouslySetInnerHTML={{ __html: props[0].content }}></div> */}
                    {props[0].summary}
                </div>
            </div>
        </div>
    )
}

export default BlogsBar