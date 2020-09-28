import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import List from './index'

const MockComponent = ({ item }) => <p className="new-component">{item.label}</p>

it('List should be a function', () => {
  expect(typeof List).toBe('function')
})

it('Should List to match snapshot', () => {
  const list = [
    {label: 'item 1', Component: MockComponent },
    {label: 'item 2', Component: MockComponent }
  ]
  const tree = renderer.create(<List items={list}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should list simple', () => {
  const list = [
    {label: 'item 1', Component: MockComponent },
    {label: 'item 2', Component: MockComponent }
  ]
  const wrapper = shallow(<List items={list} />)

  const li = wrapper.find('li')

  expect(wrapper.find('ul').hasClass('list')).toBeTruthy()
  expect(li).toHaveLength(2)
})

it('Should list item active', () => {
  const list = [
    {label: 'item 1', Component: MockComponent },
    {label: 'item 2', Component: MockComponent, active: true}
  ]
  const wrapper = shallow(<List items={list} />)

  expect(wrapper.find('li.active')).toHaveLength(1)
})

it('Should list item insert new class', () => {
  const list = [
    {label: 'item 1', Component: MockComponent, className: 'teste'},
    {label: 'item 2', Component: MockComponent }
  ]
  const wrapper = shallow(<List items={list} />)

  expect(wrapper.find('li.teste')).toHaveLength(1)
})

it('Should list click item', () => {
  const clickItem = jest.fn()
  const list = [
    {label: 'item 1', Component: MockComponent },
    {label: 'item 2', Component: MockComponent }
  ]
  const wrapper = shallow(<List items={list} handleClick={clickItem}/>)

  wrapper.find('li').at(0).simulate('click')

  expect(clickItem).toHaveBeenCalledTimes(1)
})

it('Should list click item not handleClick', () => {
  const clickItem = jest.fn()
  const list = [
    {label: 'item 1', Component: MockComponent },
    {label: 'item 2', Component: MockComponent }
  ]
  const wrapper = shallow(<List items={list}/>)

  wrapper.find('li').at(0).simulate('click')

  expect(clickItem).toHaveBeenCalledTimes(0)
})

it('Should list undefined items', () => {
  const list = undefined
  const wrapper = shallow(<List items={list} />)

  expect(wrapper.find('li')).toHaveLength(0)
})

it('Should list null items', () => {
  const list = null
  const wrapper = shallow(<List items={list} />)

  expect(wrapper.find('li')).toHaveLength(0)
})

it('Should list empty items', () => {
  const list = []
  const wrapper = shallow(<List items={list} />)

  expect(wrapper.find('li')).toHaveLength(0)
})
