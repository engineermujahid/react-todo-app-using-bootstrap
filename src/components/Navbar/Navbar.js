import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoChecklist } from 'react-icons/go';
import { useAuthContext } from 'contexts/AuthContext';

export default function Navbar() {
    const { user, dispatch, isAuth } = useAuthContext()
    const navigate = useNavigate()

    const navigation = () => navigate('/auth/login')
    const handleLogout = () => {
        dispatch({ type: "SET_LOGGED_OUT" })
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("currentUser")
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid mx-5">
                    <Link to="/" className="navbar-brand m-0 p-0"><span><GoChecklist size={'40px'} /></span><span className='d-inline-block ms-1'>React Todos</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/todos/my-todos" className="nav-link">Todos</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/todos/edit-todos" className="nav-link">Edit Todo</Link>
                            </li> */}

                            <li className="nav-item">
                                <Link to="/todos/add-todos" className="nav-link">Add Todos</Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            {!isAuth
                                ?
                                <button className='btn btn-outline-success text-white' onClick={navigation}>Login</button>
                                :
                                <>
                                    <span className="d-inline-block me-3 text-white" style={{ fontSize: "18px", fontWeight: "500" }}>Welcome {user.firstName}!</span>
                                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
