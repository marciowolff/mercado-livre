import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import Icon from './index'
import { icons } from './index'

it('Icon should be a function', () => {
  expect(typeof Icon).toBe('function')
})

it('Should Icon to match snapshot', () => {
  const tree = renderer.create(<Icon name="lupa" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Icon lupa', () => {
  const wrapper = mount(<Icon name="lupa" className="teste" />)
  const Ico = icons['lupa']
  const wrapperIcon = shallow(<Ico width="24" height="24" className="ico lupa teste"/>)

  expect(wrapper.find('svg').props().className).toContain('ico lupa teste')
  expect(wrapper.find('svg').html()).toEqual(wrapperIcon.find('svg').html())
})

it('Should Icon close', () => {
  const wrapper = mount(<Icon name="close" />)
  const Ico = icons['close']
  const wrapperIcon = shallow(<Ico width="24" height="24" className="ico close "/>)

  expect(wrapper.find('svg').props().className).toContain('ico close')
  expect(wrapper.find('svg').html()).toEqual(wrapperIcon.find('svg').html())
})

it('Should Icon loading', () => {
  const wrapper = mount(<Icon name="loading" width="80" height="80" />)
  const Ico = icons['loading']
  const wrapperIcon = shallow(<Ico width="80" height="80" className="ico loading "/>)

  expect(wrapper.find('svg').props().className).toContain('ico loading')
  expect(wrapper.find('svg').html()).toEqual(wrapperIcon.find('svg').html())
})

it('Should Icon width default', () => {
  const wrapper = shallow(<Icon name="lupa" />)

  expect(wrapper.find('.ico').props().width).toBe(24)
})

it('Should Icon set width', () => {
  const wrapper = shallow(<Icon name="lupa" width="50" />)

  expect(wrapper.find('.ico').props().width).toBe('50')
})

it('Should Icon height default', () => {
  const wrapper = shallow(<Icon name="lupa" />)

  expect(wrapper.find('.ico').props().height).toBe(24)
})

it('Should Icon set height', () => {
  const wrapper = shallow(<Icon name="lupa" height="50" />)

  expect(wrapper.find('.ico').props().height).toBe('50')
})

it('Should Icon null', () => {
  const wrapper = shallow(<Icon />)

  expect(wrapper.find('.ico')).toHaveLength(0)
})

it('Should Icon empty', () => {
  const wrapper = shallow(<Icon name=""/>)

  expect(wrapper.find('.ico')).toHaveLength(0)
})

it('Should Icon undefined', () => {
  const wrapper = shallow(<Icon name={undefined} />)

  expect(wrapper.find('.ico')).toHaveLength(0)
})
