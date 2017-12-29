import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

// Import non-connected component
import { NameInput } from './index'

describe('Component: NameInput', () => {
  it('should render the component', () => {
    const context = shallow(<NameInput />)
    expect(context.find('.card').length).toBe(1)
  })
  it('should render a child element', () => {
    const context = shallow(<NameInput />)
    expect(context.find('.input__group').length).toBe(1)
  })
  it('should render an input', () => {
    const context = shallow(<NameInput />)
    expect(context.find('.input__group').find('input').length).toBe(1)
  })
  it('should pass props to value of input', () => {
    const context = shallow(<NameInput name="💩" />)
    expect(context.find('input')[0].attributes.value).toMatch(/💩/)
  })
  it('should correctly change name value onInput', () => {
    let context
    let name = ''

    const mockChangeName = (newName) => { name = newName }

    context = shallow(<NameInput name={name} changeName={mockChangeName} />)
    expect(context.find('input')[0].attributes.value).toEqual('')

    // reset count
    context.find('input').simulate('input', { target: { value: '💩' } });

    context = shallow(<NameInput name={name} changeName={mockChangeName} />)
    expect(context.find('input')[0].attributes.value).toEqual('💩')
  })
})
