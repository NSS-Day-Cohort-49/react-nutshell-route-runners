import React, {useState, createContext, useContext } from "react"

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
        .then(res => res.json())
        .then(setTasks)
    }
    
    const addTasks = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        .then(getTasks)
    }

    const deleteTask = taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`,{
            method: "DELETE",
        }).then(getTasks)
    }

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTasks, deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}