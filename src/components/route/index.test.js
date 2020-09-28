import React from 'react'
import { mount } from 'enzyme'

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import RouteWithSubRoutes from './index'

const newComponent = () => <p>component</p>

it('RouteWithSubRoutes should be a function', () => {
  expect(typeof RouteWithSubRoutes).toBe('function')
})

it('Should Route simple', () => {
  const routes = [
    {
      exact: true, path: '/', component: newComponent,
      routes: [
        { path: 'aqui', component: newComponent }
      ]
    }
  ]
  const wrapper = mount(<Router>
    <Switch>
      <RouteWithSubRoutes routes={routes}/>
    </Switch>
  </Router>)

  expect(wrapper.find('p').text()).toBe('component')
})

it('Should Route redirect', () => {
  const routes = [
    { exact: true, path: '/', redirect: '/redirect' },
    { exact: true, path: '/redirect', component: newComponent }
  ]
  const wrapper = mount(<Router>
    <Switch>
      <RouteWithSubRoutes routes={routes}/>
    </Switch>
  </Router>)

  expect(wrapper.find('p').text()).toBe('component')
})
