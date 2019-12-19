import React from "react"
import uniqid from "uniqid"
import posed from "react-pose"

import { MdExpandMore, MdExpandLess } from "react-icons/md"

const AccorditionContent = posed.div({
  closed: { height: 0 },
  open: { height: "auto" },
})

export default function QuestionItem({
  question,
  answer,
  openQuestion,
  position,
  toggleQuestion,
}) {
  const showAnswer = openQuestion === position
  return (
    <div className="accordeon-item">
      <div>
        <h4
          className={`accordeon-title d-flex justify-content-between ${showAnswer &&
            "active-title"}`}
          onClick={() => toggleQuestion(position)}
        >
          <div className="accordeon-title-inner">
            {question.question}
            {showAnswer ? (
              <MdExpandLess className="question-icon remove-icon" />
            ) : (
              <MdExpandMore className="question-icon" />
            )}
          </div>
        </h4>
      </div>
      <AccorditionContent
        className="accordition-content"
        pose={showAnswer ? "open" : "closed"}
      >
        <div className={`accordition-content`}>
          {answer.map((item, i) => {
            const id = uniqid()
            return (
              <p style={{ padding: "0.5em 0" }} key={id}>
                {item}
              </p>
            )
          })}
        </div>
      </AccorditionContent>
    </div>
  )
}
