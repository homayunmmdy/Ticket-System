import { configureStore} from "@reduxjs/toolkit"
import tasksReducer from "./taskSlidce"

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
})

export default store