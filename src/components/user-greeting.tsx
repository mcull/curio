import React from 'react';
import { CurioUser } from "../models/user"
import { addUser, addUserVisit } from "../utils/user-manager";
import ordinal from "ordinal";
  
  function UserGreeting(user: any) {
    if (!user) {
      return null;
    }
   
    return (
      <div style={{textAlign: "center"}}>
        <div style={{paddingTop: "25px"}}>{user.name ? user.name : user.email}</div>
        <div>This is your {ordinal(2)} visit!</div>
        <img width={64}  style={{border: "white 3px solid", borderRadius: "50%", marginLeft: "auto", marginRight: "auto" }} src={user.picture} alt={user.name} />
      </div>
    )
  }

  export default UserGreeting;