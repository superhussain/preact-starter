import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

// Import non-connected component
import { Home } from './index'

describe('Component: Home', () => {
  it('should render the component', () => {
    const context = shallow(<Home />)
    expect(context.find('.page__home').length).toBe(1)
  })
  it('should render a child element', () => {
    const context = shallow(<Home />)
    expect(context.find('h1').length).toBe(1)
  })
  it('should render h1 with "Hello"', () => {
    const context = shallow(<Home />)
    expect(context.find('h1').text()).toMatch(/Hello/)
  })
  it('should render h1 with "Hello" and name', () => {
    const context = shallow(<Home name="💩" />)
    expect(context.find('h1').text()).toMatch(/Hello 💩!/)
  })
  it('should expect name to change', () => {
    let name = ''
    let context

    context = shallow(<Home name={name} />)
    expect(context.find('h1').text()).toEqual('Hello World!')

    name = '💩'

    context = shallow(<Home name={name} />)
    expect(context.find('h1').text()).toEqual('Hello 💩!')
  })
})
