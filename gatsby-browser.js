import "./src/styles/global.css"

//gatsby-browser.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Helmet } from "react-helmet";
import { navigate } from 'gatsby';

const onRedirectCallback = (appState) => {
 // Use Gatsby's navigate method to replace the url
 navigate(appState?.returnTo || '/', { replace: true });
};


export const wrapRootElement = ({ element }) => {
 return (
  <Auth0Provider
   domain={process.env.GATSBY_AUTH0_DOMAIN}
   clientId={process.env.GATSBY_AUTH0_CLIENTID}
   redirectUri={window && window.location.origin}
   onRedirectCallback={onRedirectCallback}
   >
      <Helmet>
      <html lang="en" />
    </Helmet>
    {element}
 </Auth0Provider>
 );
};


