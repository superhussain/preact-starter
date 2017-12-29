import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

// Import non-connected component
import { Contact } from './index'

describe('Component: Contact', () => {
  it('should render the component', () => {
    const context = shallow(<Contact />)
    expect(context.find('.page__contact').length).toBe(1)
  })
  it('should render a child element', () => {
    const context = shallow(<Contact />)
    expect(context.find('h1').length).toBe(1)
  })
  it('should render a form', () => {
    const context = shallow(<Contact />)
    expect(context.find('form').length).toBe(1)
  })
  it('should render a hidden input with name "form-name" and value containing "contact"', () => {
    const context = shallow(<Contact />)
    expect(context.find('input')[0].attributes.name).toMatch(/form-name/)
    expect(context.find('input')[0].attributes.value).toMatch(/contact/)
  })
  it('should render a name input', () => {
    const context = shallow(<Contact />)
    expect(context.find('.input__group').find('input')[0].attributes.name).toMatch(/name/)
  })
  it('should render an email input', () => {
    const context = shallow(<Contact />)
    expect(context.find('.input__group').find('input')[1].attributes.name).toMatch(/email/)
  })
  it('should render a message textarea', () => {
    const context = shallow(<Contact />)
    expect(context.find('.input__group').find('textarea')[0].attributes.name).toMatch(/message/)
  })
  it('should render a submit button', () => {
    const context = shallow(<Contact />)
    expect(context.find('.input__group').find('button')[0].attributes.type).toMatch(/submit/)
  })
})
