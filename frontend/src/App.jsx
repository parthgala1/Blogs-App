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
          <Route path='/contactus' element={
            <>
              <Navbar />
              <ContactUs />
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
