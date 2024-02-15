import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TodosList() {
    const navigate = useNavigate();
    const [myTodos, setMyTodos] = useState([])

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        setMyTodos(todos)
    }, [])

    const handleDelete = (e) => {
        const taskId = e.target.getAttribute('id')
        let todos = JSON.parse(localStorage.getItem("todos"))
        let remTodos = todos.filter((todo) => {
            return todo.todoId !== taskId;
        })
        localStorage.setItem("todos", JSON.stringify(remTodos));
        setMyTodos(remTodos)
    }

    const handleEdit = (e) => {
        const taskId = e.target.getAttribute('id')
        let todos = JSON.parse(localStorage.getItem("todos"))
        let todoToEdit = todos.find((todo) => {
            return todo.todoId === taskId;
        })
        navigate("/todos/edit-todos", { state: todoToEdit })
    }

    return (
        <div className='myTodos my-5'>
            <div className="container ">
                <div className="row ">
                    <div className="col-12 col-md-10 offset-md-1 py-3 bg-light rounded">
                        <div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Sr.no</th>
                                        <th>Title</th>
                                        <th>Location</th>
                                        <th>Discription</th>
                                        <th>Status</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myTodos.map((task, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th >{i + 1}</th>
                                                    <td>{task.title}</td>
                                                    <td>{task.location}</td>
                                                    <td>{task.discription}</td>
                                                    <td>{task.status}</td>
                                                    <td className='text-center'>
                                                        <button className='btn btn-small btn-info me-2' id={task.todoId} onClick={(e) => { handleEdit(e) }}>Edit</button>
                                                        <button className='btn btn-small btn-danger' id={task.todoId} onClick={(e) => { handleDelete(e) }}>Delete</button>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
