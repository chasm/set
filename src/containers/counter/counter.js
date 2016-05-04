import React, { PropTypes } from 'react'

import { Button, Col, Row } from 'react-bootstrap'

import { connect } from 'react-redux'

import { increment, decrement } from '../../redux/modules/reducer'

const mapStateToProps = (state) => {
  return {
    count: state.reducer.count
  }
}

const Counter = ({ count, dispatch }) => {
  const incrementCount = () => dispatch(increment(10))
  const decrementCount = () => dispatch(decrement(5))

  return <Row>
    <Col xs={12}>
      <h1>Counter</h1>
      <div className='nums'>
        <div className='num'>1</div>
        <div className='num'>2</div>
        <div className='num'>5</div>
        <div className='num'>10</div>
        <div className='num'>50</div>
        <div className='num'>100</div>
      </div>
      <div className="zones">
        <div className='dec'>minus</div>
        <div className='count'>{count}</div>
        <div className='inc'>plus</div>
      </div>
    </Col>
  </Row>
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

const CounterContainer = connect(mapStateToProps)(Counter)

export default CounterContainer
