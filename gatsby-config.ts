import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `curio`,
    siteUrl: `https://ourcurio.xyz`,
    description: `A set of quick proof of concept projects mostly built with AI`,
    image: `ourcurio.png`,
    twitterUsername: `marccull`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/curioicon.png"
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `limelight`,
        `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        `cormorant:ital,wght@0,300..700;1,300..700&family=Montserrat:ital,wght@0,100..900;1,100..900`
      ],
      display: 'swap'
    }
  },
  "gatsby-plugin-react-helmet", 
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-PWM0GM8VKT", // Google Analytics / GA
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
       // optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
       // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
       // origin: "YOUR_SELF_HOSTED_ORIGIN",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
  },
  "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;