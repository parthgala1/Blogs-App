import React from 'react';
import { useGetPostById } from '../../hooks/useGetPostById';
import { Link, useNavigate } from 'react-router-dom';

const BlogsPage = () => {
    const id = window.location.pathname.split('/')[2];
    const { loading, post } = useGetPostById();
    let posts = {};
    for (let i = 0; i < post.length; i++) {
        if (post[i]._id === id) {
            posts = post[i];
        }
    }
    const inputString = posts.createdAt;
    const date = new Date(inputString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    console.log(post);
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="blog-post flex-center flex-col">
            <div className='w-10/12 text-center m-10'>
                <h1 className='font-montserrat text-3xl font-semibold m-5 w-auto'>{posts.title}</h1>
                <div className='m-3 text-center'>
                    <p className='text-center'>Name </p>
                    <p className='text-black/40 text-center text-sm'>{formattedDate}</p>
                </div>
                <div className='m-10'>
                    <Link to='../blogs/updatePost' className='p-3 px-5 m-10 rounded font-montserrat text-white active:scale-90 duration-300 active:opacity-80 bg-red-300'>Add your Blog</Link>
                </div>
                <div className='flex-center'>
                    <div dangerouslySetInnerHTML={{ __html: posts.content }} className='text-3xl text-pretty w-3/4' />
                </div>
                <button className='m-10 bg-red-300/80 py-3 px-5 rounded active:scale-95 text-white hover:bg-red-300 duration-300' onClick={() => navigate('/blogs')}>Back to Blogs</button>
            </div>
        </div>
    );
};

export default BlogsPage;
