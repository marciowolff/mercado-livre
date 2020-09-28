import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import ElementTag from './index'

let wrapper

it('ElementTag should be a function', () => {
  expect(typeof ElementTag).toBe('function')
})

it('Should ElementTag to match snapshot', () => {
  const tree = renderer.create(<ElementTag>Conteúdo da Tag</ElementTag>).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('render', ()=> {

  it('Should return text children', () => {
    wrapper = mount(<ElementTag>Conteúdo da Tag</ElementTag>)

    expect(wrapper.find('div').text()).toEqual('Conteúdo da Tag')
  })

  it('Should return default Tag', () => {
    wrapper = mount(<ElementTag>Conteúdo da Tag</ElementTag>)

    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('Should return Tag h1 ', () => {
    wrapper = mount(<ElementTag tag="h1">Conteúdo da Tag</ElementTag>)

    expect(wrapper.find('div')).toHaveLength(0)
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('Should return Tag div with class', () => {
    wrapper = mount(<ElementTag className="class-teste">Conteúdo da Tag</ElementTag>)

    expect(wrapper.find('div').hasClass('class-teste')).toBeTruthy()
  })

  it('Should return not children', () => {
    wrapper = mount(<ElementTag />)

    expect(wrapper.find('div')).toHaveLength(0)
  })
})
