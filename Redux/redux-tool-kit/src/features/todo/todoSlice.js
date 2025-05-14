import {createSlice,nanoid} from "@reduxjs/toolkit"
const initialState={
   todos:[{
    id:1,
    text:"Learn Redux",
   }]
}
const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{},
        removeTodo:()=>{},
    }
    
})
       


