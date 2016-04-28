const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

import { createAction } from 'redux-actions'

const increment = createAction(INCREMENT)
const decrement = createAction(DECREMENT)

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + (action.payload || 1)
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - (action.payload || 1)
      }
    default:
      return state
  }
}

export {
  increment,
  decrement,
  reducer
}
