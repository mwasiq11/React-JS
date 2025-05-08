import React from "react"
import React, { use, useState } from "react"
import UserContext from "./Usercontext"
const UserContextProvider=({childern})=>{
    const [user,setUser]=useState(null)
        return(
            <UserContext.Provider value={{user,setUser}}>
                {childern}
            </UserContext.Provider>
        )
}
export default UserContextProvider;