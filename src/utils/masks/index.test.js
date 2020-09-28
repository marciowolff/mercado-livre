
import Mask from './index'

it('Mask should be a function', () => {
  expect(typeof Mask).toBe('function')
})

it('Mask("") should null parameters', () => {
  const params = ['']
  const result = ''

  expect(Mask(...params)).toEqual(result)
})

describe('mask currency', () => {
  it('Mask("1", "currency") return should be 0,01', () => {
    const params = ['1', 'currency']
    const result = '0,01'

    expect(Mask(...params)).toEqual(result)
  })

  it('Mask("1", "currency", {symbol: "R$"}) return should be R$ 0,01', () => {
    const params = ['1', 'currency', {symbol: 'R$'}]
    const result = 'R$ 0,01'

    expect(Mask(...params)).toEqual(result)
  })

  it('Mask("", "currency") return should be "0,00"', () => {
    const params = ['', 'currency']
    const result = '0,00'

    expect(Mask(...params)).toEqual(result)
  })
})
