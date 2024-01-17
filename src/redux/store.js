import { configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import tasksReducer from "./taskSlidce";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [thunk],
})

export default store