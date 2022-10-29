import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: [
            {
                id: 1,
                title: 'Việc 1',
                completed: true,
            },
            {
                id: 2,
                title: "Việc 2",
                completed: false
            },
            {
                id: 3,
                title: "Việc 3",
                completed: false
            },
            {
                id: 4,
                title: "Việc 4",
                completed: false
            }
        ]
    },
    reducers: {
        // addTodo: (state, action) => {
        //     state.allTodos.unshift({
        //         id: nanoid(),
        //         title: action.payload,
        //         completed: false
        //     })
        // }
        addTodo: {
            reducer: (state, action) => {
                state.allTodos.unshift(action.payload)
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
            }
        },
        markCompleted: (state, action) => {
            const todoId = action.payload;
            state.allTodos = state.allTodos.map((todo) => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        },
        deleteTodo: (state, action) => {
            const todoId = action.payload;
            state.allTodos = state.allTodos.filter(item => item.id !== todoId);
        }
    }

})

//Reducer
export const todosReducer = todosSlice.reducer;

//Action export
export const { addTodo, markCompleted, deleteTodo } = todosSlice.actions;


//Selector
export const todoSelector = state => state.todosNewReducer.allTodos

