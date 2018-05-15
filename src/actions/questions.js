import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_FOR_OPTION = 'VOTE_FOR_OPTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function voteForOption({ authedUser, qid, answer }){
  return {
    type: VOTE_FOR_OPTION,
    authedUser,
    qid,
    answer
  }
}

export function handleVoteForOption(info){
  return (dispatch) => {
    dispatch(voteForOption(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleVoteForOption: ', e)
        dispatch(voteForOption(info))
        alert('There was an error voting for this option. Try again.')
      })
  }
}

function addQuestion (question){
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    })
      .then((question) => dispatch(addQuestion(question)))
  }
}