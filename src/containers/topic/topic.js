import React, { PropTypes } from 'react'

import { Button, Col, Row } from 'react-bootstrap'

import { connect } from 'react-redux'

import { increment, decrement } from '../../redux/modules/reducer'

const mapStateToProps = (state) => {
  return {
    count: state.reducer.count
  }
}

const Topic = ({ count, dispatch }) => {
  const incrementCount = () => dispatch(increment(10))
  const decrementCount = () => dispatch(decrement(5))

  return <Row>
    <Col xs={12}>
      <h1>Topic</h1>
      <Button onClick={incrementCount}>+</Button>
      <p>The count is {count}.</p>
      <Button onClick={decrementCount}>-</Button>
    </Col>
  </Row>
}

Topic.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

const TopicContainer = connect(mapStateToProps)(Topic)

export default TopicContainer
