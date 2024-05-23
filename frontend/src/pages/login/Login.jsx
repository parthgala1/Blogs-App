import React, { useState } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// import useLogin from '../../hooks/useLogin.js';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true)
    // const navigate = useNavigate();
    const handlePassword = (e) => {
        e.preventDefault();
        !hidePassword ? setHidePassword(true) : setHidePassword(false)
        console.log(hidePassword);
    }

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        // login(user.username, user.password)
        console.log(user);
        // navigate('/');
    }

    // const { loading, login } = useLogin()



    return (
        <div className="h-screen bg-gradient-to-br from-red-300 to-red-100 flex justify-center items-center">

            <div className='rounded-xl bg-slate-100 p-10 ' >
                <form onSubmit={handleSubmit} className='flex flex-col w-full'>
                    <div className='text-center font-serif font-thin py-4 text-2xl'>
                        ThoughtsFlow Login Page
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

                    <div className='m-3 text-sm hover:text-blue-600 '>
                        <Link to="/register">Don't Have an Account?</Link>
                    </div>

                    <div className='m-3 flex justify-center '>
                        <button className='btn p-3 w-full bg-inherit font-serif text-red-400 hover:text-white text-lg font-semibold btn-ghost btn-outline hover:bg-red-300 rounded'>Login</button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Login