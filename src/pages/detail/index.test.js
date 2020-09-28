import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import dom from 'react-router-dom'
jest.mock('react-router-dom', () => ({ useParams: () => ({ id: '123' }) }))

import Detail from './index'

let wrapper

const mockPush = jest.fn()
const history = { location: { pathname: '/search', search: 'search=123' }, push: mockPush }
const mockDetail = jest.fn().mockImplementation(() => Promise.resolve({}))
const mockDescription = jest.fn().mockImplementation(() => Promise.resolve({}))

const responseDetail = { title: 'titulo', price: '12' }
const responseDescription = { plain_text: 'descricao do produto' }

const service = {
  mercadoLivreAPI: {
    product: {
      detail: mockDetail,
      description: mockDescription
    }
  }
}

const newWrapper = ({ history }) => 
  mount(<Detail history={history} service={service} />)

it('PageSearch should be a function', () => {
  expect(typeof Detail).toBe('function')
})

describe('Page > detail', () => {
  beforeEach( async () => {
    await mockDetail.mockImplementation(() => Promise.resolve(responseDetail))
    await mockDescription.mockImplementation(() => Promise.resolve(responseDescription))
    
    await act( async () => {
      wrapper = newWrapper({ history })
    })
    
    wrapper.update()
  })

  afterEach(() => {
    mockDetail.mockClear()
    mockDescription.mockClear()
  })

  it('should call service product.detail', () => {
    expect(mockDetail).toHaveBeenCalledWith('123')
  })

  it('should call service product.description', () => {
    expect(mockDescription).toHaveBeenCalledWith('123')
  })

  it('should render photoGallery', () => {
    
    expect(wrapper.find('PhotoGallery')).toHaveLength(1)
  })

  it('should render details', () => {
    const details = wrapper.find('.details')
    expect(details).toHaveLength(1)
    expect(details.find('h1').text()).toEqual('titulo')
    expect(details.find('h2').text()).toEqual('$ 0,12')
    expect(details.find('.button')).toHaveLength(1)
  })

  it('should render details', () => {
    const description = wrapper.find('.description')
    expect(description).toHaveLength(1)
    expect(description.find('h4').text()).toEqual('descricao do produto')
  })

  it('should redirect not param url', async () => {
    jest.spyOn(dom, 'useParams').mockImplementation(() => ({}))

    await act( async () => {
      wrapper = newWrapper({ history })
    })

    wrapper.update()
    expect(mockPush).toHaveBeenCalledWith('/')
  })
})
