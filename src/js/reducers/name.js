const defaultState = 'Hussain'

export default function (state = defaultState, action) {
  if (!action || !action.type) return state

  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}
