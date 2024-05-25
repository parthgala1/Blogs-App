import React from 'react'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import BlogsBar from '../../components/BlogsBar'
import { Link } from 'react-router-dom'
import { useGetPosts } from '../../hooks/useGetPosts'

const Blogs = () => {

    const { loading, posts } = useGetPosts();

    return (
        <div className="h-auto flex-center flex-col relative bg-white">
            <div className="flex-center flex-col h-full w-full">
                <div className="relative z-50h-auto w-full flex items-center justify-between pt-20 lg:px-20 pb-10">
                    <button className=' opacity-0 p-3 px-5 rounded font-montserrat text-white active:scale-90 duration-300 bg-red-300'>Add your Blog</button>
                    <SearchBar />
                    <Link to='./createPost' className='p-3 px-5 rounded font-montserrat text-white active:scale-90 duration-300 active:opacity-80 bg-red-300'>Add your Blog</Link>
                </div>
                <div className="h-auto w-full flex justify-start items-center px-8 flex-col">
                    {posts.map((item, id) =>
                        <BlogsBar id={item} key={id} props={posts} />
                    )}
                    {/* <BlogsBar />
                    <BlogsBar />
                    <BlogsBar />
                    <BlogsBar /> */}
                </div>
            </div>
        </div>
    )
}

export default Blogs