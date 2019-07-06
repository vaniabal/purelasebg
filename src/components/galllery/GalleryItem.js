import React from "react"
import Img from "gatsby-image"

import "./GalleryItem.css"

const imageText = {
  "img-1.jpeg": "awesome prizza",
  "img-2.jpeg": "awesome pork",
  "img-3.jpeg": "awesome steak",
}

export default function GalleryItem({ index, node }) {
  return (
    <div className="image-wrapper">
      <div className="image-wrapper-inner">
        <Img fluid={node.childImageSharp.fluid} className="gallery-image" />
        <p className="info">
          {imageText[node.childImageSharp.fluid.originalName]}
        </p>
      </div>
    </div>
  )
}
