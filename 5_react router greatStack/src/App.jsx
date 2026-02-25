import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
         </Routes>
         </div>
    </div>
  )
}

export default App