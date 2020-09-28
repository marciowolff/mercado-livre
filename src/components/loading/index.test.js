import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Loading from './index'

it('Loading should be a function', () => {
  expect(typeof Loading).toBe('function')
})

it('Should List to match snapshot', () => {
  const tree = renderer.create(<Loading show={true}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should not render Loading', () => {
  expect(mount(<Loading />).find('.loading')).toHaveLength(0)
})

it('Should render Loading', () => {
  const wrapper = mount(<Loading show={true} />)

  expect(wrapper.find('span.loading').hasClass('loading--icon')).toBeTruthy()
  expect(wrapper.find('svg.ico')).toHaveLength(1)
  expect(wrapper.find('small').text()).toEqual('carregando...')
})

it('Should render Loading add className', () => {
  const wrapper = mount(<Loading show={true} className="teste" />)

  expect(wrapper.find('span.loading').hasClass('teste')).toBeTruthy()
})

it('Should render Load without message', () => {
  const wrapper = mount(<Loading show={true} hideMessage={true} />)

  expect(wrapper.find('small')).toHaveLength(0)
})
