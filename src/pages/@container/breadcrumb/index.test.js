import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Breadcrumb from './index'

let wrapper

const mockPush = jest.fn()
const mockGoBack = jest.fn()
const history = { push: mockPush, goBack: mockGoBack }

it('Breadcrumb should be a function', () => {
  expect(typeof Breadcrumb).toBe('function')
})

it('Should Breadcrumb to match snapshot', () => {
  const tree = renderer
    .create(<Breadcrumb id="id" history={history} items={[{label: 'teste 1', url: '/'}, { label: 'teste 2', url: '/aqui' }]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('render', () => {
  beforeEach(() => {
    wrapper = mount(
      <Breadcrumb id="id" history={history} items={[{label: 'teste 1', url: '/'}, { label: 'teste 2', url: '/aqui' }]} />
    )
  })

  afterEach(() => {
    mockPush.mockClear()
    mockGoBack.mockClear()
  })

  it('should render list', () => {
    expect(wrapper.find('li')).toHaveLength(2)
  })

  it('should render list links', () => {
    const link = wrapper.find('.button') 
    expect(link).toHaveLength(1)
    expect(link.text()).toEqual('teste 1')

    link.simulate('click')

    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('should render list last children not link', () => {
    const link = wrapper.find('p') 
    
    expect(link).toHaveLength(1)
    expect(link.text()).toEqual('teste 2')

    link.simulate('click')

    expect(mockPush).not.toHaveBeenCalled()
  })

  it('should render empty items', () => {
    wrapper = mount(<Breadcrumb id="id" history={history} />)

    expect(wrapper.find('p')).toHaveLength(0)
    expect(wrapper.find('.button')).toHaveLength(0)
  })

  it('should event penultimate item', () => {
    wrapper = mount(
      <Breadcrumb id="id" history={history} items={[
        { label: 'teste 1', url: '/' },
        { label: 'teste 2', url: '/aqui' },
        { label: 'teste 3' }
      ]} />
    )

    wrapper.find('.button').at(1).simulate('click')
    expect(mockGoBack).toHaveBeenCalled()
  })
})
