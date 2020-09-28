
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import InputSearch from './index'

const noop = jest.fn()
let wrapper

afterEach(() => {
  noop.mockClear()
})

it('InputSearch should be a function', () => {
  expect(typeof InputSearch).toBe('function')
})

it('Should InputSearch to match snapshot', () => {
  const tree = renderer
    .create(<InputSearch id="teste" label="Texto" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('render', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<InputSearch id="teste"/>)
  })

  it('Should render default', () => {
    expect(wrapper.find('Input')).toHaveLength(1)
    expect(wrapper.find('Button')).toHaveLength(1)
  })

  it('Should default className', () => {
    expect(wrapper.hasClass('inputSearch__container')).toBeTruthy()
  })
})

describe('Events', () => {
  const mockonKeyUp = jest.fn()
  const mockonSubmit = jest.fn()
  const mockonBlur = jest.fn()

  beforeEach(() => {
    wrapper = mount(
      <InputSearch
        id="teste"
        onKeyUp={mockonKeyUp}
        onSubmit={mockonSubmit}
        onBlur={mockonBlur}
      />
    )
  })

  afterEach(() => {
    mockonKeyUp.mockClear()
    mockonSubmit.mockClear()
    mockonBlur.mockClear()
  })

  it('event click button', () => {
    wrapper.find('button#btnSearch--teste').simulate('click', {
      target: {
        parentNode: {
          parentNode: {
            parentNode: { querySelector: () => ({ value: 'valor' }) }
          }
        }
      }
    })

    expect(mockonSubmit).toHaveBeenCalledWith('valor')
  })

  it('event KeyDown input', () => {
    wrapper.find('input').simulate('keydown', { key: '1' })

    expect(mockonSubmit).not.toHaveBeenCalled()
  })

  it('event KeyDown input with key equal "Enter', () => {
    wrapper.find('input').simulate('keydown', { key: 'Enter', target: { value: 'valor' } })

    expect(mockonSubmit).toHaveBeenCalledWith("valor")
  })

  it('event KeyUp input without onKeyUp', () => {
    wrapper = mount(<InputSearch />)
    wrapper.find('input').simulate('keyup', { preventDefault: jest.fn(), target: { value: 'valor' } })

    expect(mockonKeyUp).not.toHaveBeenCalled()
  })

  it('event KeyUp input with onKeyUp', () => {
    wrapper.find('input').simulate('keyup', { preventDefault: jest.fn(), target: { value: 'valor' } })

    expect(mockonKeyUp).toHaveBeenCalledWith('valor')
  })

  it('event blur input', () => {
    wrapper.find('input').simulate('blur', { target: { value: 'valor' } })

    expect(mockonBlur).toHaveBeenCalledWith('valor')
  })

  it('event blur input without onBlur', () => {
    wrapper = mount(<InputSearch />)
    wrapper.find('input').simulate('blur', { target: { value: 'valor' } })

    expect(mockonBlur).not.toHaveBeenCalled()
  })
})
