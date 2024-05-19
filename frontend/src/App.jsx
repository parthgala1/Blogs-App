import { useState } from 'react'
import Home from './pages/LandingPage/Home'
import NotFoundPage from './pages/NotFoundPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import AboutUs from './pages/LandingPage/AboutUs'

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
            </>
          } />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
