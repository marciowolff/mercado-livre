import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Load from './index'

it('Load should be a function', () => {
  expect(typeof Load).toBe('function')
})

it('Should List to match snapshot', () => {
  const tree = renderer.create(<Load show={true}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should not render Load', () => {
  expect(shallow(<Load />).find('.loading')).toHaveLength(0)
})

it('Should render Load add className', () => {
  const wrapper = shallow(<Load show={true} className="teste" />)

  expect(wrapper.find('.loading').hasClass('teste')).toBeTruthy()
  expect(wrapper.hasClass('progress--bar')).toBeTruthy()
  expect(wrapper.find('.ico')).toHaveLength(0)
  expect(wrapper.find('small').text()).toEqual('carregando...')
})


it('Should render Load without message', () => {
  const wrapper = shallow(<Load show={true} hideMessage={true} />)

  expect(wrapper.find('.loading')).toBeTruthy()
  expect(wrapper.hasClass('progress--bar')).toBeTruthy()
  expect(wrapper.find('.ico')).toHaveLength(0)
  expect(wrapper.find('small')).toHaveLength(0)
})

it('Should render Load type progress', () => {
  const wrapper = shallow(<Load show={true} type="progress" />)

  expect(wrapper.find('.loading')).toBeTruthy()
  expect(wrapper.hasClass('progress--bar')).toBeTruthy()
  expect(wrapper.find('.ico')).toHaveLength(0)
  expect(wrapper.find('small').text()).toEqual('carregando...')
})

it('Should render Load type icon', () => {
  const wrapper = shallow(<Load show={true} type="icon" icon={<span className="ico" />} />)

  expect(wrapper.find('.loading')).toBeTruthy()
  expect(wrapper.hasClass('loading--icon')).toBeTruthy()
  expect(wrapper.find('.ico')).toHaveLength(1)
  expect(wrapper.find('small').text()).toEqual('carregando...')
})
