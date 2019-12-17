import React, { useState } from "react"
import QuestionItem from "./QuestionItem"
import { sortQuestions } from "../utils/sortQuestions"

const QuestionsList = ({ questions }) => {
  const sortedQuestions = sortQuestions(questions)
  const [openQuestion, setOpenQuestion] = useState(1)

  const toggleQuestion = position => {
    if (position !== openQuestion) {
      setOpenQuestion(position)
    } else {
      setOpenQuestion(0)
    }
  }

  return (
    <div>
      {sortedQuestions.map((node, index) => {
        return (
          <QuestionItem
            key={node.id}
            openQuestion={openQuestion}
            {...node}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </div>
  )
}

export default QuestionsList
