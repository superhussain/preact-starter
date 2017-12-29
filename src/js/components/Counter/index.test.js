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
  it('should correctly increment count value on button click', () => {
    let context
    let count = 0

    const mockIncrementCount = () => { count += 1 }

    context = shallow(<Counter count={count} incrementCount={mockIncrementCount} />)
    expect(context.find('h3').text()).toEqual('Start by clicking increment...')

    // increment count
    context.find('.button--green').simulate('click');

    context = shallow(<Counter count={count} incrementCount={mockIncrementCount} />)
    expect(context.find('h3').text()).toEqual('Clicked 1 time')

    // increment count
    context.find('.button--green').simulate('click');

    context = shallow(<Counter count={count} incrementCount={mockIncrementCount} />)
    expect(context.find('h3').text()).toEqual('Clicked 2 times')
  })
  it('should correctly decrement count value on button click', () => {
    let context
    let count = 2

    const mockDecrementCount = () => { count -= 1 }

    context = shallow(<Counter count={count} decrementCount={mockDecrementCount} />)
    expect(context.find('h3').text()).toEqual('Clicked 2 times')

    // decrement count
    context.find('.button--yellow').simulate('click');

    context = shallow(<Counter count={count} decrementCount={mockDecrementCount} />)
    expect(context.find('h3').text()).toEqual('Clicked 1 time')

    // decrement count
    context.find('.button--yellow').simulate('click');

    context = shallow(<Counter count={count} decrementCount={mockDecrementCount} />)
    expect(context.find('h3').text()).toEqual('Start by clicking increment...')
  })
  it('should correctly reset count value on button click', () => {
    let context
    let count = 10

    const mockResetCount = () => { count = 0 }

    context = shallow(<Counter count={count} resetCount={mockResetCount} />)
    expect(context.find('h3').text()).toEqual('Clicked 10 times')

    // reset count
    context.find('.button--red').simulate('click');

    context = shallow(<Counter count={count} resetCount={mockResetCount} />)
    expect(context.find('h3').text()).toEqual('Start by clicking increment...')
  })
})

