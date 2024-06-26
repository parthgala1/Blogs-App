import { useState } from 'react'
import Home from './pages/LandingPage/Home'
import NotFoundPage from './pages/NotFoundPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs/Blogs'
import AboutUs from './pages/LandingPage/AboutUs'
import Contact from './pages/LandingPage/Contact'
import ContactUs from './pages/ContactUs'
import CreatePost from './pages/Blogs/CreatePost'
import UpdatePost from './pages/Blogs/UpdatePost'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import BlogsPage from './pages/Blogs/BlogsPage'
import { AuthContext, useAuthContext } from './context/AuthContext'
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useAuthContext()

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
            <AboutUs />
            <Contact />
          </>
        } />
        <Route path={'/login'} element={!authUser ? <Login /> : <Navigate to='/' />} />
        <Route path={'/register'} element={!authUser ? <Register /> : <Navigate to='/' />} />
        <Route path='/blogs' element={!authUser ?
          <>
            <Navbar />
            <NotFoundPage />
          </>
          :
          <>
            <Navbar />
            <Blogs />
            <Contact />
          </>
        }
        />
        <Route path='/blogs/createPost' element={
          <>
            <Navbar />
            <CreatePost />
          </>
        } />
        <Route path='/blogs/updatePost/:id' element={
          <>
            <Navbar />
            <UpdatePost />
          </>
        } />
        <Route path='/contactus' element={
          <>
            <Navbar />
            <ContactUs />
            <Contact />
          </>
        } />
        <Route path='/blogs/:id' element={
          <>
            <Navbar />
            <BlogsPage />
            <Contact />
          </>
        } />

        <Route path='*' element={

          <>
            <Navbar />
            <NotFoundPage />
          </>
        } />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "rounded-xl bg-info-purple-1 text-white text-xl",
        }}
      />
    </>
  )
}

export default App
