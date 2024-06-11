import React from 'react';
import { useGetPostById } from '../../hooks/useGetPostById';
import { Link, useNavigate } from 'react-router-dom';
import { useDeletePostById } from '../../hooks/useDeletePostById';
import { useAuthContext } from '../../context/AuthContext';
import ScrollToTop from '../../components/ScrollToTop';

const BlogsPage = () => {
    const id = window.location.pathname.split('/')[2];
    const { loading, post } = useGetPostById(id);
    const { deletePost, loading: deleteLoading, error: deleteError } = useDeletePostById();
    const navigate = useNavigate();
    const { authUser } = useAuthContext();

    if (loading) {
        return <div className='h-screen w-full flex-center text-3xl font-montserrat font-semibold bg-gradient-to-b from-red-100 via-red-300 to-red-200 text-white'>Loading...</div>;
    }

    if (!post) {
        return <div className='h-screen w-full flex-center text-3xl font-montserrat font-semibold bg-gradient-to-b from-red-100 via-red-300 to-red-200 text-white'>Post not found</div>;
    }

    const inputString = post.createdAt;
    const date = new Date(inputString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    const handleDelete = async () => {
        try {
            await deletePost(id);
            navigate('/blogs');
        } catch (error) {
            console.error('Failed to delete post:', error);
            // Optionally display an error message to the user
        }
    };
    console.log(authUser.name);

    return (
        <div className="blog-post flex-center flex-col">
            <ScrollToTop />
            <div className='w-10/12 m-10 text-center'>
                <h1 className='font-montserrat text-center text-3xl font-semibold m-5 w-auto'>{post.title}</h1>
                <div className='m-3 text-center'>
                    <p className='text-center'>{post.name}</p>
                    <p className='text-black/40 text-center text-sm'>{formattedDate}</p>
                </div>
                {post.name === authUser.name ?
                    <div className='m-10 text-center'>
                        <Link to={`./../updatePost/${id}`} className='p-3 px-5 m-10 rounded font-montserrat text-white active:scale-90 duration-300 active:opacity-70 bg-red-300'>Update your Blog</Link>
                        <button onClick={handleDelete} className='p-3 px-5 m-10 rounded font-montserrat text-white active:scale-90 duration-300 active:opacity-70 bg-red-300' disabled={deleteLoading}>
                            {deleteLoading ? 'Deleting...' : 'Delete your Blog'}
                        </button>
                        {deleteError && <p className='text-red-500 mt-2'>Failed to delete the post. Please try again.</p>}
                    </div>
                    : null}
                <div className='flex-center'>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} className='text-3xl text-balance w-5/6 text-left' />
                </div>
                <button className='m-10 bg-red-300/80 py-3 px-5 rounded active:scale-95 text-white hover:bg-red-300 duration-300' onClick={() => navigate('/blogs')}>Back to Blogs</button>
            </div>
        </div>
    );
};

export default BlogsPage;
