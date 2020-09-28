import React from 'react'
import { shallow } from 'enzyme'
import { withServices, services } from './index'

it('should be a function', () => {
  expect(typeof withServices).toBe('function')
})

it('should return a function', () => {
  expect(typeof withServices()).toBe('function')
})

it('should inject services on components', () => {
  const MockComponent = props => <div>{props.children}</div>
  const ComponentWithServices = withServices(MockComponent)
  const wrapper = shallow(<ComponentWithServices>test</ComponentWithServices>)
  expect(wrapper.prop('service')).toBe(services)
})
