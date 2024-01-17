import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

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
        updateTaskStatus : (state , action) => {
            const {taskId , status} = action.payload;
            const taskToUpdate = state.tasks.find(task => task.id === taskId);

            if(taskToUpdate) {
                taskToUpdate.status = status;
            }
        },

        fetchTasksAsync: async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/todos`);
                return response.data
            } catch (error) {
                console.error('Error fetching tasks:' , error);
                throw error;
            }
        }

    }
})


export const { addTask, removeTask , toggleShowAll , updateTaskStatus , fetchTasksAsync} = taskSlice.actions;

export const fetchTasks = () => async dispatch => {
    try {
        const tasks = await dispatch(fetchTasksAsync());
        dispatch(addTask(tasks))
    }catch (error) {
        console.error("Error feetching tasks:" , error);
    }
}
export default taskSlice.reducer;