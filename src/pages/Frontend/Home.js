import React from 'react'
import { useNavigate } from 'react-router-dom'
import IMG from "assets/heroImg.png"
import { useAuthContext } from 'contexts/AuthContext'

export default function Home() {
    const { isAuth } = useAuthContext()
    const navigate = useNavigate()
    const navigateToLogin = () => navigate('/auth/login')
    const navigateToTodos = () => navigate('/todos/my-todos')

    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 offset-md-2 col-md-4 d-flex flex-column justify-content-center" >
                        <p className='mb-0 text-light'>
                            Streamline your tasks and enhance productivity with our intuitive platform.
                            Whether you're managing personal tasks and projects or collaborating with a team,
                            this website empowers you to effortlessly create, prioritize,
                            and track your tasks.
                            Embrace efficiency and stay on top of your goals with us.</p>
                        <div className='text-center mt-3'>
                            {!isAuth
                                ?
                                <button className='btn text-white btn-outline-success w-50' onClick={navigateToLogin}>
                                    Login
                                </button>

                                :
                                <button className='btn text-white btn-success w-50' onClick={navigateToTodos}>
                                    See Tasks
                                </button>
                            }
                        </div>
                    </div>
                    <div className="col-12 offset-md-1 col-md-4 d-flex flex-column justify-content-center" >
                        <img src={IMG} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
