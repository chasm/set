import React, { Component, PropTypes } from 'react'

import { Col, Row } from 'react-bootstrap'
import { DragDropContext } from 'react-dnd'

import HTML5Backend from 'react-dnd-html5-backend'

import { connect } from 'react-redux'

// import { increment, decrement } from '../../redux/modules/reducer'

import { Crement, Crementer } from '../../components'

const mapStateToProps = (state) => {
  return {
    count: state.reducer.count
  }
}

// const incrementCount = () => dispatch(increment(10))
// const decrementCount = () => dispatch(decrement(5))

class Counter extends Component {
  render () {
    const { count } = this.props

    return <Row>
      <Col xs={12}>
        <h1>Counter</h1>
        <div className='nums'>
          <Crement value={1} />
          <Crement value={2} />
          <Crement value={5} />
          <Crement value={10} />
          <Crement value={50} />
          <Crement value={100} />
        </div>
        <div className='zones'>
          <Crementer />
          <div className='count'>{count}</div>
          <Crementer isIncrementer />
        </div>
      </Col>
    </Row>
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

const CounterContainer = connect(mapStateToProps)(DragDropContext(HTML5Backend)(Counter))

export default CounterContainer
