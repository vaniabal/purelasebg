import React, { useState } from "react"
import uniqid from "uniqid"
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md"

export default function QuestionItem({ question, answer, i }) {
  const initialShow = i === 0 ? true : false
  const [showAnswer, setShowAnswer] = useState(initialShow)

  return (
    <div className="card">
      <div className="card-header">
        <h4
          className={`question-title d-flex justify-content-between ${showAnswer &&
            "active-title"}`}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question.question}
          {showAnswer ? (
            <MdRemoveCircleOutline className="remove-icon" />
          ) : (
            <MdAddCircleOutline />
          )}
        </h4>
      </div>
      {showAnswer && (
        <div className={`card-body`}>
          {answer.map((item, i) => {
            const id = uniqid()
            return <p key={id}>{item}</p>
          })}
        </div>
      )}
    </div>
  )
}
