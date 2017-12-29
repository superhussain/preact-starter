import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

// Import non-connected component
import { Counter } from './index'

describe('Component: Counter', () => {
  it('should render the component', () => {
    const context = shallow(<Counter />)
    expect(context.find('.counter').length).toBe(1)
  })
  it('should render a child element', () => {
    const context = shallow(<Counter />)
    expect(context.find('h3').length).toBe(1)
  })
  it('should display appropriate message if count === 0', () => {
    const context = shallow(<Counter count={0} />)
    expect(context.find('h3').text()).toEqual('Start by clicking increment...')
  })
  it('should display appropriate message if count === 1', () => {
    const context = shallow(<Counter count={1} />)
    expect(context.find('h3').text()).toEqual('Clicked 1 time')
  })
  it('should display appropriate message if count > 1', () => {
    const context = shallow(<Counter count={5} />)
    expect(context.find('h3').text()).toEqual('Clicked 5 times')
  })
  it('should display appropriate message using a random number', () => {
    const count = Math.floor(Math.random() * 10)
    const context = shallow(<Counter count={count} />)
    expect(context.find('h3').text()).toEqual((count === 0) ? 'Start by clicking increment...' : (count === 1) ? `Clicked ${count} time` : `Clicked ${count} times`)
  })
  // TODO: Create mock increment, decrement and reset functions to test counter actions
})
