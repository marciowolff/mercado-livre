import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Label from './index'

it('Label should be a function', () => {
  expect(typeof Label).toBe('function')
})

it('Should Input to match snapshot', () => {
  const tree = renderer.create(<Label htmlFor="teste">texto</Label>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Label should with text', () => {
  const wrapper = shallow(<Label htmlFor="teste">texto</Label>)

  expect(wrapper.text()).toBe('texto')
})

it('Should should without text', () => {
  const wrapper = shallow(<Label htmlFor="teste" />)

  expect(wrapper.text()).toBe('')
})

it('Should should with htmlFor', () => {
  const wrapper = shallow(<Label htmlFor="teste" />)

  expect(wrapper.props().htmlFor).toBe('teste')
})

it('Should should without htmlFor', () => {
  const wrapper = shallow(<Label />)

  expect(wrapper.props().htmlFor).toBeFalsy()
})
