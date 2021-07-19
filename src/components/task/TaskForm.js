import React, { useContext, useState } from "react" 
import { useHistory } from "react-router"
import { TaskContext } from "./TaskProvider"
import "./Task.css"

export const TaskForm = () => {
    const { addTasks} = useContext(TaskContext)
    
    const [task, setTasks] = useState({
        name: "",
        date: "",
    });

    const history = useHistory(); 
    
    const handleControlledInputChange = (event) => {
        const newTask = { ...task } 

        newTask[event.target.id] = event.target.value

        setTasks(newTask)
    }

    const handleClickSaveTask = (event) => {
        event.preventDefault()

        const newTask = {
            name: task.name,
            date: task.date,
            userId: parseInt(sessionStorage.getItem("nutshell_user"))
        }
        addTasks(newTask)
        .then(() => history.push("/tasks"))
    }

    return(
        <form className="taskForm"> 
            <h2 className="taskForm__Title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task Name</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Task Name" value={task.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Task date</label>
                    <input type="date" id="date" required autoFocus className="form-control" placeholder="Task Date" value={task.date} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveTask}>
                Save Task
            </button>
        </form>
    )
}

