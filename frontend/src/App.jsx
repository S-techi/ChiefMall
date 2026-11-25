 import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import{Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Upload from './pages/Upload';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  return(

    <div>

      <nav className="navbar navbar-expand navbar-dark bg-dark shadow-sm px-3">
        <Link className="navbar-brand fw-bold" to="/">ChiefMall</Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link px-3" to="/">Home</Link>
          <Link className="nav-link px-3" to="/about">About</Link>
          <Link className="nav-link px-3" to="/contact">Contact</Link>
          <Link className="nav-link px-3" to="/services">Services</Link>
          <Link className="nav-link px-3" to="/upload">Upload Product</Link>
        </div>
      </nav>


      <Routes>

        <Route path = "/" element={<Home/>} />
        <Route path = "/contact" element={<Contact/>} />
        <Route path = "/about" element={<About/>} />
        <Route path = "/services" element={<Services/>} />
        <Route path = "/upload" element={<Upload/>} />

      </Routes>

    </div>


  );
}

export default App