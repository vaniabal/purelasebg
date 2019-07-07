import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/home/"

const IndexPage = ({ uri }) => (
  <Layout path={uri}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomePage />
  </Layout>
)

export default IndexPage
