import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./reducers/todoSlice";

//Store
const store = configureStore({
    reducer: {
        todosNewReducer: todosReducer
    }
})

//Export
export default store

