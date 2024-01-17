import React from 'react'

const TaskInput = ({newTask , setNewTask , handleAddTask}) => {
  return (
    <div>
      <input 
      type='text'
      name={newTask}
      onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default TaskInput
