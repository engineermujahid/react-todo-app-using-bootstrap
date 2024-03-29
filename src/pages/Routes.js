import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Frontend from "./Frontend"
import Auth from "./Auth"
import Todos from "./Todos"
import PrivateRoute from './PrivateRoute'
import { useAuthContext } from 'contexts/AuthContext'

export default function Index() {
    const { isAuth } = useAuthContext()
    return (
        <Routes>

            <Route path='/*' element={<Frontend />} />
            <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to="/" />} />
            <Route path='/todos/*' element={<PrivateRoute Component={Todos} />} />
            <Route />

        </Routes>
    )
}
