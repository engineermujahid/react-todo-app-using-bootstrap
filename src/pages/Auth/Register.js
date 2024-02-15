import React, { useState } from 'react'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Resister() {

    const [state, setState] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate()

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    function Submit(e) {
        e.preventDefault();
        let { firstName, lastName, email, password, confirmPassword } = state;
        firstName = firstName.trim();
        lastName = lastName.trim();
        email = email.trim();
        password = password.trim();
        confirmPassword = confirmPassword.trim();
        if (firstName.length < 3) { return message.error("Enter first name properly"); }
        if (lastName.length < 3) return message.error("Enter last name properly");
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            return message.error("Enter a valid email address");
        }

        const userId = Math.random().toString(36).slice(2)
        const dateCreated = new Date().getTime()
        const users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.email === email)
        if (!user) {
            if (password !== confirmPassword) {
                return message.error("Password didn't matched. try again")
            }
            const newUser = { firstName, lastName, email, password, userId, dateCreated };
            users.push(newUser)
            localStorage.setItem("users", JSON.stringify(users));
            message.success("You have successfully signed up.")
            setTimeout(() => {
                navigate("/auth/login")
            }, [1000])
        } else {
            message.error("This user already exits!")
        }
    }

    const loginPage = () => navigate("/auth/login")

    return (
        <div className='login-form' >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card mx-auto p-3" style={{ maxWidth: "600px" }}>
                            <h1 className="text-center mb-3">Register</h1>
                            <div >
                                <form onSubmit={Submit}>
                                    <div className="row">
                                        <div className="col-12 col-md-6 mb-3">
                                            <input type="text" className='form-control' placeholder='First Name' name='firstName' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <input type="text" className='form-control' placeholder='Last name' name='lastName' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <input type="text" className='form-control' placeholder='Email' name='email' onChange={handleChange} />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <input type="password" className='form-control' placeholder='Password' name='password' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <input type="password" className='form-control' placeholder='Confirm Password' name='confirmPassword' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 text-center mb-3">
                                            <button type='submit' className='btn btn-primary w-100'>Sign Up</button>
                                        </div>
                                        <div className="col-12 text-primary">
                                            <span className='d-inline-block me-4' onClick={loginPage}>Already have account? Login</span>
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