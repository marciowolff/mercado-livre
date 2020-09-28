import React from 'react'
import { mount } from 'enzyme'

import Result from './index'

let wrapper

const mockPush = jest.fn()
const history = { push: mockPush }

const newWrapper = ({ items }) => 
  mount(<Result history={history} items={items} />)

it('Result should be a function', () => {
  expect(typeof Result).toBe('function')
})

describe('Page > home > result', () => {
  let list
  beforeEach( () => {
    wrapper = newWrapper({ items: [
      { id: 1, title: 'titulo', thumbnail: 'url-img', price: '100.00', address: 'endereco', shipping: { free_shipping: true } },
      { id: 2, title: 'titulo 2', thumbnail: 'url-img2', price: '200.00', address: 'endereco 2' },
    ] })

    list = wrapper.find('ul.list--search')
  })

  afterEach(() => {
    mockPush.mockClear()
  })

  it('should render page list', () => {
    expect(list).toHaveLength(1)
    expect(list.find('li')).toHaveLength(2)
  })

  describe('item 1', () => {
    let item
    beforeEach(() => {
      item = list.find('li').at(0)
    })

    it('should render ico shipping', () => {
      expect(item.find('.icoShipping')).toHaveLength(1)
    })

    it('should render title', () => {
      expect(item.find('span#title').text()).toEqual('titulo')
    })

    it('should render price', () => {
      expect(item.find('span#price').at(0).text()).toEqual('$ 100,00')
    })

    it('event click item', () => {
      item.simulate('click')
      expect(mockPush).toHaveBeenCalledWith('/items/1')
    })
  })

  describe('item 2', () => {
    let item
    beforeEach(() => {
      item = list.find('li').at(1)
    })

    it('should not render ico shipping', () => {
      expect(item.find('.icoShipping')).toHaveLength(0)
    })

    it('should render title', () => {
      expect(item.find('span#title').text()).toEqual('titulo 2')
    })

    it('should render price', () => {
      expect(item.find('span#price').at(0).text()).toEqual('$ 200,00')
    })

    it('event click item', () => {
      item.simulate('click')
      expect(mockPush).toHaveBeenCalledWith('/items/2')
    })
  })

  it('should render without items', () => {
    wrapper = newWrapper({})

    expect(wrapper.find('ul.list--search li')).toHaveLength(0)
  })
})
