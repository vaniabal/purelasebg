import React, { Fragment } from "react"
import GalleryItem from "./GalleryItem"

export default function GalleryItems({ images }) {
  return (
    <Fragment>
      {images.map(({ node }, index) => {
        return (
          <GalleryItem
            node={node}
            index={index + 1}
            key={`gallery-item-${index}`}
          />
        )
      })}
    </Fragment>
  )
}
