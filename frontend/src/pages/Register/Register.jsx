import React, { useState } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// import useSignup from '../../hooks/useSignup.js';

const Register = () => {
    const [hidePassword, setHidePassword] = useState(true)
    const handlePassword = (e) => {
        e.preventDefault();
        !hidePassword ? setHidePassword(true) : setHidePassword(false)
        console.log(hidePassword);
    }
    const history = useNavigate();

    const [checked, setChecked] = React.useState(false);
    const handleChange = (e) => {
        !checked ? setChecked(true) : setChecked(false)
        console.log(checked);
    }

    const [user, setUser] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        profilePicture: '',
        member: 'Member'
    })

    // const { loading, signup } = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        // await signup(user);
        history('/');
    }

    return (
        <div className="h-screen bg-gradient-to-br from-red-300 to-red-100 flex justify-center items-center">

            < div className='rounded-xl bg-slate-100 p-10 px-10' >
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='text-center font-serif font-thin py-4 text-2xl'>
                        ThoughtsFlow Register Page
                    </div>
                    <div className='m-3'>
                        <input
                            type="text"
                            placeholder='Name'
                            className='w-full p-2 border-red-300 bg-white border-2 oultine-0'
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div className='m-3'>
                        <input
                            type="text"
                            placeholder='Username'
                            className='w-full p-2 border-red-300 bg-white border-2 oultine-0'
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>
                    <div className='m-3 relative'>
                        <input
                            type={hidePassword ? 'password' : 'text'}
                            placeholder='Password'
                            className='w-full p-2 border-red-300 bg-white border-2 oultine-0 relative'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        <button className='absolute top-3 right-5' onClick={handlePassword}>{hidePassword ? <FaEyeSlash className='text-slate-600' /> : <FaEye className='text-slate-600' />}</button>
                    </div>
                    <div className='m-3'>
                        <input
                            type={hidePassword ? 'password' : 'text'}
                            placeholder='Confirm Password'
                            className='w-full p-2 border-red-300 bg-white border-2 oultine-0'
                            value={user.confirmPassword}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className='m-3'>
                        <input
                            type='file'
                            name='my_file'
                            className='w-full p-2 border-red-300 bg-white border-2 oultine-0'
                            onChange={(e) => setUser({ ...user, profilePicture: e.target.files[0] })}
                        />
                    </div>

                    <div className='m-3 text-sm hover:text-blue-600 '>
                        <Link to="/login">Already Have an Account?</Link>
                    </div>
                    <div className='m-3 flex justify-center '>
                        <button className='btn p-3 w-full bg-inherit font-serif text-red-400 hover:text-white text-lg font-semibold btn-ghost btn-outline hover:bg-red-300 rounded duration-300'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Register