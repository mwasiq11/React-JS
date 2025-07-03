import  {createSlice} from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null,
}
const AuthSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            action.userData=action.payload.userData
        },
        logout:(state)=>{
            state.status=false,
            state.userData=null
        },
    }
})
export const {login,logout}= AuthSlice.actions;
export default AuthSlice.reducer;

// This code defines a Redux slice for authentication, managing the user's login status and data.
// The `initialState` contains the default values for the authentication state.
// The `AuthSlice` is created using `createSlice`, which includes the name, initial state, and reducers.
// The `login` reducer updates the state to indicate the user is logged in and stores the user data.
// The `logout` reducer resets the state to indicate the user is logged out and clears the user data.
// The actions `login` and `logout` are exported for use
