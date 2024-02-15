import { message } from 'antd'
import React, { useState } from 'react'

export default function AddTodos() {

    const [todo, setTodo] = useState({ title: "", location: "", discription: "" })

    const handleChange = e => setTodo(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        let { title, location, discription } = todo;
        title = title.trim();
        location = location.trim();
        discription = discription.trim();
        if (!title || title.length < 3) { return message.error("Enter the title Properly") }
        if (!location) { return message.error("Enter the the location") }
        if (!discription || discription.length < 3) { return message.error("Enter the discription Properly") }
        const todoId = Math.random().toString(36).slice(2);
        const dateCreated = new Date().getTime();
        const status = "active";
        const newTodo = { title, location, discription, todoId, dateCreated, status }

        try {
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            todos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(todos));
            message.success("A new TODO is created successfully. Navigate to \"Todos\" page to see your tasks.")
            setTimeout(() => {
                resetFields()
            }, [500])
        }
        catch {
            message.error("Something went wrong while adding task. Try again.")
        };
    }
    const resetFields = () => {
        document.getElementById("title").value = "";
        document.getElementById("location").value = "";
        document.getElementById("discription").value = "";
    }

    return (
        <div className='addTodos'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card mx-auto p-3" style={{ maxWidth: "600px" }}>
                            <h1 className="text-center mb-3">Add Todos</h1>
                            <div >
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <input type="text" className='form-control' placeholder='Add Title' id='title' name='title' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <input type="text" className='form-control' placeholder='Add Location' id='location' name='location' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <textarea class="form-control" placeholder="Discription" id='discription' name="discription" rows="4" onChange={handleChange}></textarea>
                                        </div>
                                        <div className="col-12 text-center mb-3">
                                            <button type='submit' className='btn btn-primary w-50'>Add Todo</button>
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
