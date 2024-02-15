import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditTodos() {
    const navigate = useNavigate();

    const todoToEdit = useLocation().state;
    // const [todo, setTodo] = useState()
    const [formData, setFormData] = useState({ title: "", location: "", discription: "" })

    useEffect(() => {
        setFormData(todoToEdit)
    }, [])

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let { title, location, discription } = formData;
        title = title.trim();
        location = location.trim();
        discription = discription.trim();
        if (!title || title.length < 3) { return message.error("Enter the title Properly") }
        if (!location) { return message.error("Enter the the location") }
        if (!discription || discription.length < 3) { return message.error("Enter the discription Properly") }
        const dateModified = new Date().getTime();
        const updatedTodo = { ...todoToEdit, title, location, discription, dateModified }

        let todos = JSON.parse(localStorage.getItem("todos"))

        let updatedTodos = []

        todos.forEach(todo => updatedTodos.push(todo.todoId !== updatedTodo.todoId ? todo : updatedTodo));

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        message.success("Todo is updated successfully")
        navigate("/todos/my-todos")
    }
    return (
        <div className='addTodos'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card mx-auto p-3" style={{ maxWidth: "600px" }}>
                            <h1 className="text-center mb-3">Update Todo</h1>
                            <div >
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <input type="text" className='form-control' placeholder='Add Title' id='title' name='title' value={formData.title} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <input type="text" className='form-control' placeholder='Add Location' id='location' name='location' value={formData.location} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <textarea class="form-control" placeholder="Discription" id='discription' name="discription" rows="4" value={formData.discription} onChange={handleChange}></textarea>
                                        </div>
                                        <div className="col-12 text-center mb-3">
                                            <button type='submit' className='btn btn-primary w-50'>Update</button>
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
