import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/galllery"

const IndexPage = () => (
  <Layout>
    <SEO title="Галерия" keywords={[`снимки`, `видео`, `галерия`]} />
    <Gallery />
  </Layout>
)

export default IndexPage
