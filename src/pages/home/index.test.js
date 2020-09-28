import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import PageSearch from './index'

let wrapper

const mockPush = jest.fn()
const history = { location: { pathname: '/search', search: 'search=123' }, push: mockPush }
const mockSearchGet = jest.fn().mockImplementation(() => Promise.resolve({ results: [] }))
const service = {
  mercadoLivreAPI: {
    search: {
      get: mockSearchGet
    }
  }
}
const response = [
  { id: 1, title: 'titulo', thumbnail: 'url-img', price: '100.00', address: 'endereco' },
  { id: 2, title: 'titulo 2', thumbnail: 'url-img2', price: '200.00', address: 'endereco 2' },
]

const newWrapper = ({ history }) => 
  mount(<PageSearch history={history} service={service} />)

it('PageSearch should be a function', () => {
  expect(typeof PageSearch).toBe('function')
})

describe('Page > Home (/items?search=apple)', () => {
  beforeEach( async () => {
    await act( async () => {
      await mockSearchGet.mockImplementation(() => Promise.resolve({ results: response }))
    })

    await act( async () => {
      wrapper = newWrapper({ history })
      await wrapper.update()
    })
    
  })

  afterEach(() => {
    mockPush.mockClear()
    mockSearchGet.mockClear()
  })

  it('should call service search.get', () => {
    expect(mockSearchGet).toHaveBeenCalledWith('123')
  })

  it('should render page header', () => {
    expect(wrapper.find('header#page__header')).toHaveLength(1)
  })

  describe('InputSearch', () => {
    let header

    beforeEach(() => {
      header = wrapper.find('header#page__header')
    })

    it('event submit search', async () => {
      await act( async () => {
        header.find('button#btnSearch--container').simulate('click', { target: {
          parentNode: {
            parentNode: {
              parentNode: { querySelector: () => ({value: 'teste clique botao'}) }
            }
          }
        } })
        await wrapper.update()  
      })
      
      expect(mockSearchGet).toHaveBeenCalledWith('teste clique botao')
    })

    it('event submit search service error', async () => {
      await mockSearchGet.mockImplementation(() => Promise.reject({}))
      await act( async () => {
        header.find('button#btnSearch--container').simulate('click', { target: {
          parentNode: {
            parentNode: {
              parentNode: { querySelector: () => ({value: 'teste clique botao'}) }
            }
          }
        } })
        await wrapper.update()  
      })
      
      expect(mockSearchGet).toHaveBeenCalledWith('teste clique botao')
    })
  })

  describe('content', () => {
    let content
    beforeEach(() => {
      wrapper.update()
      content = wrapper.find('main')
    })

    it('should render page content', () => {
      expect(content.props().id).toEqual('page__home')
    })

    it('should render List', () => {
      expect(content.find('li')).toHaveLength(2)
    })
  })

  describe('empty location search service', () => {
    beforeEach( async () => {
      await act( async () => {
        await mockSearchGet.mockImplementation(() => Promise.resolve({ results: response }))
      })

      await act( async () => {
        wrapper = newWrapper({ history: { location: { }, push: mockPush } })
        await wrapper.update()
      })
      
    })

    afterEach(() => {
      mockPush.mockClear()
      mockSearchGet.mockClear()
    })

    it('should call service search.get', () => {
      expect(mockSearchGet).toHaveBeenCalledWith('123')
    })

    it('should call redirect page', () => {
      expect(mockPush).toHaveBeenCalledWith('/')
    })
  })

  describe('empty return service', () => {
    beforeEach( async () => {
      await act( async () => {
        await mockSearchGet.mockImplementation(() => Promise.resolve({ results: [] }))
      })
  
      await act( async () => {
        wrapper = newWrapper({ history })
        await wrapper.update()
      })
    })
  
    afterEach(() => {
      mockPush.mockClear()
      mockSearchGet.mockClear()
    })
  
    it('should call service search.get', () => {
      expect(mockSearchGet).toHaveBeenCalledWith('123')
    })
  
    describe('content', () => {
      let content
      beforeEach(() => {
        wrapper.update()
        content = wrapper.find('main')
      })
  
      it('should render List', () => {
        expect(content.find('li')).toHaveLength(0)
      })

      it('should render message not items', () => {
        expect(content.find('#messageNotResult')).toHaveLength(1)
        expect(content.find('#messageNotResult').text()).toEqual('Não encontramos resultados pra essa busca')
      })
    })
  })
})
