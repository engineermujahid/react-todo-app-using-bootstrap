import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
// import Contact from './Contact'
// import About from './About'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function index() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} /> */}
                    <Route path='*' element={<>Error 404. No page Found</>} />
                    <Route />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
