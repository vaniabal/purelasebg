import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Services from "./services"
const SERVICES = graphql`
  {
    services: allContentfulService {
      edges {
        node {
          id
          name
          price
          servicePosition
        }
      }
    }
  }
`
export default function Prices() {
  return (
    <div>
      <StaticQuery
        query={SERVICES}
        render={({ services: { edges } }) => <Services services={edges} />}
      />
    </div>
  )
}
