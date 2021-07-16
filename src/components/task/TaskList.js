import React, { useContext, useEffect } from "react"
import { TaskCard } from "./TaskCard"
import "./Task.css" 
import { TaskContext } from "./TaskProvider"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext) 

    useEffect(() => {
        getTasks()
    },[])

    return(
        <div className="tasks">

            {
                tasks.map(task => {
                    return <TaskCard key={task.id} task={task} />
                })
            }
        </div>
    )
}