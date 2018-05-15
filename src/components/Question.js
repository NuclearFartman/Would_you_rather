import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {
  render() {
    const { id } = this.props
    const { optionOne, optionTwo } = this.props.question
    return (
      <div>
        <Link to={`/questions/${id}`} className='question'>
          <p> Would you rather </p>
          <p> Option A: {optionOne.text} </p>
          <p> Option B: {optionTwo.text} </p>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id]

  return {
    id,
    question
  }
}

export default connect(mapStateToProps)(Question)