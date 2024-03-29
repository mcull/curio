import React from 'react';
import { Helmet } from "react-helmet"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import { Link } from "gatsby"

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

const TocPage: React.FC<PageProps> = () => {

    
  return (
    <>
     <Helmet>
      <style>{`body { background-color: black; color: white;}`}</style>
    </Helmet>
    <main style={pageStyles}>
   
      <div style={{ maxWidth: "fit-content", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
        <h1 style={headingStyles}>
        .Table of Contents&middot;
        </h1>
        
        <ul className="list-disc text-left [&_ul]:list-[revert]">
            <li>Fit Track
                <ul className="list-disc text-left ml-4 ">
                    <li className="text-slate-500"><Link to="/fittrack/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Splash</Link> (1hr)</li>
                    <li className="text-slate-500"><Link to="/fittrack/signin" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Sign In</Link> (20m)</li>
                    <li className="text-slate-500"><Link to="/fittrack/personalize" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Personalize</Link> (5m)</li>
                    <li className="text-slate-500"><Link to="/fittrack/toppicks" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Today's Top Picks</Link> (5m)</li>
                    <li className="text-slate-500"><Link to="/fittrack/library" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Library</Link> (5m)</li>
                    <li className="text-slate-500"><Link to="/fittrack/stats" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Stats</Link> (5m) </li>
                     <li className="text-slate-500"><Link to="/fittrack/profile" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Profile</Link> (5m)</li>
                </ul>
            </li>
        </ul>

      </div>
    </main>
    </>
  )
}

export default TocPage

export const Head: HeadFC = () => {
  return (
    <>
    <SEO title="Table of contents" description="" pathname="/" children="" />
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