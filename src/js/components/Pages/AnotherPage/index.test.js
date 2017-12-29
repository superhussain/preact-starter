import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

// Import non-connected component
import { AnotherPage } from './index'

describe('Component: AnotherPage', () => {
  it('should render the component', () => {
    const context = shallow(<AnotherPage />)
    expect(context.find('.page__another').length).toBe(1)
  })
  it('should render a child element', () => {
    const context = shallow(<AnotherPage />)
    expect(context.find('h1').length).toBe(1)
  })
})
