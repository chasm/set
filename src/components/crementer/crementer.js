import React, { Component, PropTypes } from 'react'
import { DropTarget } from 'react-dnd'

import ItemTypes from '../../constants'

const crementTarget = {
  drop (props) {
    return { increment: props.isIncrementer }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class Crementer extends Component {
  render () {
    const { isIncrementer, isOver, connectDropTarget } = this.props
    const inc = isIncrementer ? 'plus' : 'minus'

    return connectDropTarget(
      <div className={inc}>
        {inc}
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.4,
            backgroundColor: 'blue'
          }} />}
      </div>
    )
  }
}

Crementer.propTypes = {
  isIncrementer: PropTypes.bool,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
}

export default DropTarget(ItemTypes.CREMENT, crementTarget, collect)(Crementer)
