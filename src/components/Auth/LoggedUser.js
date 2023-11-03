import React from 'react'
import { useSelector } from 'react-redux';
import Logout from './Logout';
export default function LoggedUser(props) {

    const user=useSelector((state)=>state.user)
    return (
     <> <div>
        <h1>name: {user.name}</h1>
        <h1>username:{user.username}</h1>
        <h1>email:{user.email}</h1>
        <Logout/>
        </div> 
     </>
    )

}
