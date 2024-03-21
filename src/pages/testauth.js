// src/pages/account.js
import React from "react";
/* 👇 New code 👇 */ 
import { Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
/* 👇 Import the withAuthenticationRequired HOC 👇 */ 
import { withAuthenticationRequired } from '@auth0/auth0-react';


const TestAuth = () => {
/* 👇 Access user from the useAuth0 hook 👇 */
 const { user } = useAuth0();
  return (
  <>
   <nav>
  
    <Link to="/">Home</Link>
    <p>👋 Email: {user.email}</p>
  </nav>
 </>
 );
};

/* 👇 Wrap the component in the withAuthenticationRequired handler 👇 */
export default withAuthenticationRequired(TestAuth);