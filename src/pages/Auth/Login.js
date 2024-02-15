import React, { useState } from 'react'
import { useAuthContext } from 'contexts/AuthContext';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [state, setState] = useState({ email: "", password: "" });
    const navigate = useNavigate()
    const { dispatch } = useAuthContext()

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    function Submit(e) {
        e.preventDefault();
        let { email, password } = state;
        email = email.trim();
        password = password.trim();

        // console.log(state)
        const users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.email === email)
        if (user) {
            if (user.password === password) {
                dispatch({ type: "SET_LOGGED_IN", payload: { user } })
                localStorage.setItem("isLoggedIn", "true")
                localStorage.setItem("currentUser", JSON.stringify(user))

            } else {
                message.error("Password isn't correct.")
            }
        } else {
            message.error("User not found")
        }
    }
    const forgotPassword = () => navigate("/auth/register")
    const signUp = () => navigate("/auth/register")

    return (
        <div className='login-form' >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card mx-auto p-3" style={{ maxWidth: "400px" }}>
                            <h1 className="text-center mb-3">Login</h1>
                            <div >
                                <form onSubmit={Submit}>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <input type="email" className='form-control' placeholder='Email' name='email' onChange={handleChange} />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <input type="password" className='form-control' placeholder='Password' name='password' onChange={handleChange} />
                                        </div>

                                        <div className="col-12 text-center mb-3">
                                            <button type='submit' className='btn btn-primary w-100'>Login</button>
                                        </div>
                                        <div className="col-12 text-center text-primary">
                                            <span className='d-inline-block me-4' onClick={forgotPassword}>Forgot password?</span>
                                            <span className='d-inline-block' onClick={signUp}>Sign Up</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}