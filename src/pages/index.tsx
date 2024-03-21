import * as React from "react"
import { Helmet } from "react-helmet"
import type { HeadFC, PageProps } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import  LoginButton  from "../components/login-button"
import LogoutButton from "../components/logout-button";
import { useAuth0 } from "@auth0/auth0-react";

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
};

const greetUser = (user: any) => {
  if (user) {
    return (
    <div style={{textAlign: "center"}}>
      <div style={{padding: "25px"}}>{user.name ? user.name : user.email} </div>
      <img width={64}  style={{border: "white 3px solid", borderRadius: "50%", marginLeft: "auto", marginRight: "auto" }} src={user.picture} alt={user.name} />
    </div>
    )}
}

const IndexPage: React.FC<PageProps> = () => {
  const {
    isAuthenticated,
    logout,
    user
    } = useAuth0();

    console.log(process.env.AUTH0_DOMAIN)
    console.log(process.env.AUTH0_CLIENTID)

  return (
    <>
     <Helmet>
      <style>{`body { background-color: black; }`}</style>
    </Helmet>
    <main style={pageStyles}>
   
      <div style={{ maxWidth: "fit-content", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
        <h1 style={headingStyles}>
          .curio.
        </h1>

        <StaticImage
          alt="Curio Logo"
          src="../images/ourcurio.png"
        />
        <div style={{color:"red"}}><LoginButton /></div>
        {isAuthenticated && greetUser(user)}
        <div style={{color:"red"}}><LogoutButton /></div>
      </div>
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
