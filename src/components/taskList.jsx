import React from 'react'

const TaskList = ({ tasks, handleRemoveTask , showAll , handleUpdateTaskStatus }) => {
    const filteredTasks = showAll ? tasks : tasks.filter(task => !task.completed)
    return (
        <div>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                        <select
                        value={task.status}
                        onChange={e => handleUpdateTaskStatus(task.id , e.target.value)}
                        >
                            <option value="complete">Complete</option>
                            <option value="inProgress">In Progress</option>
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
