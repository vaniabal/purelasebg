import React, { Fragment } from "react"

import Slider from "./slider/"
import Characterisitcs from "./sections/characterisitcs"
import InvertedText from "./sections/invertedText"
import Prices from "./sections/prices"

export default function HomePage() {
  return (
    <Fragment>
      <Slider />
      <Characterisitcs />
      <InvertedText />
      <Prices />
    </Fragment>
  )
}
