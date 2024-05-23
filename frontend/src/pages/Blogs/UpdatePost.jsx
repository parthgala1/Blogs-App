import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' },
        { 'align': [] },],
        [{ 'font': [] },],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'align', 'font', 'script',
    'color', 'background',
    'link', 'image',
    'clean'
];

const CreatePost = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();  // Moved this line to the top of the component

    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(value);
        navigate('/blogs');  // Now this works as expected
    };

    return (
        <div className='h-screen flex justify-center items-start m-20'>
            <div className='flex-center flex-col h-1/2 w-1/2 p-5'>
                <h1 className='w-full text-center font-montserrat text-3xl m-3 tracking-wider'>Update Post</h1>
                <input type="text" placeholder='Title' className='w-full p-2 m-3 border-red-300 bg-white border-2 outline-0' />
                <input type="text" placeholder='Summary' className='w-full p-2 m-3 border-red-300 bg-white border-2 outline-0' />
                <input type="text" placeholder='Link' className='w-full p-2 m-3 border-red-300 bg-white border-2 outline-0' />
                <div className='w-full p-2 m-3 border-red-300 bg-white border-2 outline-0'>
                    <input type="file" name='file' id='' />
                </div>
                <div className='w-full h-full p-2 m-3 border-red-300 bg-white border-2 outline-0'>
                    <ReactQuill
                        modules={modules}
                        formats={formats}
                        value={value}
                        onChange={setValue}
                    />
                </div>
                <button onClick={handleSubmit} className='w-full bg-red-300 p-2 m-3 rounded text-white font-montserrat active:scale-95 active:bg-red-300/60 duration-300'>Update Post</button>
            </div>
        </div>
    );
};

export default CreatePost;
