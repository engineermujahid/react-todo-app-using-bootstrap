import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
// import ForgotPassword from './ForgotPassword'
// import ResetPassword from './ResetPassword'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function index() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    {/* <Route path='forgot-password' element={<ForgotPassword />} /> */}
                    {/* <Route path='reset-password' element={<ResetPassword />} /> */}
                    <Route path='*' element={<>Error 404. No page Found</>} />
                    <Route />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
