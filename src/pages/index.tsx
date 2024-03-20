import * as React from "react"
import { Helmet } from "react-helmet"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#000000",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 0,
  fontSize: 48,
  color: "#FFFFFF",
}

const IndexPage: React.FC<PageProps> = () => {

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
      </div>
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
