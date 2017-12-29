import { h } from 'preact' // eslint-disable-line no-unused-vars
import { deep, shallow } from 'preact-render-spy'
import Layout from './Layout'

describe('Component: Layout', () => {
  it('should render the component', () => {
    const context = shallow(<Layout />)
    expect(context.find('#app').length).toBe(1)
  })
  it('should render a child element', () => {
    const context = deep(<Layout />)
    expect(context.find('#content').length).toBe(1)
  })
  it('should render the logo', () => {
    const context = deep(<Layout />)
    expect(context.find('.app__logo').length).toBe(1)
  })
})
