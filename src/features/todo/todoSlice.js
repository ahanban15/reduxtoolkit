import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Do CP"}]
}

function sayHello(){
    console.log("Hello World!");
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo: sayHello,
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})
