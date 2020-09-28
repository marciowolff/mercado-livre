
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Output from './index'

it('Output should be a function', () => {
  expect(typeof Output).toBe('function')
})

it('Should Input to match snapshot', () => {
  const tree = renderer.create(<Output id="teste" label="Texto" value="texto output" />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('render', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Output id="teste" value="texto output"/>)
  })

  it('Should render default', () => {
    expect(wrapper.find('.output--label')).toHaveLength(0)
    expect(wrapper.find('.output--value')).toHaveLength(1)
  })

  it('Should default className', () => {
    expect(wrapper.hasClass('output-container')).toBeTruthy()
  })
})

it('Should render without label', () => {
  const wrapper = shallow(<Output id="teste" value="texto output"/>)

  expect(wrapper.find('.output--label')).toHaveLength(0)
  expect(wrapper.find('.output--value')).toHaveLength(1)
})

it('Should render with label', () => {
  const wrapper = shallow(<Output id="teste" label="teste" value="texto output"/>)

  expect(wrapper.find('.output--label')).toHaveLength(1)
  expect(wrapper.find('.output--value')).toHaveLength(1)
})

it('Should set className container', () => {
  const wrapper = shallow(<Output id="teste" label="teste" className="outputClass" value="texto output"/>)

  expect(wrapper.hasClass('output-container outputClass')).toBeTruthy()
})
