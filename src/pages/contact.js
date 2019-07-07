import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faq from "../components/faq"

const FaqPage = ({ uri }) => (
  <Layout path={uri}>
    <SEO title="За контакти" keywords={[`снимки`, `видео`, `галерия`]} />
    <Faq />
  </Layout>
)

export default FaqPage
