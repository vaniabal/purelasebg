import React from "react"
import Img from "gatsby-image"

import "./GalleryItem.css"
import Link from "./Links"

export default function GalleryItem({ index, node }) {
  return (
    <div className="image-wrapper">
      <div className="image-wrapper-inner">
        <a
          className="image-background"
          href={Link[node.childImageSharp.fluid.originalName]}
        >
          <Img fluid={node.childImageSharp.fluid} className="gallery-image" />
        </a>
      </div>
      <div className="image-text">
        <h3>разгледай</h3>
        <p>в instagram</p>
      </div>
    </div>
  )
}
