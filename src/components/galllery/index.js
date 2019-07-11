import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Title } from "../utils"
import GalleryItems from "./GalleryItems"
import "./gallery.css"

const query = graphql`
  query {
    getImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 500) {
              originalName
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const images = data.getImages.edges || []
        return (
          <div className="gallery-container">
            <div>
              <Title title="Нашето студио" subtitle="Eлегантно и модерно" />
            </div>
            <GalleryItems images={images} />
          </div>
        )
      }}
    />
  )
}
