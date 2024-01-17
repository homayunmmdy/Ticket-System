import React, { useState } from "react";
import TaskList from "./taskList";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleShowAll , updateTaskStatus} from "../redux/taskSlidce";
import TaskInput from "./taskInput";

const Task = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks.tasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), text: newTask }));
  };
  const handleRemoveTask = (tasksId) => {
    dispatch(removeTask(tasksId));
  };
  const handleToggleShowAll = () => {
    dispatch(toggleShowAll());
  };

  const handleUpdateTaskStatus = (taskId , status) => {
    dispatch(update)
  }
  return (
    <div>
      <h1>Task managenemt</h1>
      <button onClick={handleToggleShowAll}>
        {tasksState.showAll ? "Show Incomplete Tasks" : "Show All Tasks"}
      </button>
      <TaskList
        tasks={tasksState}
        handleRemoveTask={handleRemoveTask}
        showAll={tasksState.showAll}
        handleUpdateTaskStatus={updateTaskStatus}
      />
      <TaskInput
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
    </div>
  );
};

export default Task;
