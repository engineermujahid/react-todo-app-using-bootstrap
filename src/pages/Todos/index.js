import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddTodos from './AddTodos'
import EditTodos from './EditTodos'
import TodosList from './TodosList'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function index() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/add-todos' element={<AddTodos />} />
                    <Route path='/edit-todos' element={<EditTodos />} />
                    <Route path='/my-todos' element={<TodosList />} />
                    <Route path='*' element={<>Error 404. No page Found</>} />
                    <Route />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
