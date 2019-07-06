import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./slider.css"

const Slider = ({ imgName, imgMaxWidth }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "slide2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <div className="home-image-wrapper">
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          className="home-image-inner"
        />
      </div>
    )}
  />
)

export default Slider
