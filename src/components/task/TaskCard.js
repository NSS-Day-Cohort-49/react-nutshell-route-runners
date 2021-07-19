import React, { useContext } from "react" 
import "./Task.css"
import { TaskContext } from "./TaskProvider"

export const TaskCard = ({ task }) => {

    const { deleteTask } = useContext(TaskContext)


    return (
        <section className="task">
            <h3 className="task__name">{task.name}</h3>
            <div className="task__date">{task.date}</div>
            <button onClick={() => { deleteTask(task.id) }}>Delete Task</button>

        </section>
    )
}