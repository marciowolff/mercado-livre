
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import Input from './index'

const noop = jest.fn()

afterEach(() => {
  noop.mockClear()
})

it('Input should be a function', () => {
  expect(typeof Input).toBe('function')
})

it('Should Input to match snapshot', () => {
  const tree = renderer
    .create(<Input id="teste" label="Texto" handleChange={noop} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('render', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Input id="teste"/>)
  })

  it('Should render default', () => {
    expect(wrapper.find('label')).toHaveLength(0)
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('Should default className', () => {
    expect(wrapper.hasClass('input__container')).toBeTruthy()
  })

  it('Should default type equal text', () => {
    expect(wrapper.find('input').prop('type')).toBe('text')
  })
})

it('Should render without label', () => {
  const wrapper = shallow(<Input id="teste"/>)

  expect(wrapper.find('label')).toHaveLength(0)
  expect(wrapper.find('input')).toHaveLength(1)
})

it('Should render with label', () => {
  const wrapper = mount(<Input id="teste" label="teste"/>)

  expect(wrapper.find('label')).toHaveLength(1)
  expect(wrapper.find('input')).toHaveLength(1)
})

it('Should render with icon', () => {
  const wrapper = mount(<Input id="teste" label="teste" icon="icone"/>)

  expect(wrapper.find('.icone')).toHaveLength(2)
})


it('Should render input disabled', () => {
  const wrapper = mount(<Input id="teste" disabled={true} />)

  expect(wrapper.find('.input__container').hasClass('disabled')).toBeTruthy()
  expect(wrapper.find('input').props().disabled).toBeTruthy()
})

it('Should render input error', () => {
  const wrapper = mount(<Input id="teste" error={true} errorMessage="mensagem de erro" />)

  expect(wrapper.find('.input__container').hasClass('error')).toBeTruthy()
  expect(wrapper.find('.input__container .error').text()).toEqual('mensagem de erro')
})

it('Should render input required', () => {
  const wrapper = mount(<Input id="teste" required />)

  expect(wrapper.find('.input__container').hasClass('required')).toBeTruthy()
  expect(wrapper.find('input').props().required).toBeTruthy()
})

it('Should render input refs', () => {
  mount(<Input id="teste" refs={noop} />)

  expect(noop).toHaveBeenCalledTimes(1)
})

it('Should set className container', () => {
  const wrapper = mount(<Input id="teste" label="teste" className="inputClass" />)

  expect(wrapper.find('.input__container').hasClass('inputClass')).toBeTruthy()
})

it('Should set value', () => {
  const wrapper = mount(<Input id="teste" defaultValue="valor do input" />)

  expect(wrapper.find('input').prop('defaultValue')).toBe('valor do input')
})

it('Should input with showClear and without onClear', () => {
  const wrapper = mount(<Input id="teste" defaultValue="valor do input" showClear={true} />)

  wrapper.find('button.btn--clear').simulate('click')
  expect(noop).toHaveBeenCalledTimes(0)
})

it('Should input with onClear', () => {
  const wrapper = mount(<Input id="teste" defaultValue="valor do input" showClear={true} onClear={noop} />)

  wrapper.find('button.btn--clear').simulate('click')
  expect(noop).toHaveBeenCalledTimes(1)
})

it('Should input with onClear and disabled', () => {
  const wrapper = mount(<Input id="teste" defaultValue="valor do input" showClear={true} onClear={noop} disabled={true} />)

  wrapper.find('button.btn--clear').simulate('click')
  expect(noop).not.toHaveBeenCalled()
})

it('Should input with onChange', () => {
  const wrapper = shallow(<Input id="teste" onChange={noop} />)

  wrapper.find('input').simulate('change', { target: { value: 'teste' } })
  expect(noop).toHaveBeenCalledTimes(1)
})

it('Should input with type search', () => {
  const wrapper = shallow(<Input id="teste" type="search" />)

  expect(wrapper.find('input').prop('type')).toBe('search')
})
