import "./App.css"
import React from "react"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./Context/Usercontext.jsx"
function App() {


  return (
   <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
