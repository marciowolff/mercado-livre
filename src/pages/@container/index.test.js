import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import Container from './index'

let wrapper

const currentRoute = { path: '/plan', nav: true }
const mockPush = jest.fn()
const mockSearchSubmit = jest.fn()
const history = { location: { pathname: '/detail/123213/plan' }, push: mockPush }

it('Container should be a function', () => {
  expect(typeof Container).toBe('function')
})

it('Should Container to match snapshot', () => {
  const tree = renderer
    .create(<Container id="id" currentRoute={currentRoute} history={history}>teste</Container>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('render', () => {
  let header, main

  beforeEach(() => {
    wrapper = mount(
      <Container
        id="id"
        className="classe"
        currentRoute={currentRoute}
        history={history}
        searchSubmit={mockSearchSubmit}
      >teste</Container>
    )
    header = wrapper.find('header')
    main = wrapper.find('main')
  })

  afterEach(() => {
    mockSearchSubmit.mockClear()
    mockPush.mockClear()
  })

  describe('header', () => {
    it('should render page header', () => {
      expect(header.props().id).toEqual('page__header')
    })

    it('should render content', () => {
      expect(header.find('.page__container')).toHaveLength(1)
    })

    describe('logo', () => {
      it('should render Logo', () => {
        expect(wrapper.find('.logoApp')).toHaveLength(1)
      })

      it('event click logo should redirect "/"', () => {
        wrapper.find('.logoApp').simulate('click')

        expect(mockPush).toHaveBeenCalledWith('/')
      })
    })

    describe('InputSearch', () => {
      it('should render InputSearch', () => {
        expect(wrapper.find('span.inputSearch__input')).toHaveLength(1)
      })

      it('event submit search', () => {
        wrapper.find('button#btnSearch--container').simulate('click', { target: {
          parentNode: {
            parentNode: {
              parentNode: { querySelector: () => ({value: 'teste clique botao'}) }
            }
          }
        } })
        
        expect(mockSearchSubmit).toHaveBeenCalledWith('teste clique botao')
      })

      it('event submit search empty value', () => {
        wrapper.find('input#search--container').simulate('keydown', { key: "Enter", target: { value: '' } })
        
        expect(mockSearchSubmit).not.toHaveBeenCalled()
      })
    })
  })

  describe('main', () => {
    it('should render page content', () => {
      expect(main.props().id).toEqual('page__id')
      expect(main.text()).toEqual('teste')
    })
  })
})


describe('render header without submitSearch', () => {
  let header
  beforeEach(() => {
    wrapper = mount(
      <Container
        id="id"
        className="classe"
        currentRoute={currentRoute}
        history={history}
      >teste</Container>
    )
    header = wrapper.find('header')
  })

  afterEach(() => {
    mockSearchSubmit.mockClear()
    mockPush.mockClear()
  })

  describe('header', () => {

    describe('InputSearch', () => {
      it('should render InputSearch', () => {
        expect(wrapper.find('span.inputSearch__input')).toHaveLength(1)
      })
      it('event submit search', () => {
        wrapper.find('button#btnSearch--container').simulate('click', { target: {
          parentNode: {
            parentNode: {
              parentNode: { querySelector: () => ({value: 'teste'}) }
            }
          }
        } })
        
        expect(mockSearchSubmit).not.toHaveBeenCalled()
        expect(mockPush).toHaveBeenCalledWith('/items?search=teste')
      })
      it('event submit search', () => {
        wrapper.find('button#btnSearch--container').simulate('click', { target: {
          parentNode: {
            parentNode: {
              parentNode: { querySelector: () => ({value: 'teste'}) }
            }
          }
        } })
        
        expect(mockSearchSubmit).not.toHaveBeenCalled()
        expect(mockPush).toHaveBeenCalledWith('/items?search=teste')
      })

      it('event submit search click onClear', () => {
        wrapper.find('.inputSearch__input').at(0).props().onClear()
        expect(mockPush).toHaveBeenCalledWith('/')
      })
    })
  })
})
