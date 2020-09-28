
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Button from './index'

const noop = jest.fn()

it('Button should be a function', () => {
  expect(typeof Button).toBe('function')
})

it('Should Button to match snapshot', () => {
  const tree = renderer.create(<Button onClick={noop} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button contain text', () => {
  const wrapper = shallow(<Button onClick={noop}>botão</Button>)

  expect(wrapper.text()).toBe('botão')
})

it('Should Button disabled', () => {
  const wrapper = shallow(<Button disabled onClick={noop}>botão</Button>)

  expect(wrapper.is('[disabled]')).toBeTruthy()
})

it('Should Button add className', () => {
  const wrapper = shallow(<Button className="btnTeste">botão</Button>)

  expect(wrapper.hasClass('btnTeste')).toBeTruthy()
})

it('Should Button type link', () => {
  const wrapper = shallow(<Button type="link">botão</Button>)

  expect(wrapper.find('a')).toBeTruthy()
})

it('Should Button click', () => {
  const wrapper = shallow(<Button onClick={noop}>botão</Button>)
  wrapper.find('button').simulate('click')

  expect(noop).toHaveBeenCalledTimes(1)
})
