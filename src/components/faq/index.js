import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Title } from "../utils"
import QuestionsList from "./QuestionsList"
import "./faq.css"

const QUESTIONS = graphql`
  {
    questions: allContentfulFaq {
      nodes {
        answer
        question {
          question
        }
        id
        position
      }
    }
  }
`

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="faq-container">
            <Title
              title="често задавани въпроси"
              subtitle="Всичко което искате да знаете"
            />
            <StaticQuery
              query={QUESTIONS}
              render={({ questions: { nodes } }) => (
                <QuestionsList questions={nodes} />
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
