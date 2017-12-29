import reducer from './name'

describe('Reducer: name', () => {
  it('should handle CHANGE_NAME', () => {
    expect(reducer('', { type: 'CHANGE_NAME', name: 'Testing 123' })).toEqual('Testing 123')
  })
  it('should handle CHANGE_NAME again', () => {
    expect(reducer('', { type: 'CHANGE_NAME', name: '💩💩💩' })).toEqual('💩💩💩')
  })
})
