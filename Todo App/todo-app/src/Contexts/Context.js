import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo-msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleTodo:(id)=>{},

});
export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;

// import { createContext,useContext } from "react";

// export const TodoContext=createContext({
// })

// export const useTodo=()=>{
//     TodoContext(useContext)
// }

// export const TodoProvider=TodoContext.Provider();

// import { createContext, useContext } from "react";

// export const todoContext = createContext({
//   todos: [
//     {
//       id: 1,
//       todo: "todo",
//       completed: false,
//     },
//   ],
//   addtodo: (id) => {},
//   removetodo: (todo, id) => {},
// });

// export const useTodo = () => {
//   useContext(todoContext);
// };

// export const todoProvider = todoContext.Provider();



// import { createSlice, nanoid } from "@reduxjs/toolkit";

// export const initialState = {
//   todos: [
//     {
//       id: 1,
//       text: "todo",
//     },
//   ],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload,
//       };
//       state.todos.push(todo);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => {
//         todo.id !== action.payload;
//       });
//     },
//   },
// });

// export const { addTodo, removeTodo } = createSlice.actions;
// export default todoSlice.reducer;
