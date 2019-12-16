import React from "react"
import QuestionItem from "./QuestionItem"
import { sortQuestions } from "../utils/sortQuestions"

const QuestionsList = ({ questions }) => {
  const sortedQuestions = sortQuestions(questions)
  return (
    <div>
      {sortedQuestions.map((node, index) => {
        return <QuestionItem key={node.id} i={index} {...node} />
      })}
    </div>
  )
}

export default QuestionsList
