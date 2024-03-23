import React, { useEffect, useState, Suspense } from 'react';
import { Helmet } from "react-helmet"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { CurioUser } from "../models/user"
import  LoginButton  from "../components/login-button"
import LogoutButton from "../components/logout-button";
import { useAuth0 } from "@auth0/auth0-react";
import UserGreeting from '../components/user-greeting';
import { addUser, addUserVisit } from "../utils/user-manager";

const pageStyles = {
  color: "#ffffff",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 0,
  fontSize: 48,
  color: "#FFFFFF",
  fontFamily: "Cormorant, sans-serif",
};

function updateUser(user: any, callback: any) {
  if (!user) {
    return;
  }
  let curioUser:CurioUser = new CurioUser();
  (async () => {
    const response = await fetch(`/api/users/${user.email}`);
    if (response.status === 404) {
      // first time here!
      addUser(user.email);
    } else {
      const content = await response.json();
      curioUser = content;
    }
    const lastVisit = curioUser.visits[0];
    if (lastVisit === null || (user.updated_at && lastVisit < user.updated_at)) {
      console.log("updating user for some reason sad face");
      addUserVisit(curioUser.id);
    }
  })();
  callback();
}


const IndexPage: React.FC<PageProps> = () => {
  const [userUpdated, setUserUpdated] = React.useState(false);
  const {
    isAuthenticated,
    logout,
    user
    } = useAuth0();

    useEffect(() => {
      
      if (!userUpdated) {
        updateUser(user, () => setUserUpdated(true));
      }
    });
    
  return (
    <>
     <Helmet>
      <style>{`body { background-color: black;}`}</style>
    </Helmet>
    <main style={pageStyles}>
   
      <div style={{ maxWidth: "fit-content", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
        <h1 style={headingStyles}>
        .curio&middot;
        </h1>

        <StaticImage src="../images/ourcurio.png" alt="Illustration of a cabinet of curiosities" />
        <div style={{color:"red"}}><LoginButton /></div>
        <Suspense fallback={<p/>}>
          <div>{isAuthenticated && UserGreeting(user)}</div>
        </Suspense>
        
        <div style={{color:"red"}}><LogoutButton /></div>
      </div>
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
    <SEO title="Home" description="" pathname="/" children="" />
      <style>
        {`         
         @font-face {
           font-family: 'Cormorant';
           font-style: normal;
           font-weight: 300 700;
           font-display: swap;
           src: url(https://fonts.gstatic.com/s/cormorant/v21/H4clBXOCl9bbnla_nHIq75u9qKS-aw.woff2) format('woff2');
           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
         }
        `}  
      </style>
    </>
  )
}