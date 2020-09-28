import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import PhotoGallery from './index'
import { wrap } from 'module'
let wrapper

it('PhotoGallery should be a function', () => {
  expect(typeof PhotoGallery).toBe('function')
})

it('Should PhotoGallery to match snapshot', () => {
  const tree = renderer.create(<PhotoGallery items={[ {url: 'url-1'}, { url: 'url-2' } ]}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should render PhotoGallery without items', () => {
  const wrapper = mount(<PhotoGallery  />)

  expect(wrapper.find('.photoGallery')).toHaveLength(0)
})

it('Should render PhotoGallery update tag element', () => {
  const wrapper = mount(<PhotoGallery tag='aside' items={[{url: 'url-1'}]} />)

  expect(wrapper.find('aside.photoGallery')).toHaveLength(1)
})

describe('render', () => {
  beforeEach(() => {
    wrapper = mount(<PhotoGallery items={[ {url: 'url-1'}, { url: 'url-2' } ]} />)
  })

  it('should render photoGallery', () => {
    expect(wrapper.find('.photoGallery')).toBeTruthy()
  })

  it('should render img featured equal first item', () => {
    expect(wrapper.find('figure img').props().src).toEqual('url-1')
  })

  it('should render thumbs', () => {
    const thumbs = wrapper.find('.thumbs img')

    expect(thumbs).toHaveLength(2)
  })

  it('event click thumbs update featured img', () => {
    expect(wrapper.find('figure img').props().src).toEqual('url-1')

    wrapper.find('.thumbs img').at(1).simulate('click')

    expect(wrapper.find('figure img').props().src).toEqual('url-2')
  })
})
