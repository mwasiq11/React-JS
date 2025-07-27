// import {configureStore} from "@reduxjs/toolkit"
// import todoReducer from "../features/todo/TodoSlice"
// export const store=configureStore({
//     reducer:todoReducer
// })

//  import { configureStore } from "@reduxjs/toolkit";
//  import todoReducer from "../features/todo/TodoSlice";

//  export const store=configureStore({
//  reducer:todoReducer
//  })


// first we have to make store which is made from configureStore
// second we have to make Slice which is made from createSlice then we make initialState which can be an array or obj.
// Third we make Slice which make from createSlice method which we import from reduxtool kit
// in createSlice method we add name,initailState,reducers(in Reducers we add properties and functions)
// in Forth step we have to export our methods which we given name which making createSlice method with .actions  and  then export method with .reducer



import { configureStore } from "@reduxjs/toolkit";  
import todoReducer from "../features/todo/TodoSlice"

export const store=configureStore({
    reducer:todoReducer
})