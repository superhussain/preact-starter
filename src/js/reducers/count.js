const defaultState = 0

export default function (state = defaultState, action) {
  if (!action || !action.type) return state

  switch (action.type) {
    case 'INCREMENT_COUNT': {
      const newState = state + 1
      return newState
    }
    case 'DECREMENT_COUNT': {
      const newState = state - 1
      return newState
    }
    case 'RESET_COUNT': {
      return defaultState
    }
    default:
      return state
  }
}
