import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

import { connect } from 'react-redux'

import ItemTypes from '../../constants'
import { increment, decrement } from '../../redux/modules/reducer'

const crementSource = {
  beginDrag (props) {
    return {
      value: props.value,
      dispatch: props.dispatch
    }
  },

  endDrag (props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      dropResult.increment
        ? props.dispatch(increment(item.value))
        : props.dispatch(decrement(item.value))
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Crement extends Component {
  render () {
    const { isDragging, connectDragSource, value } = this.props
    const opacity = isDragging ? 0.4 : 1

    return connectDragSource(
      <div style={{ opacity: opacity }} className='num'>
        {value}
      </div>
    )
  }
}

Crement.propTypes = {
  value: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(DragSource(ItemTypes.CREMENT, crementSource, collect)(Crement))
