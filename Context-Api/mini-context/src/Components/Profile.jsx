import React from 'react'
import UserContext from '../Context/Usercontext'
import { useContext } from 'react'


function Profile() {
    const {user}= useContext(UserContext)
    
    if(!user) return <div>login Please</div>
    return <div> Welcome{user.username}</div> 
}

export default Profile
