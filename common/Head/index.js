import NextHead from "next/head"
import React from "react"

const Head = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>{title} | RLVX</title>
      <meta itemProp="name" content={title} />
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      <link rel="icon" href="/static/favicon.ico" />
    </NextHead>
  )
}

export default Head
