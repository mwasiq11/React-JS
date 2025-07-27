import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Learn Redux",
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
        const todo={
            id:nanoid(),
            text:action.payload,
        }
        state.todos.push(todo)
    },
    removetodo: (state,action) => {
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
    },    
  },
});

export const {addtodo,removetodo}=todoSlice.actions
export default todoSlice.reducer



// import { createSlice, nanoid} from "@reduxjs/toolkit";

// const initialState={
//   todos:[
//     {
//       id:1,
//       text:"learn Redux"
//     }
//   ]
// }

// export const todoSlice=createSlice({
//   name:"todo",
//   initialState,
//   reducers:{
//     addTodo:(state,action)=>{
//       const todo={
//         id:nanoid(),
//         text:action.payload,
//       }
//       state.todos.push(todo)
//     },

//     removeTodo:(state,action)=>{
//       state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
//     },
    
//   }


// })

// export const {addTodo,removeTodo}=todoSlice.actions
// export default todoSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

// const initailState={
//   todos:[
//     {
//      id:"1",
//      text:"todo"
      
//     }
//   ]
// }
// export const todoSlice=createSlice({
//   name:"todo",
//   initailState,
//   reducers:{
//     AddTodo:(state,action)=>{
//       const todo={
//         id:nanoid(),
//         text:action.payload
//       }
//       state.todos.push(todo) 
//     },
//     RemoveTodo:(state,action)=>{
//       state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
//     }
    
//   }
// })

// export const{AddTodo,RemoveTodo}=todoSlice.actions
// export default todoSlice.reducer
