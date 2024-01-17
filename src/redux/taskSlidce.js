import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: 'tasks',
    initialState: { tasks: [], showAll: false },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleShowAll: state => {
            state.showAll = !state.showAll;
        },
        updateTaskStatus: (state, action) => {
            const { taskId, status } = action.payload;
            const taskToUpdate = state.tasks.find(task => task.id === taskId);

            if (taskToUpdate) {
                taskToUpdate.status = status;
            }
        }
    }
})

export const { addTask, removeTask, toggleShowAll, updateTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;