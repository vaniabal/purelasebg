import React from "react"
import { Title } from "../utils"
import "./faq.css"

import QuestionItem from "./QuestionItem"

export default function Faq() {
  return (
    <div className="faq-container">
      <Title
        title="често задавани въпроси"
        subtitle="Всичко което искате да знаете"
      />
      <QuestionItem />
    </div>
  )
}
