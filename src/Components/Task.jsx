import React from 'react'

const Task = ({task, deleteTask, index}) => {

    return (
        <div className='task'>
            <div>
                <p> {task.title} </p>
                <span> {task.description} </span>
            </div>
            
            <button onClick={() => deleteTask(index)} >-</button>
        </div>
    )
}

export default Task