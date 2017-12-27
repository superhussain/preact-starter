const actions = (currentStore) => ({
  increment: ({ count }) => ({ count: count + 1 }),
  decrement: ({ count }) => ({ count: count - 1 }),
  resetCount: () => ({ count: 0 }),
  incrementAsync(state) {
    setTimeout(() => {
      currentStore.setState({ count: state.count + 1 })
    }, 300)
  },
  changeName: (state, name) => ({ name }),
})

export default actions
