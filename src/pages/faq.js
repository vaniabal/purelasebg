import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faq from "../components/faq"

const FaqPage = () => (
  <Layout>
    <SEO
      title="Често задавани въпроси"
      keywords={[`снимки`, `видео`, `галерия`]}
    />
    <Faq />
  </Layout>
)

export default FaqPage
