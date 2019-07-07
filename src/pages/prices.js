import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from "../components/prices"

const IndexPage = ({ uri }) => (
  <Layout path={uri}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Pricing />
  </Layout>
)

export default IndexPage
