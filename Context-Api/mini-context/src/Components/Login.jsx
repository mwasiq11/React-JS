import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../Context/Usercontext'

function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const SubmitHandler =()=>{

    }
    return (
        
      <div>
        <h2>Login</h2>
        <input type="text"
         placeholder="username"
         value={username}
         onChange={(e)=>{
            setUsername (e.target.value)
         }} 
         />
         <input
          type="text"
          placeholder='password'
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
           />
           <button onClick={SubmitHandler}>Submit</button>
      </div>
    )
}

export default Login
