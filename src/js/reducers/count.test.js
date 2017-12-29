import reducer from './count'

describe('Reducer: count', () => {
  it('should handle INCREMENT_COUNT', () => {
    expect(reducer(0, { type: 'INCREMENT_COUNT' })).toEqual(1)
  })
  it('should handle INCREMENT_COUNT again', () => {
    expect(reducer(5, { type: 'INCREMENT_COUNT' })).toEqual(6)
  })
  it('should handle DECREMENT_COUNT', () => {
    expect(reducer(1, { type: 'DECREMENT_COUNT' })).toEqual(0)
  })
  it('should handle DECREMENT_COUNT again', () => {
    expect(reducer(6, { type: 'DECREMENT_COUNT' })).toEqual(5)
  })
  it('should handle DECREMENT_COUNT negative', () => {
    expect(reducer(0, { type: 'DECREMENT_COUNT' })).toEqual(-1)
  })
  it('should handle RESET_COUNT', () => {
    expect(reducer(0, { type: 'RESET_COUNT' })).toEqual(0)
  })
  it('should handle RESET_COUNT again', () => {
    expect(reducer(5, { type: 'RESET_COUNT' })).toEqual(0)
  })
  it('should handle RESET_COUNT negative', () => {
    expect(reducer(-5, { type: 'RESET_COUNT' })).toEqual(0)
  })
})
