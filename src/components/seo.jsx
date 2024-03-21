import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" property="og:description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={image.url} />
      <meta property="og:image" content={image.url} />
    </>
  )
}