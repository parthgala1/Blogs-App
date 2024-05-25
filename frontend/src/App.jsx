import { useState } from 'react'
import Home from './pages/LandingPage/Home'
import NotFoundPage from './pages/NotFoundPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Home />
              <AboutUs />
              <Contact />
            </>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogs' element={
            <>
              <Navbar />
              <Blogs />
            </>
          }
          />
          <Route path='/blogs/createPost' element={
            <>
              <Navbar />
              <CreatePost />
            </>
          } />
          <Route path='/blogs/updatePost' element={
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
      </Router>
    </>
  )
}

export default App
