import React, { useContext } from "react" 
import { useHistory } from "react-router-dom"
import "./Task.css"
import { TaskContext } from "./TaskProvider"

export const TaskCard = ({ task }) => {

    const { deleteTask, updateTask } = useContext(TaskContext)
    const history = useHistory()

    const handleCheckBox = () => {
        updateTask({
            id: task.id, 
            name: task.name,
            isComplete: true,
            userId: task.userId
        })
        .then(() => history.push("/tasks"))
    }


    return (
        <section className="task">
            <h3 className="task__name">{task.name}</h3>
            <div className="task__date">{task.date}</div>
            <button onClick={() => { deleteTask(task.id) }}>Delete Task</button>
            <button className="taskButton" onClick={() => {
                history.push(`/tasks/edit/${task.id}`)
              }}>Edit</button>
            <label htmlFor="checkbox">Mark as complete</label>
            <input type="checkbox" id="checkbox" unchecked onChange={handleCheckBox} />

        </section>
    )
}