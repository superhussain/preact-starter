export const incrementCount = () => ({
  type: 'INCREMENT_COUNT',
})

export const decrementCount = () => ({
  type: 'DECREMENT_COUNT',
})

export const resetCount = () => ({
  type: 'RESET_COUNT',
})

export const changeName = (name) => ({
  type: 'CHANGE_NAME',
  name,
})
