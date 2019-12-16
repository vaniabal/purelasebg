export const sortQuestions = function(questions) {
  function compare(a, b) {
    const questionA = a.position || questions.length
    const questionB = b.position || questions.lengths

    let comparison = 0
    if (questionA > questionB) {
      comparison = 1
    } else if (questionA < questionB) {
      comparison = -1
    }
    return comparison
  }

  return questions.sort(compare)
}
