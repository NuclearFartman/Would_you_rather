import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Link, Redirect } from 'react-router-dom'
import QuestionDetails from './QuestionDetails'

class Home extends Component {
  state = {
    showAnswered: false
  }
  render() {
    const { showAnswered } = this.state
    const { authedUser, answeredQuestionIds, unansweredQuestionIds } = this.props

    if (authedUser === '') {
      return <Redirect to='/login' />
    }

    return (
      <div className='homepage'>
        <h3> Home Page </h3>
        <button
          onClick={(e) => this.setState((prevState) => ({ showAnswered: !prevState.showAnswered }))}
        >
          {showAnswered === true ? 'Answered questions' : 'Unanswered questions'}
        </button>
        <ul>
          {showAnswered
            ? answeredQuestionIds.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))
            : unansweredQuestionIds.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

function getUnansweredQuestionIds(authedUser, questions) {
  return Object.keys(questions)
    //get all questionsIds which the authedUser NOT answered
    .filter((key) => !questions[key].optionOne.votes.includes(authedUser)
      && !questions[key].optionTwo.votes.includes(authedUser))
    //sort it so the most recently questionIds are on top
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
}

function getAnsweredQuestionIds(authedUser, questions) {
  return Object.keys(questions)
    //get all questionsIds which the authedUser answered
    .filter((key) => questions[key].optionOne.votes.includes(authedUser)
      || questions[key].optionTwo.votes.includes(authedUser))
    //sort it so the most recently questionIds are on top
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    unansweredQuestionIds: getUnansweredQuestionIds(authedUser, questions),
    answeredQuestionIds: getAnsweredQuestionIds(authedUser, questions)
  }
}

export default connect(mapStateToProps)(Home)